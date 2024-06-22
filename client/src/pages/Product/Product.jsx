import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import "./Product.scss";

const Product = () => {

  const images = [
    "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/404634041_887018910091683_3414511883052092826_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nEfViZOtzw0AX9o-ElM&_nc_ht=scontent.fktm20-1.fna&oh=00_AfCpcCZitj0O9VvSgopQxdOIeXsqtHVlZshBnMFIG3TRwA&oe=656904D7",
    "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/404662977_887018913425016_44853879468049392_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1zZ9iV4wIb0AX9zgQ_h&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDXiBNYjdG1E4dMx1oIaJ7MjO-_Tfob_oK9mUdM1cF7Ug&oe=65699859",
  ]

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
            <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
            <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)} />
      </div>
      <div className="mainImg">
      <img src={images[selectedImg]} alt='' />
      </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">Rs 1500</span>
        <p>
            High Quality Premium Sweater for winter
        </p>
        <div className="quantity">
        <button onClick={() =>setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon />ADD TO COMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product
