import React, { useState } from 'react';
import './Cricket.css';
import Card from './Card';

export default function Cricket() {
  const [selectedCategory, setSelectedCategory] = useState("");

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
          {selectedCategory || title} ▼
        </button>

        {open && (
          <div className="dropdown-menu">
            {items.map((item, index) => (
              <p
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setSelectedCategory(item);
                  setOpen(false); // CLOSE MENU
                }}
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
      {/* Render Dropdown */}
      <Dropdown title="Select Category" items={categories} />

      {selectedCategory && (
        <h3 className="selected-text">
          Selected Category: {selectedCategory}
        </h3>
      )}

      <div className='product'>
        <Card 
          image="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/Untitled_design_6_58fb72ed-e06e-44ef-b6f6-09d633d2f7e2.png?v=1751870889" 
          name="SG Triple Crown Original English Willow Cricket Bat"
          dis_price="MRP:₹30,900.00"
          price="MRP:₹35,000"
        />

        <Card
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/ghostpro25/ghostpro25@13.jpg"
          name="Kookaburra Ghost Pro EW Players Adult Cricket Bat"
          dis_price="MRP:₹6000.00"
          price="MRP:₹7,000"
        />

        <Card 
          image="https://a2cricket.com/cdn/shop/files/31_720x.jpg?v=1751621988"
          name="Dukes County International A Cricket Ball 156g RED"
          dis_price="MRP:₹7,600.00"
          price="MRP:₹8,000"
        />

        <Card 
          image="https://www.sstoncricket.com/wp-content/uploads/2023/04/1.0-6.jpg"
          name="SS Tilak Verma (Player) English Willow Cricket Bat-SH"
          dis_price="MRP:₹95,900.00"
          price="MRP:₹1,05,000"
        />
      </div>

      <div className='product'>
        <Card 
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/ghostplus25/thumbnail/big_ghostplus25.jpg" 
          name="Ghost Pro Players Plus Batting Gloves (RH) Mens"
          dis_price="MRP:₹17,510.00"
          price="MRP:₹15,000"
        />

        <Card
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/playersreppad25/thumbnail/big_playersreppad25.jpg"
          name="GHOST Players Replica Classic Batting Pads (RH) Mens"
          dis_price="MRP:₹6000.00"
          price="MRP:₹7,000"
        />

        <Card 
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/3D91101/thumbnail/middle_3D91101.jpg "
          name="Kookaburra Pro Players Pro Thigh Guard (RH) Mens"
          dis_price="MRP:₹7,600.00"
          price="MRP:₹8,000"
        />

        <Card 
          image="https://ik.imagekit.io/vyka3olhl/uk/product-3/navy-blue/SHREY_MASTER_CLASS_AIR_2.0_TITANIUM__H011_NAVY_2_HD_Gcao-1-qxD.webp?tr=w-700,h-933?tr=w-700,h-933"
          name="Shrey Master Class Cricket Helmet Air 2.0 Titanium"
          dis_price="MRP:₹95,900.00"
          price="MRP:₹1,05,000"
        />
      </div>

            <div className='product'>
        <Card 
          image="https://assets.2.commercebuild.com//b522fd52e101edc926c3308c230445d5/contents/variations/1a1104/thumbnail/big_1A1104@@White.jpg" 
          name="Kookaburra REGULATION CRICKET BALL(WHITE)"
          dis_price="MRP:₹7,500.00"
          price="MRP:₹6,000"
        />

        <Card
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/1A1104/1A1104.jpg"
          name="Kookaburra REGULATION CRICKET BALL(RED)"
          dis_price="MRP:₹7,000.00"
          price="MRP:₹6,000"
        />

        <Card 
          image="https://webassets.cyranecloud.com/dukes-cricket/county_int_ball_web.jpg"
          name="Dukes County International A Cricket Ball 156g RED"
          dis_price="MRP:₹8,000.00"
          price="MRP:₹7,600"
        />

        <Card 
          image="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/2_4f1ee1ae-142d-4981-a700-47f59073bda5.png?v=1720246355"
          name="SG Test Limited Edition Red Cricket Leather Ball"
          dis_price="MRP:₹95,900.00"
          price="MRP:₹1,05,000"
        />
      </div>

       <div className='product'>
        <Card 
          image="https://assets.2.commercebuild.com//b522fd52e101edc926c3308c230445d5/contents/variations/1a1104/thumbnail/big_1A1104@@White.jpg" 
          name="Kookaburra REGULATION CRICKET BALL(WHITE)"
          dis_price="MRP:₹7,500.00"
          price="MRP:₹6,000"
        />

        <Card
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/1A1104/1A1104.jpg"
          name="Kookaburra REGULATION CRICKET BALL(RED)"
          dis_price="MRP:₹7,000.00"
          price="MRP:₹6,000"
        />

        <Card 
          image="https://webassets.cyranecloud.com/dukes-cricket/county_int_ball_web.jpg"
          name="Dukes County International A Cricket Ball 156g RED"
          dis_price="MRP:₹8,000.00"
          price="MRP:₹7,600"
        />

        <Card 
          image="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/2_4f1ee1ae-142d-4981-a700-47f59073bda5.png?v=1720246355"
          name="SG Test Limited Edition Red Cricket Leather Ball"
          dis_price="MRP:₹95,900.00"
          price="MRP:₹1,05,000"
        />
      </div>

       <div className='product'>
        <Card 
          image="https://assets.2.commercebuild.com//b522fd52e101edc926c3308c230445d5/contents/variations/1a1104/thumbnail/big_1A1104@@White.jpg" 
          name="Kookaburra REGULATION CRICKET BALL(WHITE)"
          dis_price="MRP:₹7,500.00"
          price="MRP:₹6,000"
        />

        <Card
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/1A1104/1A1104.jpg"
          name="Kookaburra REGULATION CRICKET BALL(RED)"
          dis_price="MRP:₹7,000.00"
          price="MRP:₹6,000"
        />

        <Card 
          image="https://webassets.cyranecloud.com/dukes-cricket/county_int_ball_web.jpg"
          name="Dukes County International A Cricket Ball 156g RED"
          dis_price="MRP:₹8,000.00"
          price="MRP:₹7,600"
        />

        <Card 
          image="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/2_4f1ee1ae-142d-4981-a700-47f59073bda5.png?v=1720246355"
          name="SG Test Limited Edition Red Cricket Leather Ball"
          dis_price="MRP:₹95,900.00"
          price="MRP:₹1,05,000"
        />
      </div>

       <div className='product'>
        <Card 
          image="https://assets.2.commercebuild.com//b522fd52e101edc926c3308c230445d5/contents/variations/1a1104/thumbnail/big_1A1104@@White.jpg" 
          name="Kookaburra REGULATION CRICKET BALL(WHITE)"
          dis_price="MRP:₹7,500.00"
          price="MRP:₹6,000"
        />

        <Card
          image="https://assets.2.commercebuild.com/b522fd52e101edc926c3308c230445d5/contents/1A1104/1A1104.jpg"
          name="Kookaburra REGULATION CRICKET BALL(RED)"
          dis_price="MRP:₹7,000.00"
          price="MRP:₹6,000"
        />

        <Card 
          image="https://webassets.cyranecloud.com/dukes-cricket/county_int_ball_web.jpg"
          name="Dukes County International A Cricket Ball 156g RED"
          dis_price="MRP:₹8,000.00"
          price="MRP:₹7,600"
        />

        <Card 
          image="https://cdn.shopify.com/s/files/1/0827/6249/8336/files/2_4f1ee1ae-142d-4981-a700-47f59073bda5.png?v=1720246355"
          name="SG Test Limited Edition Red Cricket Leather Ball"
          dis_price="MRP:₹95,900.00"
          price="MRP:₹1,05,000"
        />
      </div>
    </>
  );
}
