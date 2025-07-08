import { useState, useEffect } from 'react'
import './App.css'

import CounterDisplay from './components/CounterDisplay'
import ClickButton     from './components/ClickButton'
import BuildingList    from './components/BuildingList'
import Shop            from './components/Shop.jsx'

const initialShopItems = [
  {
    id: 'powerClick',
    name: 'Power Click',
    description: '+1 click power',
    cost: 5,
    effect: { type: 'clickPower', amount: 1 },
    unlockAfterClicks: 5,
    purchased: false,
  }
];

export default function App() {
  const [count, setCount]       = useState(0)
  const [totalClicks, setTotalClicks] = useState(0)
  const [clickPower, setClickPower]   = useState(1)

  // const [buildings, setBuildings] = useState([])
  const [shopItems, setShopItems] = useState(initialShopItems)

  // useEffect(() => {
  //   const iv = setInterval(() => {
  //     const gain = buildings.reduce((sum, b) => sum + b.cps * b.owned, 0)
  //     setCount(c => c + gain)
  //   }, 1000)
  //   return () => clearInterval(iv)
  // }, [buildings])

  function handleClick() {
    setCount(c => c + clickPower)
    setTotalClicks(n => n + 1)
    // SoundManager.play('click')
    // FloatingText.spawn(`+${clickPower}`)
  }
 
  function buyShopItem(itemId) {
    
    const item = shopItems.find(item => item.id === itemId);
    if (!item || item.purchased || count < item.cost) return;

    setCount(c => c - item.cost);
    if (item.effect.type === 'clickPower') {
      setClickPower(cp => cp + item.effect.amount)
    }

    setShopItems(items =>  
      items.map(item =>
        item.id === itemId ? { ...item, purchased: true } : 1
      )
    );
  }

  return (
    <div className="p-4 space-y-6">
      <CounterDisplay count={count} />
      <ClickButton onClick={handleClick} />

      <Shop
      shopItems={shopItems}
      onBuy={buyShopItem}
      totalClicks={totalClicks}
      count={count}
      />
    </div>
  )
}

