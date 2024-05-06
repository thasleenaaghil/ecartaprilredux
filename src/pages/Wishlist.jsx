import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';


function Wishlist() {
  const WishlistArray = useSelector((state) => state.wishlistReducer)
  const dispatch = useDispatch()
  console.log(WishlistArray)

  const handleAdd=(product)=>{
   dispatch( addCartItem(product))
   dispatch( removeWishlistItem(product.id))
  }
  return (
    <>
      <Row classname='ms-5 me-3' style={{ marginTop: '150px' }}>

        {WishlistArray.length > 0 ? WishlistArray.map((product) => (<Col className='mb-5 p-4' sm={12} md={6} lg={4} xl={3}>
          <Card className='rounded w-100'>
            <Card.Img variant="top" src={product?.thumbnail} style={{ height: '200px' }} />
            <Card.Body>
              <Card.Title style={{ overflowY: 'hidden' }}>{product?.title.slice(0, 25)}</Card.Title>
              <Card.Text>
                <p>Description</p>
                <p className='fw-bolder'>₹{product?.price} </p>

              </Card.Text>
              <div className='d-flex align-items-center justify-content-between'><Button onClick={()=>dispatch(removeWishlistItem(product?.id))} variant="outline-danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#da1507", }} className='me-2' /></Button>
                <Button onClick={()=>handleAdd(product)} variant="outline-success"><FontAwesomeIcon icon={faCartPlus} style={{ color: "#da1507", }} className='me-2' /></Button>
              </div>
            </Card.Body>
          </Card>

        </Col>)) :



          // <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
          //   <div className='col-md-4'></div>
          //   <div className='col-md-4 d-flex justify-content-center align-items-center flex-cloumn'>
          //     <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="empty cart" style={{ width: '3000px', height: '300px' }} />
          //   </div>
          //   <h2 className='text-danger mt-4' >Your Wishlist is Empty</h2>
          //   <Link to={'/'}><button className='btn btn-success p-3 rounded mt-2'> <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#da1507", }} className='me-2' />Back to Home</button></Link>
          //   <div className='co-md-4'></div>
          // </div>
          <div className='d-flex justify-content-center align-items-center w-100 mb-5'>
        <div className="col-md-4"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
          <img src="https://cdn-icons-gif.flaticon.com/6172/6172531.gif" alt="empty cart" style={{width:'150px'}} />

          <h2 className='text-danger mt-4' style={{overflowY:'hidden'}}>Your wishlist is empty</h2>
          <Link to={'/'}><button className='btn btn-success p-3 rounded mt-2'><FontAwesomeIcon className='me-3' icon={faArrowLeft} />Back to home</button></Link>
          </div>
          
          <div className="col-md-4"></div>
         
          

        </div>
          }

      </Row>

    </>
  )
}

export default Wishlist