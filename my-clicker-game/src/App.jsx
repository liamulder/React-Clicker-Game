import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import CounterDisplay from './components/CounterDisplay'
import ClickButton     from './components/ClickButton'
import BuildingList    from './components/BuildingList'
import Shop            from './components/Shop.jsx'
import FloatingText    from './components/FloatingText'
import SoundManager    from './components/SoundManager'

export default function App() {
  const [count, setCount]       = useState(0)
  const [totalClicks, setTotalClicks] = useState(0)
  const [clickPower, setClickPower]   = useState(1)

  const [buildings, setBuildings] = useState([])
  const [shopItems, setShopItems] = useState([])

  useEffect(() => {
    const iv = setInterval(() => {
      const gain = buildings.reduce((sum, b) => sum + b.cps * b.owned, 0)
      setCount(c => c + gain)
    }, 1000)
    return () => clearInterval(iv)
  }, [buildings])

  function handleClick() {
    setCount(c => c + clickPower)
    setTotalClicks(n => n + 1)
    SoundManager.play('click')
    FloatingText.spawn(`+${clickPower}`)
  }

  function buyBuilding(id) {}
  function buyShopItem(id) {}

  return (
    <div className="p-4 space-y-6">
      <CounterDisplay count={count} />
      <ClickButton onClick={handleClick} />
      <BuildingList buildings={buildings} onBuy={buyBuilding} />
      <Shop 
      hopItems={shopItems} 
      onBuy={buyShopItem} 
      totalClicks={totalClicks}
      count={count} 
      />
      <FloatingText.Container />
      <SoundManager.Container />
    </div>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
