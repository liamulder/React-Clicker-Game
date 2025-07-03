import ShopItem from './ShopItem'

export default function Shop({ shopItems, onBuy, totalClicks, count }) {
  return (
    <div className="mt-8 border-t pt-4 space-y-4">
      <h2 className="text-2xl font-semibold">Shop</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
  )
}
