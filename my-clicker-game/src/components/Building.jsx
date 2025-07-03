export default function Building({ building, onBuy }) {
  if (building.owned < building.unlockAfterOwned) return null
  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold">{building.name}</h3>
      <p>Owned: {building.owned}</p>
      <p>Cost: {building.cost}</p>
      <button
        disabled={building.cost > building.count}
        onClick={onBuy}
        className="mt-2 px-3 py-1 bg-green-500 rounded disabled:opacity-50"
      >
        Buy
      </button>
    </div>
  )
}
