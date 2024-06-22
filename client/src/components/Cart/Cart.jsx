import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/404662977_887018913425016_44853879468049392_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1zZ9iV4wIb0AX9zgQ_h&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDXiBNYjdG1E4dMx1oIaJ7MjO-_Tfob_oK9mUdM1cF7Ug&oe=65699859",
            img2: "https://www.facebook.com/photo/?fbid=887018926758348&set=pb.100063507460700.-2207520000",
            title: "Tshirt",
            desc: "something for now",
            isNew: true,
            oldPrice: 1550,
            price: 1200,
          },
          {
            id: 2,
            img: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Sweater",
            desc: "Premium Sweater for winter",
            isNew: true,
            oldPrice: 1500,
            price: 1250,
        },
    ]
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt='' />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">1 x Rs{item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>Rs 800</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
