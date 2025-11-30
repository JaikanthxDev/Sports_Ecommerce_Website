import React from 'react'
import './Cricket.css'
import Card from './Card'
import Footer from './Footer'
import './Footer.css'

export default function Football() {
  return (
    <>
    <div className="hero2">
      <div className="hero-content">
        FOOTBALL PRODUCTS
      </div>
      </div>
    <div className='product'>
          <Card 
          image="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4229e87f23044869a5218fbc64c4fd71_9366/fifa-world-cup-26-trionda-pro-ball.jpg" 
          name="FIFA World Cup 26™ Trionda Pro Ball"
          dis_price="MRP:₹30,900.00"
          price="MRP:₹35,000"
          />
    
          <Card 
          image="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa5659d887cb4767aeb6009a62602197_9366/fifa-world-cup-26-league-ball.jpg"
          name="FIFA World Cup 26™ League Ball"
          dis_price="MRP:₹6000.00"
          price="MRP:₹7,000"
          />
    
           <Card 
           image="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/44226784-33b2-4b11-8a26-0b93c8ca92a0/NK+ACADEMY+PLUS+-+FA25.png"
           name="Nike Academy"
           dis_price="MRP:₹7,600.00"
           price="MRP:₹8,000"
           />
           <Card 
           image="https://www.niviasports.com/cdn/shop/files/1_09224df0-8a60-4ecd-a44c-87551654f49d.jpg?v=1764143172&width=533"
           name="TPU Swerve Football"
           dis_price="MRP:₹95,900.00"
           price="MRP:₹1,05,000"
           />
    
        </div>
        <div className='product'>
          <Card 
          image="//www.niviasports.com/cdn/shop/files/Carbonite_Pro_Black_1.jpg?v=1752304471&width=1946" 
          name="Pro Carbonite 7.0 Football Stud"
          dis_price="MRP:₹30,900.00"
          price="MRP:₹35,000"
          />
    
          <Card 
          image="//www.niviasports.com/cdn/shop/files/077A9972_b05988ef-cde6-4d05-a8ab-072af7051179.jpg?v=1755761795&width=1946"
          name="Encounter Retro"
          dis_price="MRP:₹6000.00"
          price="MRP:₹7,000"
          />
    
           <Card 
           image="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/36bf111e-e6ab-4950-b868-519589c5e044/ZM+SUPERFLY+10+ACAD+KM+FG%2FMG.png"
           name="Nike Mercurial Superfly 10 Academy"
           dis_price="MRP:₹7,600.00"
           price="MRP:₹8,000"
           />
           <Card 
           image="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/b106d3de-2a0a-4a77-9bdd-910133f1cb31/ZM+VAPOR+16+ELITE+FG+SE.png"
           name="Nike Mercurial Vapor 16 Elite 'Déjà Vu'"
           dis_price="MRP:₹95,900.00"
           price="MRP:₹1,05,000"
           />
    
        </div>
        <div className='product'>
          <Card 
          image="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/4994ff47-4315-4494-89a1-143f85a8c6a4/NK+GK+MATCH+JR+-+HO24.png" 
          name="Nike Match Jr."
          dis_price="MRP:₹30,900.00"
          price="MRP:₹35,000"
          />
    
          <Card 
          image="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/beee2b56-7e1f-454c-a444-87cc60675ae6/NK+KM+MERC+LITE+GRD+-+HO25.png"
          name="Nike Mercurial Lite 'Kylian Mbappé'"
          dis_price="MRP:₹6000.00"
          price="MRP:₹7,000"
          />
    
           <Card 
           image="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/fqzklsecuccrrejmipoi/NK+J+GUARD.png"
           name="Nike Football Shinguards"
           dis_price="MRP:₹7,600.00"
           price="MRP:₹8,000"
           />
           <Card 
           image="https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/2df30f5e-46ad-419f-91af-928706568060/NK+GK+MATCH+-+HO24.png"
           name="Nike Classic Goalkeeper Gloves"
           dis_price="MRP:₹95,900.00"
           price="MRP:₹1,05,000"
           />
    
        </div>
        <Footer/>
    </>
  )
}
