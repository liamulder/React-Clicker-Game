import React from 'react'

export default function Building({ building, onBuy, count }) {
  if (building.owned < building.unlockAfterOwned) return null

  const canAfford = count >= building.cost

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{building.name}</h3>
        <span className="text-sm text-gray-600">Owned: {building.owned}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">Cost: {building.cost}</p>
      <button
        onClick={onBuy}
        disabled={!canAfford}
        className="w-full py-2 bg-green-500 text-white rounded shadow disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-all"
      >
        Buy
      </button>
    </div>
  )
}

