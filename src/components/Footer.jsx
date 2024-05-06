import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
     <div style={{overflowX:'hidden'}}>
        <div className='row bg-primary text-light p-3' >
          
          <div className='col-md-4 ms-3'>
            <h3 style={{overflowY:'hidden'}}><FontAwesomeIcon icon={faCartShopping} beat className='me-3'  />E-CART</h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quae itaque vel iure ipsum nihil temporibus nisi inventore. Id odit in asperiores numquam reprehenderit laborum quas nihil aut error corrupti.</p>
          </div>
          
          <div className='col-md-2 ms-5+
          -'>
          <h4 style={{overflowY:'hidden'}}>Links</h4>
        <Link to={'/'} className='text-light'><p>Home page</p></Link>
        <Link to={'/wishlist'} className='text-light'><p>Wishlist</p></Link>
        <Link to={'/cart'} className='text-light'><p>cart</p></Link>
          </div>
       <div className='col-md-2'>
       <h4 style={{overflowY:'hidden'}}>Guides</h4>
          <p className='mt-3'>React</p>
          <p>React Bootstrap</p>
          <p>Bootstrap</p>
       </div>
       <div className='col-md-3'>
        <h4 style={{overflowY:'hidden'}}>Contact Us</h4>
       <div className='d-flex mt-3'>
          <input type="text" placeholder='EMAIL ID' className='form-control' />
          <button className='btn btn-warning ms-3'>Subscribe</button>
       </div>
       <div className='d-flex justify-content-between mt-4'>
          <FontAwesomeIcon icon={faInstagram} size='2xl' />
          <FontAwesomeIcon icon={faFacebook} size='2xl' />
          <FontAwesomeIcon icon={faTwitter} size='2xl'  />
          <FontAwesomeIcon icon={faLinkedin} size='2xl'  />
  
          </div>
       </div>
         
        </div>
     </div>
    </>
  )
}

export default Footer