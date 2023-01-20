import React, { useState, useEffect } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { Tabs, Button, Input, Select } from 'antd'
import { createStage, createPerformance } from './graphql/mutations'
import { listStages } from './graphql/queries'
import { slugify } from './helpers'

import protectedRoute from './protectedRoute'
const { TabPane } = Tabs
const { TextArea } = Input

const initialState = {
  name: '',
  performer: '',
  description: '',
  time: '',
  performanceStageId: '',
}

function Admin() {
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    async function getAllStages() {
      const apiData = await API.graphql({
        query: listStages,
        authMode: 'API_KEY',
      })
      console.log('apiData: ', apiData)
      const {
        data: {
          listStages: { items },
        },
      } = apiData
      setOptions(items.map((item) => ({ value: item.id, label: item.name })))
      console.log('items: ', items)
      setLoading(false)
    }

    getAllStages()
  }, [])

  async function signOut() {
    await Auth.signOut()
  }
  function onChange(event) {
    // console.log(event.target.name, ':', event.target.value)
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }
  async function createNewStage() {
    const { name } = formState
    const stage = { name, id: slugify(name) }
    await API.graphql(graphqlOperation(createStage, { input: stage }))
    setFormState(initialState)
  }
  async function createNewPerformance() {
    const { performer, description, time, performanceStageId } = formState
    const performance = { performer, description, time, performanceStageId }
    await API.graphql(
      graphqlOperation(createPerformance, { input: performance })
    )
    setFormState(initialState)
  }
  const { name, performer, description, time } = formState

  if (loading) return <h2>Loading...</h2>
  return (
    <div>
      <h1 style={titleStyle}>Admin</h1>
      <Tabs defaultActiveKey='1'>
        <TabPane tab='Create Performance' key='1'>
          <div style={formContainer}>
            <h3>Create new Performance</h3>
            <Input
              placeholder='Performer name'
              style={input}
              name='performer'
              value={performer}
              onChange={onChange}
            />
            <Select
              defaultValue={options.length > 0 ? options[0].value : ''}
              style={{ width: 120, marginBottom: 10 }}
              options={options}
              onChange={(value) => {
                setFormState({
                  ...formState,
                  performanceStageId: value,
                })
              }}
            />

            <Input
              placeholder='Performance time'
              style={input}
              name='time'
              value={time}
              onChange={onChange}
            />
            <TextArea
              placeholder='Performance description'
              style={input}
              rows={4}
              name='description'
              onChange={onChange}
              value={description}
            />
            <Button type='primary' onClick={createNewPerformance}>
              Create Performance
            </Button>
          </div>
        </TabPane>
        <TabPane tab='Create Stage' key='2'>
          <div style={formContainer}>
            <h3>Create new Stage</h3>
            <Input
              placeholder='Stage name'
              style={input}
              name='name'
              value={name}
              onChange={onChange}
            />
            <Button type='primary' onClick={createNewStage}>
              Create Stage
            </Button>
          </div>
        </TabPane>
      </Tabs>
      <Button type='primary' onClick={signOut}>
        Sign Out
      </Button>
    </div>
  )
}

const input = { marginBottom: 10 }
const formContainer = { marginBottom: 70 }
const titleStyle = {
  fontWeight: 'normal',
  margin: '0px 0px 10px 0px',
}

export default protectedRoute(Admin)
