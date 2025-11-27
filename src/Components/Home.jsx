import React from 'react'
import './Home.css'

export default function Home() {
  return (
  <>
  <div style={{backgroundColor : "#000"}}>
    <marquee behavior="" direction="" style={{color:"#fff"}}>Enjoy Your Free Shipping</marquee>
  </div>

  {/* HERO */}
  <div>
    <div className='heroimg'>
      <img src="https://i.pinimg.com/1200x/d2/7f/58/d27f58389c7f4fc2b0600c41755ba30f.jpg" alt=""  />
      <div className='herotext'>
        <h1>LIGHT UP YOUR GAME</h1>
        <br />
        <button>SHOP NOW</button>
      </div> 
    </div>
    </div>
    {/* collection */}
    <br />
    <h1>New Collections</h1><br />
    <div className='card1'>
    <div className='card'>
      <img src="https://ik.imagekit.io/vyka3olhl/common/home/desktop/gear-collection/mens_upVsII_oN.jpg" alt="" />
      <p>Outfit</p>
    </div>
    <div className='card'>
      <img src="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/Untitled_design_6_86068171-afe6-410b-b155-43b37f7a93a5.png?v=1751882021" alt="" />
      <p>Cricket</p>
    </div>
    <div className='card'>
      <img src="https://ik.imagekit.io/vyka3olhl/common/home/desktop/gear-collection/mens_upVsII_oN.jpg" alt="" />
      <p>Football</p>
    </div>
    <div className='card'>
      <img src="https://ik.imagekit.io/vyka3olhl/common/home/desktop/gear-collection/mens_upVsII_oN.jpg" alt="" />
      <p>Volleyball</p>
    </div>
    </div>
    <br />

    <div className="offer">
      <p>BECOME A MEMBER AND GET 10% OFFER</p>
      <button>JOIN US</button>
    </div>

    {/* footer */}
    <div className="footer">
        <div className="f1">
        <h2>Logo</h2>
        <p>Sports is about strength, be it physical or mental. Our mission is to design elegance with strength and to be the ultimate choice for your sport.</p>
        <p><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-square-instagram"></i>  <i class="fa-brands fa-square-x-twitter"></i> <i class="fa-brands fa-youtube"></i></p>
        </div>
    <div>
        <h3>Quick links</h3>
        <ul>
            <li> - Support</li><br/>
            <li> - Helpline</li><br/>
            <li> - Courses</li><br/>
            <li> - Event</li>
        </ul>
    </div>
    <div>
        <h3>Other pages</h3>
        <ul>
            <a href="products.html"><li> - Shop</li></a><br/>
            <a href="about.html"><li> - About</li></a><br/>
            <a href="contact.html"><li> - Contact</li></a>
        </ul>
    </div>
    <div>
        <h3>Shop Information</h3>
        <p>Email : toyzone@gmail.com <br/><br/>
        phone/Fax : 9047199321 <br/><br/>
        address : 96,Peelamedu,Coimbatore 641-004</p>
    </div>
    </div>
    <div className="f2">
        <center><p>&copy; 2025 <span>ToyZone</span> Made with <i class="fa-solid fa-heart"></i> by Team Toyzone</p></center>
    </div>
  </>
  )
}
