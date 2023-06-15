import React from 'react'
import './Main.css'
import Prodisplay from './Prodisplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart,faCartShopping,faMagnifyingGlass,faBell,faQuestion} from '@fortawesome/free-solid-svg-icons'
import Login from './login/Login'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './login/Login'


  
export default function index() {

  const navigate = useNavigate();
  const navigateToLogin= () => {
    navigate('/login');
  };
  const navigateHome = () => {
    navigate('/');
  };
  return (
    
    <div className='main'>
      
      <nav>
        <div>
        <p><img src={require("./Vibelogo.png")} alt='VibeMart' width={"30%"} onClick={navigateHome}/></p>
        </div>
       
       <p className='search-container'><input type='text'placeholder='Search for Products,Brands and More'/>
       <button><FontAwesomeIcon icon={faMagnifyingGlass}  type='submit' /></button>
       </p>
      
      
      <span className='login' onClick={navigateToLogin}>Login</span>

      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Main />} />
        </Routes>
      <a href='www.google.com' alt='supplier'>Become a ShopOwner</a>
      <select>
    <label>
      <span><FontAwesomeIcon icon={faBell} shake />Notification Preference</span>
    </label>
    <label>
      <span><FontAwesomeIcon icon={faQuestion} beatFade />24X7 Customer Care</span>
    </label>
    <label>
      <span>Advertise</span>
    </label>
    <label></label>
    </select>
      {/* <select>
      <option>More</option>
      <option><FontAwesomeIcon icon={faBell} shake />Notification Preference</option>
      <option><FontAwesomeIcon icon={faQuestion} beatFade />24X7 Customer Care</option>
      </select> */}
      <p><FontAwesomeIcon icon={faHeart} beat/>wishlist</p>
      <p><FontAwesomeIcon icon={faCartShopping} beat />cart</p>
      </nav>
      <section>
        <div  className='top'>
        <p>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/50379f65f7b59622.png?q=100'width="45%"alt='Topoffers'/>
        <h5>TopOffers</h5>
        </p>
        <p>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0a0243119f02f7a5.png?q=100' width="45%"alt='Mobiles'/>
        <h5>Mobile & Tablets</h5>
        </p>
        <p>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f7b2a4eeb35a8c9f.png?q=100' width="45%"alt='Fashion'/>
        <h5>Fashion</h5>
        </p>
        <p>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a8cfa33c7206ae57.png?q=100' width="45%"alt='KitchenItems'/>
        <h5>Home & Kitchen</h5>
        </p>
        <p>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e83a5f27b01d9a7e.png?q=100' width="45%"alt='Beauty'/>
        <h5>Beauty</h5>
        </p>
        <p>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/4e0bdf8567ecb960.png?q=100' width="45%"alt='Furniture'/>
        <h5>Furniture</h5>
        </p>
        <p>
        <img src='https://rukminim1.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100' width="45%"alt='Groceries'/>
        <h5>Groceries</h5>
        </p>
        </div>
      </section>
      <section className='sc'>
        <p ><Prodisplay/></p>
        
      </section>
     <section className='fashion'>
      <div>
      <h2 className='htag'>FashionMall</h2>
      <p className='ptag'>Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.</p>
      <span className='span'>ShopNow</span>
      </div>
      </section> 
      <section className='watch'>
        <div>
        <img src='https://static.zohocdn.com/sites/stock-images/images/zwstock-image-24.png'alt='watch'width="65%"/>
        <h2 className='htag'>WatchesHive</h2>
        <p className='ptag'>You will be delighted to find every kind of material, from precious metals to plastic and even paper being used to create fun pieces for every kind of style.Our watches are an expression of your taste. Let them inspire you to be the best version of yourself.</p>
        <span className='span'>ShopNow</span>
        </div> 
      </section>
      <section className='cake'>
       
          <p><img src='https://static.zohocdn.com/sites/stock-images/images/zpstock-image-930.jpg'alt='cake'width="30%"height="5%"/></p>
          <div className='cookie'>
          <h2 className='htag'>Flat 10% off Customized Cakes As you want, all you want.</h2>
          <p className='ptag'>
            Supermart that is out to bring everyday essentials close to you.
            From pulses, spices, dairy, personal and sanitary care, breakfast essentials, health drinks,
            spreads, ready to cook,grooming to cleaning agents, 
            we are happy to present everything you need to run a house.
            Now buy Grocery products for as low
          </p>
            <span className='span'>OrderNow</span>
          </div>
        
      </section>
      <section className='beauty'>
        <div>
          <h2 className='htag'>What Products do you have ?</h2>
          <p>Every Single ingredient put on your skin is information,every ingredient contains messages that communicate every single cell in your skin.</p>
          <span className='span'>ShopNow</span>
        </div>
      </section>
      <section className='Groceries'>
        <div>
          <h2>Groceries Store</h2>
          <span className='span'>BuyNow</span>
        </div>
      </section>
      <section className='safe'>
        <div>
          <p>
            <img src='https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148535315.jpg' alt='safeDelivery'/>
          </p>
          
          <h2>safeDelivery</h2>
          
        </div>
      </section>
      
      <section>
        <div>
          
        </div>
      </section>
      </div>
  )
}
