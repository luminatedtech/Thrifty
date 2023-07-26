import React, { useState} from "react"
function ItemEditForm ({oldCondition, oldSize, oldWearer,oldPrice, oldCategory, oldBrand, oldPhoto,id,oldName,setShowEdit,setSellerItems}) {
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
                r.json().then((updatedItemList)=>{
                setSellerItems(updatedItemList)
                setShowEdit(true)
                })
                
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        
    }
    return (
        <div className="item-edit-form-container">
        <h2 > Update Item </h2>
        <form onSubmit={onUpdateItemClick}>
        <div className="form-group">
                <label> Name </label>
                <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label> Category </label>
                <select name="selectedCategory"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Outerwear"> Outerwear</option>
                    <option value="Shirts"> Shirts</option>
                    <option value="Bottoms"> Bottoms</option>
                    
                </select>
            </div>
            {
                category === "Bottoms" ? (
                    <div className="form-group">
                      <label> Size </label>
                      <input
                        type="number"  
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        min="0"  
                      />
                    </div>
                  ) : (
                    <div className="form-group">
                      <label> Size </label>
                      <select
                        name="selectedSize"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <option value="XS"> XS</option>
                        <option value="S"> S</option>
                        <option value="M"> M</option>
                        <option value="L"> L</option>
                        <option value="XL"> XL</option>
                        <option value="XXL"> XXL</option>
                      </select>
                    </div>
                  )
            }
            <div className="form-group">
                <label> Price </label>
                <input
                type="integer"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label> Brand</label>
                <input
                type="text"
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
                />
            </div>
            <div className="form-group">
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
            
            <div className="form-group">
                <label> Wearer</label>
                <select name="selectedWearer"
                value={wearer}
                onChange={(e)=>setWearer(e.target.value)}>
                    <option value="Mens"> Mens</option>
                    <option value="Womens"> Womens</option>
                    
                </select>
            </div>
            <div className="form-group">
                <label> Photo </label>
                <input
                type = "text"
                value={photo}
                onChange={(e)=>setPhoto(e.target.value)}
                />

            </div>
     
            <div>
                <button className="addReviewsButton" type="submit">
                    {isLoading ? "Loading.." : "Confirm Item"}
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