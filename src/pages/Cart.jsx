import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice';

function Cart() {
  const[total,setTotal]=useState(0)
  const cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray)
 const dispatch = useDispatch()
 const navigate = useNavigate()

 const getTotal=()=>{
  if(cartArray.length>0){
  setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }else{
    setTotal(0)
  }
 }
 useEffect(()=>{
  getTotal()
 },[cartArray])

 const handleCheckout=()=>{
  alert('order place successfully')
  dispatch(emptyCart())
  navigate('/')
 }

  return (
    <>
   {cartArray.length>0? <div className='row my-5' style={{marginTop:'350px'}}>
    <div className='col-md-1'></div>
    <div className='col-md-7 mt-5 mb-5' style={{overflowX:'auto'}}>

      <table className='table shadow w-100 '>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartArray.map((item,index)=>(<tr>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td><img src={item.thumbnail} alt="" width={'150px'} height={'150px'}/></td>
            <td>₹ {item.price}</td>
            <td><button className='btn btn-outline-danger rounded' onClick={()=>dispatch(removeCartItem(item?.id))}><FontAwesomeIcon icon={faTrash} style={{color: "#da1507",}} className='me-2' /></button></td>
          </tr>))}
        </tbody>
      </table>
    </div>
    <div className='col-md-3 mt-5'>
  <div className='shadow p-4' >
    <h1 style={{overflowY:'hidden'}} className='text-primary mb-3'>Cart Summary</h1>
    <h4 style={{overflowY:'hidden'}}>Total No Of Products: <span className='text-warning'> {cartArray.length}</span></h4>
    <h4 style={{overflowY:'hidden'}}>Total Price:<span className='text-warning'> ₹{total}</span></h4>
    <button className='btn btn-success rounded mt-4 mb-3 w-100' onClick={handleCheckout}>Check out</button>
  </div>

    </div>
    
    <div className='col-md-1'></div>
    </div>:

      <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
        <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <img src="https://cdn-icons-gif.flaticon.com/6172/6172531.gif" alt="empty cart" style={{width:'150px'}} />

          <h2 className='text-danger mt-4' style={{overflowY:'hidden'}}>Your wishlist is empty</h2>
          <Link to={'/'}><button className='btn btn-success p-3 rounded mt-2'><FontAwesomeIcon className='me-3' icon={faArrowLeft} />Back to home</button></Link>
          </div>
          
          <div className="col-md-4"></div>
         
          

        </div>}
    
    </>
  )
}

export default Cart