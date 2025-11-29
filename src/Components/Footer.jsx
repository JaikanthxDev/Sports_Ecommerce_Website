import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquareInstagram , faSquareXTwitter ,faYoutube , faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './Home.css'

export default function Footer() {
  return (
    <><div className="footer">
        <div className="f1">
        <h2>Logo</h2><br />
        <p>Sports is about strength, be it physical or mental. Our mission is to design elegance with strength and to be the ultimate choice for your sport.</p><br />
        <p><FontAwesomeIcon icon={faSquareInstagram} /> <FontAwesomeIcon icon={faSquareXTwitter} />  <FontAwesomeIcon icon={faYoutube} /> <FontAwesomeIcon icon={faSquareWhatsapp} /></p>
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
        <center><p>&copy; 2025 Sports accessories by Team </p></center>
    </div>
  </>
  )
}
