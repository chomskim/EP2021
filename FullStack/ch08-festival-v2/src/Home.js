import React, { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { listStages } from './graphql/queries'
import { Link } from 'react-router-dom'
import { List } from 'antd'

function Home() {
  const [stages, setStages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getStages() {
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
      setLoading(false)
      setStages(items)
      console.log('stages: ', items)
    }

    getStages()
  }, [])

  return (
    <div>
      <h1 style={heading}>Stages</h1>
      {loading && <h2>Loading...</h2>}
      {stages.map((stage) => (
        <div key={stage.id} style={stageInfo}>
          <p style={infoHeading}>{stage.name}</p>
          <p style={infoTitle}>Performances</p>
          <List
            itemLayout='horizontal'
            dataSource={stage.performances.items}
            renderItem={(performance) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Link
                      style={performerInfo}
                      to={`/performance/${performance.id}`}
                    >
                      {performance.performer}
                    </Link>
                  }
                  description={performance.description}
                />
              </List.Item>
            )}
          />
        </div>
      ))}
    </div>
  )
}

const heading = { fontSize: 44, fontWeight: 300, marginBottom: 5 }
const stageInfo = { padding: '20px 0px 10px', borderBottom: '2px solid #ddd' }
const infoTitle = { fontWeight: 'bold', fontSize: 18 }
const infoHeading = { fontSize: 30, marginBottom: 5 }
const performerInfo = { fontSize: 24 }

export default Home
