import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
  
  return (
  <>
  

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
      <img src="https://www.niviasports.com/cdn/shop/files/77A9028.jpg?v=1744201068&width=720" alt="" />
      <p>Outfit</p>
    </div>
    <div className='card'>
      <img src="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/Untitled_design_6_86068171-afe6-410b-b155-43b37f7a93a5.png?v=1751882021" alt="" />
      <p>Cricket</p>
    </div>
    <div className='card'>
      <img src="https://www.niviasports.com/cdn/shop/files/asd.jpg?v=1713348575&width=720" alt="" />
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
