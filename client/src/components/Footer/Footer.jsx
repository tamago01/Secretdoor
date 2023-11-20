import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus diam,
            gravida vitae vestibulum sed, dignissim at nulla. Vivamus in porta velit,
            eu aliquam lectus. Vivamus elementum odio sit amet semper eleifend. 
            Ut laoreet augue vel sodales cursus. Vestibulum ante ipsum primis 
            in faucibus orci luctus et ultrices posuere cubilia curae
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
              <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus diam,
            gravida vitae vestibulum sed, dignissim at nulla. Vivamus in porta velit,
            eu aliquam lectus. Vivamus elementum odio sit amet semper eleifend. 
            Ut laoreet augue vel sodales cursus. Vestibulum ante ipsum primis 
            in faucibus orci luctus et ultrices posuere cubilia curae
              </span>
            </div>  
          </div>
        <div className="bottom">
          <div className="left">
          <span className="logo">Secret Door</span>
          <span className="copyright">
          © Copyright 2023. All Rights Reserved.
          </span>
        </div>
        
        <div className="right">
          <img src="/img/payment.png"></img>
        </div>
        </div>
    </div>
  )
}

export default Footer
