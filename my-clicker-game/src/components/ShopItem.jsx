export default function ShopItem({ item, onBuy, totalClicks, count }) {
  if (totalClicks < item.unlockAfterClicks) return null
  if (item.purchased) return null

  const canAfford = count >= item.cost

  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold mb-1">{item.name}</h3>
      <p className="text-sm mb-2">{item.description}</p>
      <p className="mb-2">Cost: {item.cost}</p>
      <button
        disabled={!canAfford}
        onClick={onBuy}
        className="px-3 py-1 bg-yellow-500 rounded disabled:opacity-50"
      >
        Buy
      </button>
    </div>
  )
}
