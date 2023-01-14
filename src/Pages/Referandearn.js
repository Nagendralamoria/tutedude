import React from 'react'
import './Referandearn.css';
import Navbar from '../Components/Navbar';
import {FaRupeeSign} from 'react-icons/fa';
import {TbDiscount2} from 'react-icons/tb';
import {MdGroups,MdAccountBalanceWallet} from 'react-icons/md'
import {IoPricetag} from 'react-icons/io5';
function Referandearn() {
  return (
    <>
    <Navbar/>
    
    <div className="App">
       
        <div className='Referandearn'>
        <p>UI/UX &gt;  Refer & Earn</p>
        <div className='Referalsection'>
          <div className='ReferalNumbers'>
            <div className='referalmini'>
              <p>Referral Earning</p>
              <h1>&#x20B9; 2,500</h1>
            </div>
            <div className='referalmini'>
              <p>Total Referral</p>
              <h1>7</h1>
            </div>
            <div className='referalmini'>
              <p>Wallet Balance</p>
              <h1>&#x20B9; 500</h1>
            </div>
            <button>Without Balance</button>
          </div>
          <div className='Referalcode'>
              <h2>Your Referral Code</h2>
              <p>E D C H 5 4</p>
          </div>
          </div>
          <h2>How does it work ?</h2>
          <div className='worksection'>
            
            <div className='worksectiontext'>
              <MdGroups className='worksectionicons'/>
              <div>
                  <h4>Invite your Friends</h4>
                  <p>Share the link tutedude.com with
                      your friends</p>
              </div>
            </div>
            <div className='worksectiontext'>
              <IoPricetag className='worksectionicons'/>
              <div>
                  <h4>Friend purchases any course</h4>
                  <p>Using your REFERRAL CODE in the payments page</p>
              </div>
            </div>
            <div className='worksectiontext'>
              <FaRupeeSign className='worksectionicons'/>
              <div>
                  <h4>You get ₹ 200 as referral money</h4>
                  <p>On total purchase the friend makes, into your wallet</p>
              </div>
            </div>
            <div className='worksectiontext'>
              <TbDiscount2 className='worksectionicons2'/>
              <div>
                  <h4>Your Friend gets ₹ 200 Off </h4>
                  <p>On his overall fee on successful purchase using your referral code </p>
              </div>
            </div>
            <div className='worksectiontext'>
              <MdAccountBalanceWallet className='worksectionicons2'/>
              <div>
                  <h4>Transfer money from wallet</h4>
                  <p>When the wallet balance reaches
                    ₹200 or more, you can withdraw it</p>
              </div>
            </div>
          </div>
        <h4>Friends who Enrolled</h4>
        <h4>Terms & Conditions</h4>
        </div>  
    </div>
    </>
  )
}

export default Referandearn