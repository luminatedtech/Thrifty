import React from "react";
import ListedItem from "./ListedItem";
function MensItemList ({mensItems}) {
    return (
        <div className="itemList"> {mensItems.map((item,i)=>(
            <ListedItem  key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand}  index={i}/>
        ))}
    
        </div>

    )
}

export default MensItemList