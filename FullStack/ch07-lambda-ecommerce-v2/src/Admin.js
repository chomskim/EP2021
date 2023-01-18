import React, { useState } from 'react'
import './App.css'
import { Input, Button } from 'antd'
import { API } from 'aws-amplify'

import protectedRoute from './protectedRoute'
import Container from './Container'

const initialState = {
  name: '',
  price: '',
}

function Admin() {
  const [itemInfo, updateItemInfo] = useState(initialState)
  function updateForm(e) {
    const formData = {
      ...itemInfo,
      [e.target.name]: e.target.value,
    }
    updateItemInfo(formData)
  }
  async function addItem() {
    try {
      const data = {
        body: { ...itemInfo, price: parseInt(itemInfo.price) },
      }
      console.log('addItem data=', data)
      updateItemInfo(initialState)
      await API.post('ch07ecommerceapi', '/products', data)
    } catch (err) {
      console.log('error adding item...')
    }
  }
  return (
    <Container>
      <Input
        name='name'
        onChange={updateForm}
        value={itemInfo.name}
        placeholder='Item name'
        style={inputStyle}
      />
      <Input
        name='price'
        onChange={updateForm}
        value={itemInfo.price}
        style={inputStyle}
        placeholder='item price'
      />
      <Button style={buttonStyle} onClick={addItem}>
        Add Product
      </Button>
    </Container>
  )
}

const inputStyle = {
  marginTop: 10,
}

const buttonStyle = {
  marginTop: 10,
}

export default protectedRoute(Admin)
