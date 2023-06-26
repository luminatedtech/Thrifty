
Seller.create(username: "bob")
Seller.create(username: "ron")
Seller.create(username: "hel")
Seller.create(username: "justine")

Customer.create(username: "eddy21")
Customer.create(username: "bobby1")
Customer.create(username: "allen51")
Customer.create(username: "justine3")

Item.create(price: 20, size: "Medium", condition: "Well-worn", wearer: "Male", brand: "Nike", name: "Orange Fleece Sweater", seller_id: 1, photo: "sweater.jpg", category:"Outerwear")
Item.create(price: 50, size: "Large", condition: "New", wearer: "Male", brand: "Adidas", name: "Adidas Shirt", seller_id: 1, photo: "sweater.jpg", category:"Top")
Item.create(price: 10, size: "Large", condition: "Relatively New", wearer: "Women", brand: "Reebok", name: "Reebok Orange Jacket", seller_id: 1, photo: "sweater.jpg", category:"Outerwear")
Review.create(customer_id: 1, seller_id: 1, rating: 1, title: "Don't buy from this guy", comment: "This guy scammed me")
Review.create(customer_id: 1, seller_id: 1, rating: 5, title: "Reliable and friendly", comment: "No problems at all with the transaction")
Review.create(customer_id: 1, seller_id: 1, rating: 5, title: "Was very fast and responsive", comment: "Got what I asked for")


Item.create(price: 30, size: "M", condition: "New", wearer: "Men", brand: "Nike", name: "Shortsleeve White T", seller_id: 1, photo: "sweater.jpg", category:"Shirts")

Item.create(price: 40, size: "L", condition: "Well-worn", wearer: "Men", brand: "Adidas", name: "Vintage Leather Jacket", seller_id: 2, photo: "sweater.jpg", category:"Outerwear")

Item.create(price: 10, size: "S", condition: "Worn", wearer: "Women", brand: "Uniqlo", name: "One Piece Collection Shirt", seller_id: 3, photo: "sweater.jpg", category:"Shirts")

Item.create(price: 25, size: "XL", condition: "Well-worn", wearer: "Women", brand: "Gap", name: "Jean Jacket", seller_id: 2, photo: "sweater.jpg", category:"Outerwear")