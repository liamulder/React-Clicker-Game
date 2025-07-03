import Building from './Building'
export default function BuildingList({ buildings, onBuy }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {buildings.map(b => (
        <Building
          key={b.id}
          building={b}
          onBuy={() => onBuy(b.id)}
        />
      ))}
    </div>
  )
}
