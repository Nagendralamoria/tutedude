import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';  
import Navbar from '../Components/Navbar';
import './frs.css';
function Friendsrefered() {
  return (
    <div> <Navbar/>
    <div className='friendsreferred'>
    <div className='Friendsreferredparent'>
    <p>UI/UX &gt; Refer & earn &gt;  Friends Referred</p>
   
    <div className='friendreferalcode'>
   <div className='code'>
   <h4>Your Referral Code</h4>
     <p>EDCH54</p>
     </div>

     <div className='wallet'>
       <h5>Wallet Balance</h5>
       <p> &#x20B9; 500</p>
     </div>
    </div>
    <h3>Friends who Enrolled (3)</h3>
    <Carousel >  
     <div className='cardcarosuel'>
    <div className='card'>
       <div className='cardheader'>
       <h3>Dhiraj Saxsena</h3>
       <p>14 Sep 2022</p>
       </div>
       <p>Cousres Enrolled (6)</p>
       <ul className='cardtext'>
       
         <li>UI/UX</li>
         <li>Photoshop</li>
         <li>Illustrator</li>
         <li>Python</li>
         
         <li>MERN</li>
         <li>Java</li>
       </ul>
       <div className='cardamount'>
       <p>Referal Amount</p>
       <h2> &#x20B9; 185</h2>
       </div>
    </div>
    <div className='card'>
       <div className='cardheader'>
       <h3>Subhash Mishra</h3>
       <p>15 Sep 2022</p>
       </div>
       <p>Cousres Enrolled (6)</p>
       <ul className='cardtext'>
       
         <li>UI/UX</li>
         <li>Photoshop</li>
         <li>Illustrator</li>
         <li>Python</li>
         
         <li>MERN</li>
         <li>Java</li>
       </ul>
       <div className='cardamount'>
       <p>Referal Amount</p>
       <h2> &#x20B9; 485</h2>
       </div>
    </div>
    <div className='card'>
       <div className='cardheader'>
       <h3>Prafull Kumar</h3>
       <p>14 Sep 2022</p>
       </div>
       <p>Cousres Enrolled (6)</p>
       <ul className='cardtext'>
       
         <li>UI/UX</li>
         <li>Photoshop</li>
         <li>Illustrator</li>
         <li>Python</li>
         
         <li>MERN</li>
         <li>Java</li>
       </ul>
       <div className='cardamount'>
       <p>Referal Amount</p>
       <h2> &#x20B9; 185</h2>
       </div>
    </div>
    </div>
    <div className='cardcarosuel'>
    <div className='card'>
       <div className='cardheader'>
       <h3>Dhiraj Saxsena</h3>
       <p>14 Sep 2022</p>
       </div>
       <p>Cousres Enrolled (6)</p>
       <ul className='cardtext'>
       
         <li>UI/UX</li>
         <li>Photoshop</li>
         <li>Illustrator</li>
         <li>Python</li>
         
         <li>MERN</li>
         <li>Java</li>
       </ul>
       <div className='cardamount'>
       <p>Referal Amount</p>
       <h2> &#x20B9; 185</h2>
       </div>
    </div>
    <div className='card'>
       <div className='cardheader'>
       <h3>Subhash Mishra</h3>
       <p>15 Sep 2022</p>
       </div>
       <p>Cousres Enrolled (6)</p>
       <ul className='cardtext'>
       
         <li>UI/UX</li>
         <li>Photoshop</li>
         <li>Illustrator</li>
         <li>Python</li>
         
         <li>MERN</li>
         <li>Java</li>
       </ul>
       <div className='cardamount'>
       <p>Referal Amount</p>
       <h2> &#x20B9; 485</h2>
       </div>
    </div>
    <div className='card'>
       <div className='cardheader'>
       <h3>Prafull Kumar</h3>
       <p>14 Sep 2022</p>
       </div>
       <p>Cousres Enrolled (6)</p>
       <ul className='cardtext'>
       
         <li>UI/UX</li>
         <li>Photoshop</li>
         <li>Illustrator</li>
         <li>Python</li>
         
         <li>MERN</li>
         <li>Java</li>
       </ul>
       <div className='cardamount'>
       <p>Referal Amount</p>
       <h2> &#x20B9; 185</h2>
       </div>
    </div>
    </div>
    </Carousel>
    <p>Terms & Conditions</p>
    </div>

    </div></div>
  )
}

export default Friendsrefered