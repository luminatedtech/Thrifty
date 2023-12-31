import React,{useState} from "react";
import ListedItem from "./ListedItem";
import Filter from "./Filter";
function WomensItemList ({womensItems,typeOfUser}) {
    const [selectedCategory, setSelectedCategory] = useState("All")
    function handleCategoryChange(category) {
        setSelectedCategory(category)
    }

    const itemsToDisplay = womensItems.filter((item)=> {
        if (selectedCategory === "All") return TextTrackCueList
        return item.category === selectedCategory
    })
    return (
        <div className="itemList"> 
        <Filter category={selectedCategory} onCategoryChange={handleCategoryChange}/>
        {itemsToDisplay.map((item,i)=>(
            <ListedItem typeOfUser= {typeOfUser} key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand}  index={i}/>
        ))}
    
        </div>

    )
}

export default WomensItemList