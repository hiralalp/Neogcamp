const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];


const totalNoOfItems =(cartItems)=>{
    let totalCount = 0;
    cartItems.forEach(item=>{
       
        totalCount += item.count
    })
    return totalCount;
}


console.log(totalNoOfItems(cartItems))


const totalCartValue =(cartItems)=>{
    let price = 0;
    let finalPrice = 0;
    cartItems.forEach(item=>{
       
        price =(item.count)*item.price
        finalPrice += price-price*item.discount
    })
    return +finalPrice;
}


console.log("Total Cart Value is : ",totalCartValue(cartItems))

const discountedValue =(cartItems)=>{
    let price = 0;
    let finalPrice = 0;
    cartItems.forEach(item=>{
       
        price =(item.count)*item.price
        finalPrice += price*item.discount
    })
    return "Total Discount Value is : "+finalPrice;
}


console.log(discountedValue(cartItems))


const taxes =(cartItems)=>totalCartValue(cartItems)*0.18
console.log("Total Tax Amount is : ",taxes(cartItems))