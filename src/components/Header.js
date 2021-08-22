import React from 'react'
import logo from 'img/logo.png'
import {Link} from 'react-router-dom'
import CartCount from 'components/CartCount'
import FavCount from 'components/FavCount'


const Header = () => {

  return (
    
   <header className="topheader" style={{backgroundColor:'black'}}>
      <Link to="/">
       <img src= {logo} className="logo" style={{marginTop:'1.5em'}}/>
       </Link>
      <h2 style= {{color: 'black'}}>apple store</h2>
      <nav  className="navbar">
        <fieldset className="search">
       <label htmlFor="sort" style={{color:"white",padding:'5px 10px'}}>Search Product Name:</label>
       <input type="search" placeholder="Search by product name"></input>
       </fieldset>
        <ul>
          <li style = {{color: 'black'}}><Link to="/">SHOP</Link></li>
          <li style = {{color: 'black'}}><Link to="/">ABOUT</Link></li>
          <li style = {{color: 'black'}}><Link to="/">CONTACT</Link></li>
          <li style = {{color: 'black'}}><Link to="/">FEEDBACK</Link></li>
         
        </ul>
        <nav className="header-cart">
        
        <Link to="/favouriteditem"><FavCount /></Link>
         {/* <li><a href="#" style = {{color: 'black'}}><span className="material-icons" aria-label="Favourites">favorite_border</span></a></li> */}
         {/* <li><a href="#" style = {{color: 'black'}}><span className="material-icons" aria-label="Items in your cart">shopping_cart</span></a></li> */}
         <Link to="/cart"><CartCount /></Link>
       </nav>
      </nav>
     
       

    </header>

  )
}

export default Header