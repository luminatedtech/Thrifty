import React from "react"
function Filter ({category,onCategoryChange}) {
    return (
        <div>
            <select
                name="filter"
                 value={category}
                 onChange={(e) => onCategoryChange(e.target.value)}
      >
                <option value="All">Filter by category</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Shirts">Shirts</option>
                <option value="Bottoms">Bottoms</option>
            </select>
        </div>
    )
}
export default Filter 