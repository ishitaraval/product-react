import React, {useContext} from 'react'
import {CartContext, useMoney} from 'context/cart'




const Item = ({data}) => {
	// console.log("data:",data);
	
	const {id, photo, name, link, descrip, price, ratings} = data
	console.log("product description: ",descrip);
	console.log("product data: ",data);
	console.log("price: ",price[1]);
	const {data1, updater} = useContext(CartContext)
	
	
	return (
		<>
		
		<button	 id="addtocart" onClick={() => updater(id)} type="button" className="addtocart"><span className="material-icons">add_shopping_cart</span>Add to cart</button>
		
		</>
	)
}
export default Item