import React, { useContext,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { SellerContext } from "../Context/SellerContext";
import { ItemContext } from "../Context/ItemContext";
function ItemForm () {
    const {setSellers,sellers} = useContext(SellerContext)
    const {fetchItems} = useContext(ItemContext)
    const {sellerId} = useParams()
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [price,setPrice] = useState(0)
    const [brand,setBrand] = useState("")
    const [condition,setCondition] = useState("")
    const [size,setSize] = useState("")
    const [category, setCategory] = useState("")
    const [wearer, setWearer] = useState("Mens")
    const [photo,setPhoto] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errors,setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        fetch('/items',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                size,
                category,
                wearer,
                condition,
                price,
                brand,
                photo,
                seller_id: sellerId
            })
        }).then((r)=> {
            setIsLoading(false)
    
            if (r.ok) {
    
                r.json().then((item)=> {
                    const newSellers = []
                
                    sellers.map((seller)=> {
                      
                        
                        if (seller.id === item.seller_id) {
                            const updatedItems = [...seller.items,item]
                            
                            seller.items = updatedItems
                            
                        }
                        newSellers.push(seller)
                        
                    })
                    
                    setSellers(newSellers)
                    fetchItems()
                    navigate('/sellerDashboard')
                })
            } else {
                r.json().then((err)=> setErrors(err.errors))
                
            }
            
        })
    }
    return (
        <div className="item-form-container">
        <h2 className="formTitle"> Create Item </h2>
        <form onSubmit={handleSubmit}>
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
                <label > Price </label>
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
                    {isLoading ? "Loading.." : "Submit Item"}
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

export default ItemForm