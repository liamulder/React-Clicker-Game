import React from 'react'
import ShopItem from './ShopItem'

export default function Shop({ shopItems, onBuy, totalClicks, count }) {
  return (
    <section className="mt-12 p-6 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shopItems.map(item => (
          <ShopItem
            key={item.id}
            item={item}
            onBuy={() => onBuy(item.id)}
            totalClicks={totalClicks}
            count={count}
          />
        ))}
      </div>
    </section>
  )
}
