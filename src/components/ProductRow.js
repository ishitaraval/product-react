import React from 'react'
import {Link} from 'react-router-dom'
import Image from 'components/Image'
import Item from 'components/Item'
import FavItem from 'components/FavItem'


const ProductRow = ({data}) => {
  const {id, photo, name, link,colors,storage,descrip, price, ratings} = data
    
    const article_pro = document.createElement('article')
    article_pro.classList.add("product")
    

    let the_r = []
    for (let x = 0; x < 5; x++) {
        if (ratings > x) {
            the_r.push(<span className="material-icons">star</span>)
        } else {
            the_r.push(<span className="material-icons">star_border</span>)
        }
    }
    const colorChange = (event) => {
      setSearchState({
       ...searchState,
       minPrice: Number(event.target.value),
     })
   }

    const the_color = colors.map((col) => <li><label>{col}</label></li>)
    const the_store = storage.map((store) => <li><label>{store}</label></li>)

return (
         <article className="iproducts">
            <Image src={photo} alt= {name} className="img-product"/>
            
             <div className="prod-details">
             <h3  style={{color:'#0505d2', textDecoration:'underline'}}><Link to={`/single_products/${data.id}`} style={{color:'black',textDecoration:'underline'}}>{name}</Link></h3>
               <data value={price}><del>${price[0]}</del> <ins>${price[1]}</ins></data>
               <p>{descrip}.</p>
               <form>
                 <fieldset>
                    <legend>Colors:</legend>
                    <ul>
                        {the_color}
                    </ul>
                  </fieldset>
                  <fieldset>
                    <legend>Storages:</legend>
                    <ul>
                        {the_store}
                    </ul>
                  </fieldset>
                </form>
               <dl>
                 <dt>Ratings(Above):</dt>
                   <dd>{the_r}</dd>
               </dl>
               <a href="#"style={{color: `#0505d2`, textDecoration: `underline`}}>see more</a>
               <div className="product-cart">
                 {/* <input type="button" id="addtocart"onClick={() => updater(id)} value="addtocart" className="add-cart"></input> */}
                 <Item key={id} data={data} />
                 {/* <input type="button" id="fav" value="fav"></input> */}
                 <FavItem key={id} data={data}/>
               </div>
               </div>
           </article>
    )
}

export default ProductRow