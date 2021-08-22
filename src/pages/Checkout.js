import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {CartContext, useMoney} from 'context/cart'
import ProductsContext from 'context/products'
import Image from 'components/Image'
import {Link} from 'react-router-dom'
// const {BrowserRouter, Switch, Route, Redirect, Link} = ReactRouterDOM

// FILE: pages/Checkout.js
const Checkout = ({data}) => {
	
	const cart = useContext(CartContext).data
	const products = useContext(ProductsContext)
	let subtotal = 0
	
	return (
		 <Layout>
			<h2 style={{marginTop:'5em'}}>Checkout</h2>
			<ul>
				{ 
					(cart.length)
						? (cart.map(item => {
								let {id,photo,name, price} = products.find(prod => prod.id === item.id)
								console.log("checkout item price:",price[1]);
								subtotal += price[1] * item.count
								return <Link to={`/single_products/${id}`}>
								<Image src={photo} alt={name} ></Image> 
								<h2 style={{marginTop:'2em',fontSize:'1em'}}className="cartProduct" key={item.id}><b>{name}</b> ({item.count} x {useMoney(price[1])}) <b>= {useMoney(price[1] * item.count)}</b></h2>
							</Link>}))
						: (<div ><h3 style={{color:'red'}}>No items in your cart, try going to the SHOP</h3></div> )
				}
			</ul>
			<footer style={{marginLeft:'28em'}}>
				{Boolean(cart.length) && <div><button className="addtocart" style={{marginTop:'2em',fontSize:'1em'}}>Check out {useMoney(subtotal)}</button></div>}
			</footer>
		</Layout>
	)
}
export default Checkout