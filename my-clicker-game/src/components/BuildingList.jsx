import React from 'react'
import Building from './Building'

export default function BuildingList({ buildings, onBuy, count }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {buildings.map(b => (
        <Building
          key={b.id}
          building={b}
          onBuy={() => onBuy(b.id)}
          count={count}
        />
      ))}
    </div>
  )
}
