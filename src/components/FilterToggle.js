import React, {useState, useEffect, useRef} from 'react'

const items = ["Age", "Location", "Cost"]
const ageItems = ["1 & Over", "3 & Over", "5 & Over", "8 & Over", "10 & Over"]
const locationItems = ["Outdoors", "Indoors"]
const costItems = ["Free", "Paid"]

function SingleItem({item}) {
    return <div></div>
}

function FilterToggle() {
    const [selectedItem, setSelectedItem] = useState("all")

    const filteredItems = items.filter(
        (item) => selectedItem === "all" || selectedItem === item
    );

    return (
        <>
        <select
          onChange={(e) => setSelectedItem(e.target.value)}
          value={selectedItem}
        >
          <option value="all">all</option>
          <option value="Age">Age</option>
          <option value="Location">Location</option>
          <option value="cost">Cost</option>
        </select>
        <div className="item-list">
          {filteredItems.map((item) => (
            <SingleItem key={item.id} item={item} />
          ))}
        </div>
      </>
    )
}

export default FilterToggle;


















// export default FilterToggle;