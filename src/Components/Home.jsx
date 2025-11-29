import Footer from './Footer'
import './Footer.css'
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
    <h1 className='side-head'>NEW COLLECTIONS</h1><br />
    <div className='card1'>
    <div className='card'>
      <img src="https://www.niviasports.com/cdn/shop/files/77A9028.jpg?v=1744201068&width=720" alt="" />
      <h2>Outfit</h2>
    </div>
    <div className='card'>
      <img src="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/Untitled_design_6_86068171-afe6-410b-b155-43b37f7a93a5.png?v=1751882021" alt="" />
      <h2>Cricket</h2>
    </div>
    <div className='card'>
      <img src="https://www.niviasports.com/cdn/shop/files/asd.jpg?v=1713348575&width=720" alt="" />
      <h2>Football</h2>
    </div>
    <div className='card'>
      <img src="https://www.niviasports.com/cdn/shop/files/2B0A1845_1a12cfab-3504-462c-9c86-81d36564ce22.jpg?v=1728559966&width=720" alt="" />
      <h2>Volleyball</h2>
    </div>
    </div>
    <br />
    <h1 className='side-head'>BRANDS</h1>
    <div>
    <div className='brand'>
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c1.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c3.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c6.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c4.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c5.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c22.png" alt="" />
    </div>
    <hr />
    <div className="brand">
      <img src="https://i.ibb.co/PsrZ1dgD/ADIDAS-removebg-preview.png" alt="ADIDAS-removebg-preview"/>
      <img src="https://i.postimg.cc/Gmvb3P1P/GM.png" alt="" />
      <img src="https://i.ibb.co/7Jnyz591/PUMA-removebg-preview.png" alt="PUMA-removebg-preview"/>
      <img src="https://i.postimg.cc/nctRbq0n/GM-(2).png" alt="" />
      <img src="https://i.ibb.co/0jHvptfx/MRF-removebg-preview.png" alt="" />
      <img src="https://i.ibb.co/fL5QLqh/SSTON-removebg-preview.png" alt="" />
    </div>
    <hr />
    <div className="brand">
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c19.png" alt="ADIDAS-removebg-preview"/>
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c18.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c17.png" alt="PUMA-removebg-preview"/>
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c21.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c7.png" alt="" />
      <img src="https://goalkick.qodeinteractive.com/wp-content/uploads/2024/05/footer-c20.png" alt="" />
    </div>
    </div>
<br />
    <div className="offer">
      <p>BECOME A MEMBER AND GET 10% OFFER</p>
      <button>JOIN US</button>
    </div>

    < Footer />
    </>
    
  )
}
