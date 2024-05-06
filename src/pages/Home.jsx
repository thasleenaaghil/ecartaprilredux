import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addWishlistItem } from '../redux/slices/wishlistSlice';
import { addCartItem } from '../redux/slices/cartSlice';


function Home() {
  const dispatch = useDispatch()
 
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);
  return (
    <>
    <Row classname='ms-5 me-3' style={{marginTop:'150px'}}>

{data?.length>0? data?.map((product)=>(<Col className='mb-5 p-4' sm={12} md={6} lg={4} xl={3}>
<Card  className='rounded w-100'> 
      <Card.Img variant="top" src={product?.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title style={{overflowY:'hidden'}}>{product?.title.slice(0,25)}</Card.Title>
        <Card.Text>
        <p>{product?.description.slice(0,50)}</p>
        <p className='fw-bolder'>₹{product?.price}</p>
    
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'><Button onClick={()=>dispatch(addWishlistItem(product))} variant="outline-danger"><FontAwesomeIcon icon={faHeart} style={{color: "#da1507",}} className='me-2' /></Button>
        <Button onClick={()=>dispatch(addCartItem(product))} variant="outline-success"><FontAwesomeIcon icon={faCartPlus} style={{color: "green",}} className='me-2' /></Button>
        </div>
      </Card.Body>
    </Card>

</Col>)):<h5>Loading</h5>}
    
    
    </Row>

    
    
    
    </>
  )
}

export default Home