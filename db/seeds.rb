
Seller.create(username: "bob")
Seller.create(username: "ron")
Seller.create(username: "hel")
Seller.create(username: "justine")

Customer.create(username: "eddy21")
Customer.create(username: "bobby1")
Customer.create(username: "allen51")
Customer.create(username: "justine3")

Item.create(price: 20, size: "Medium", condition: "Well-worn", wearer: "Male", brand: "Nike", name: "Orange Fleece Sweater", seller_id: 1, photo: "sweater.jpg", category:"Outerwear")
Item.create(price: 50, size: "Large", condition: "New", wearer: "Male", brand: "Adidas", name: "Adidas Shirt", seller_id: 2, photo: "sweater.jpg", category:"Shirt")
Item.create(price: 10, size: "Large", condition: "Relatively New", wearer: "Women", brand: "Reebok", name: "Reebok Orange Jacket", seller_id: 3, photo: "sweater.jpg", category:"Outerwear")
Review.create(customer_id: 1, seller_id: 1, rating: 1, title: "Don't buy from this guy", comment: "This guy scammed me")
Review.create(customer_id: 2, seller_id: 2, rating: 5, title: "Reliable and friendly", comment: "No problems at all with the transaction")
Review.create(customer_id: 3, seller_id: 3, rating: 5, title: "Was very fast and responsive", comment: "Got what I asked for")