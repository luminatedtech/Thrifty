import React, {useContext, useState} from "react"
import Item from "./Item"
import { SellerContext } from "./Context/SellerContext"
function ItemEditForm ({userId,oldCondition, oldSize, oldWearer,oldPrice, oldCategory, oldBrand, oldPhoto,id,oldName,setShowEdit}) {
    const {setSellers} = useContext(SellerContext)
    const [condition,setCondition] = useState(oldCondition)
    const [size, setSize] = useState(oldSize)
    const [wearer,setWearer] = useState(oldWearer)
    const [price, setPrice] = useState(oldPrice)
    const [category, setCategory] = useState(oldCategory)
    const [brand, setBrand] = useState(oldBrand)
    const [photo,setPhoto] = useState(oldPhoto)
    const [name,setName] = useState(oldName)
    const [isLoading, setIsLoading] = useState(false)
    const [errors,setErrors] = useState([])
    function onUpdateItemClick (e) {
        e.preventDefault()
        setIsLoading(true)
        fetch(`items/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                condition,
                category,
                size,
                price,
                photo,
                wearer,
                brand,
            }),
        })
        .then((r)=> {
            setIsLoading(false)
            if (r.ok){
                r.json().then((updatedItem)=>{
                    setSellers((prevSellers)=> {
                        const sellerIndex = prevSellers.findIndex((seller)=> seller.id === userId)
                       prevSellers[sellerIndex].items = prevSellers[sellerIndex].items.map((item)=> {
                            if (item.id === id ) {
                                return updatedItem
                            }
                            else {
                                return item
                            }
            
                        })
                        return ([...prevSellers])
                        
                    })
                setShowEdit(true)
                })
                
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        
    }
    return (
        <div className="itemFormContainer">
        <h2 > Update Item </h2>
        <form onSubmit={onUpdateItemClick}>
            <div>
                <label> Name </label>
                <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label> Category </label>
                <select name="selectedCategory"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Outerwear"> Outerwear</option>
                    <option value="Shirts"> Shirts</option>
                    <option value="Bottoms"> Bottoms</option>
                    
                </select>
            </div>
            <div>
                <label> Size </label>
                <select name="selectedSize"
                 value={size}
                  onChange={(e)=>setSize(e.target.value)}>
                    <option value="XS"> XS</option>
                    <option value="S"> S</option>
                    <option value="M"> M</option>
                    <option value="L"> L</option>
                    <option value="XL"> XL</option>
                    <option value="XXL"> XXL</option>
                </select>
            </div>
            <div>
                <label> Price </label>
                <input
                type="integer"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <div>
                <label> Brand</label>
                <input
                type="text"
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
                />
            </div>
            <div>
                <label> Condition </label>
                <select name="selectedCondition"
                  value={condition}
                 onChange={(e)=>setCondition(e.target.value)}>
                    <option value="New"> New</option>
                    <option value="Relatively New"> Relatively New</option>
                    <option value="Worn"> Worn</option>
                    <option value="Well Worn"> Well Worn</option>
                   
                </select>
            </div>
            
            <div>
                <label> Wearer</label>
                <select name="selectedWearer"
                value={wearer}
                onChange={(e)=>setWearer(e.target.value)}>
                    <option value="Men"> Mens</option>
                    <option value="Women"> Womens</option>
                    
                </select>
            </div>
     
            <div>
                <button className="addReviewsButton" type="submit">
                    {isLoading ? "Loading.." : "Submit Review"}
                </button>
            </div>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                {errors.map((error) => (
                 <li key={error}>{error}</li>
                ))}
              </ul>
            )}
        </form>
        </div>
    )
}

export default ItemEditForm