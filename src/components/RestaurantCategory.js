import React from 'react'
import ItemList from './ItemList'

function RestaurantCategory({data, expand=false, expandCategory}) {
  function expandMe() {
    expandCategory();
  }
  if (!data) return <div></div>
  const items = data?.categories.map(category=>category.itemCards)?.flat()
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={expandMe}>
        <span className="font-bold text-lg">
          {data.title}({items?.length || 0})
        </span>
        <span>{expand ? "🔼" : "🔽"}</span>
      </div>
      {expand ? <ItemList items={items}/> : <div></div>}
    </div>
  )
}

export default RestaurantCategory