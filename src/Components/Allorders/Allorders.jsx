import React, { useContext, useEffect, useState } from 'react'
import style from './Allorders.module.css'
import { CartContext } from '../../Context/CartContext'
import axios from 'axios';

export default function Allorders() {

// let {clearCart} = useContext(CartContext);


// useEffect(()=> {
//   clearCart()
// } , [])

const [allOrders, setAllOrders] = useState({});

async function getUserOrder(id) {
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
  console.log(data);
  setAllOrders(data)
  
};

    useEffect(()=> {
      getUserOrder()

    } , [])
  return <>
    
    <h1 className="text-3xl">Allorders</h1>
  
  </>
}
