import {Link} from 'react-router-dom'
import './Home.css'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [run, setRun] = useState(true)     
  const timerRef = useRef(null)              
  const isUnmounted = useRef(false)        

  useEffect(() => {                           
    const tick = () => {
      setRun(prev => !prev)
      timerRef.current = setTimeout(tick, 5000)
    };
    timerRef.current = setTimeout(tick, 5000)

    return () => {
      //  cleanup 
      isUnmounted.current = true             
      if (timerRef.current) {
        clearTimeout(timerRef.current)       
      }
    }
  }, [])
  return (
  <>
  <div style={{ backgroundColor: "#000" }}>
      <marquee style={{ color: "#fff" }}>
        {run ? "Enjoy Your Free Shipping" : "Discount upto 50%" }
      </marquee>
    </div>

  {/* HERO */}
  <div>
    <div className='heroimg'>
      <img src="https://media.istockphoto.com/id/1801193144/photo/cricket-sports.jpg?s=612x612&w=0&k=20&c=zISMV5taPi8bJWsIJFaDOboSTdIja7FB0Sphoja-e0o=" alt=""  />
      <div className='herotext'>
        <h1>LIGHT UP YOUR GAME</h1>
        <br />
        <button>SHOP NOW</button>
        <br />
        <br />
        <h2 style={{fontStyle:"italic"}}>LIVE FOR PASSION</h2>
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
      <img src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/eec1eab224c04bfcb1157b722c93fc22_9366/womens-euro25-lge-ball.jpg" alt="" />
      <p>Football</p>
    </div>
    <div className='card'>
      <img src="https://www.niviasports.com/cdn/shop/files/2B0A1845_1a12cfab-3504-462c-9c86-81d36564ce22.jpg?v=1728559966&width=720" alt="" />
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
        <h2>Logo</h2><br />
        <p>Sports is about strength, be it physical or mental. Our mission is to design elegance with strength and to be the ultimate choice for your sport.</p>
        <p><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-square-instagram"></i>  <i class="fa-brands fa-square-x-twitter"></i> <i class="fa-brands fa-youtube"></i></p>
        </div>
    <div>
        <h3>Quick links</h3><br />
        <ul>
            <li> - Support</li><br/>
            <li> - Helpline</li><br/>
            <li> - Courses</li><br/>
            <li> - Event</li>
        </ul>
    </div>
    <div>
        <h3>Other pages</h3><br />
        <ul>
            <Link to='/Cricket'><li> - Cricket</li></Link><br />
            <Link to='/Football'><li> - Football</li></Link><br/>
            <Link to='/Volleyball'><li> - Vollyball</li></Link>
        </ul>
    </div>
    <div>
        <h3>Shop Information</h3><br />
        <p>Email : sportsa@gmail.com <br/><br/>
        phone/Fax : 9047199321 <br/><br/>
        address : 96,Peelamedu,Coimbatore 641-004</p>
    </div>
    </div>
    <div className="f2">
        <center><p>&copy; 2025 <span>Sports accessories</span> by Team </p></center>
    </div>
  </>
  )
}
