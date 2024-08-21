import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { CartContext } from '../../Context/CartContext'

export default function RecentDataProduct({product}) {

   let {addProductToCart} = useContext(CartContext);


  
  return <>
  
    <div className=" mx-auto rounded-md px-4 p-4">
    <div className="flex flex-wrap ">
        <div>
      <Link to={`/productdetails/${product.id}`}>
      <img src={product.imageCover} className='w-full' alt={product.title} />
        <h2 className='text-main text-sm'>{product.category.name}</h2>
        <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join('')}</h2>
        <div className="flex justify-between my-2">
            <h3>{product.price} EGP</h3>
            <h3><i className='fas fa-star rating-color'></i>{product.ratingsAverage}</h3>
        </div></Link>
      <div className="flex justify-between gap-4">
        <button onClick={()=> addProductToCart(product.id)} className='btn bg-main w-full text-white rounded'>Add To Cart</button>
        <li className='relative list-none ' ><i className="fa-solid fa-heart  hover:text-red-500"></i><span className=' text-white left-1/3 bottom-1'></span></li>
      </div>
    </div>
    </div>      
    </div>

  
  </>
}
