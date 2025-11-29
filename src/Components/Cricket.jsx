import React from 'react'
import './Cricket.css'
import Card from './Card'

export default function Cricket() {
  const [selectedCategory, setSelectedCategory] = useState("");

  /** BRAND LIST */
  const brands = [
    "SS TON", "MRF", "GM GUNN & MOORE", "PUMA",
    "GRAY-NICOLLS", "BREWFIT", "DSC", "REMFRY",
    "SG", "ASICS", "KOOKABURRA", "DYNA TECH",
    "MOONWALKR", "PHANTOM", "SF STANFORD", "SOMI",
    "SHREY", "OAKLEY", "VERSANT", "RNS LARSONS"
  ];

  /** CATEGORY LIST */
  const categories = [
    "BATS",
    "BALLS",
    "PROTECTIVE GEAR",
    "ACCESSORIES",
    "APPARELS",
    "BAGS"
  ];

  /** Custom Dropdown Component */
  function Dropdown({ title, items }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="dropdown">
        <button className="dropdown-btn" onClick={() => setOpen(!open)}>
          {title} ▼
        </button>

        {open && (
          <div className="dropdown-menu">
            {items.map((item, index) => (
              <p
                key={index}
                className="dropdown-item"
                onClick={() => setSelectedCategory(item)}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
    <div style={{backgroundColor : "#000"}}>
    <marquee behavior="" direction="" style={{color:"#fff"}}>Easy return within 4 days</marquee>
    </div>

    <div className='product'>
      <Card 
      image="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/Untitled_design_6_58fb72ed-e06e-44ef-b6f6-09d633d2f7e2.png?v=1751870889" 
      name="SG Triple Crown Original English Willow Cricket Bat"
      dis_price="MRP:₹30,900.00"
      price="MRP:₹35,000"
      />

        <Card
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/1A1104/1A1104.jpg"
          name="Kookaburra REGULATION CRICKET BALL"
          dis_price="MRP:₹6000.00"
          price="MRP:₹7,000"
        />

       <Card 
       image="https://webassets.cyranecloud.com/dukes-cricket/county_int_ball_web.jpg"
       name="Dukes County International A Cricket Ball 156g RED"
       dis_price="MRP:₹7,600.00"
       price="MRP:₹8,000"
       />
       <Card 
       image="https://www.sstoncricket.com/wp-content/uploads/2025/09/IMG-20250929-WA0003-1.jpg"
       name="SS Tilak Verma (Player) English Willow Cricket Bat-SH"
       dis_price="MRP:₹95,900.00"
       price="MRP:₹1,05,000"
       />

    </div>
    
    
    </>
  );
}
