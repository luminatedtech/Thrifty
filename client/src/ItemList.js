import React from "react";
import Item from "./Item";
function ItemList ({items}) {
    return (
        <div className="itemList"> {items.map((item,i)=>(
            <Item key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand}  index={i}/>
        ))}
    
        </div>
    )
}

export default ItemList