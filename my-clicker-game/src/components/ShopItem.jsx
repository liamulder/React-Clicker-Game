import React from 'react'

export default function ShopItem({ item, onBuy, totalClicks, count }) {
  // Hide until unlocked or after purchase
  if (totalClicks < item.unlockAfterClicks || item.purchased) return null

  const canAfford = count >= item.cost

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
        <span className="text-sm text-gray-500">Cost: {item.cost}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{item.description}</p>
      <button
        onClick={onBuy}
        disabled={!canAfford}
        className="w-full py-2 bg-yellow-500 text-white rounded shadow disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-600 transition-all"
      >
        Buy
      </button>
    </div>
  )
}
