import React, { useState, useEffect } from 'react'
import { API } from 'aws-amplify'

import './App.css'

function App() {
  // Create coins variable and set to empty array
  const [coins, updateCoins] = useState([])
  const [input, updateInput] = useState({ limit: 5, start: 0 })
  // Define function to all API
  // async function fetchCoins() {
  //   const data = await API.get('cryptoapi', '/coins');
  //   updateCoins(data.coins);
  // }
  // Create a new function to allow users to update the input values
  function updateInputValues(type, value) {
    updateInput({ ...input, [type]: value })
  }
  // Update fetchCoins function to use limit and start properties
  async function fetchCoins() {
    const { limit, start } = input
    const data = await API.get(
      'ch02cryptoapi',
      `/coins?limit=${limit}&start=${start}`
    )
    updateCoins(data.coins)
  }
  // Call fetchCoins function when component loads
  useEffect(() => {
    fetchCoins()
  }, [])

  return (
    <div className='App'>
      <input
        onChange={(e) => updateInputValues('limit', e.target.value)}
        placeholder='limit'
      />
      <input
        placeholder='start'
        onChange={(e) => updateInputValues('start', e.target.value)}
      />
      <button onClick={fetchCoins}>Fetch Coins</button>
      {coins.map((coin, index) => (
        <div key={index}>
          <h2>
            {coin.name} - {coin.symbol}
          </h2>
          <h5>${coin.price_usd}</h5>
        </div>
      ))}
    </div>
  )
}

export default App
