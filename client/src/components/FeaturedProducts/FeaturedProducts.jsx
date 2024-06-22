import React, { useState, useEffect } from 'react';
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from 'axios';
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {


  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  console.log(data)
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:1337/api/products?populate=*&[filters][type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: "bearer " + 'f6b27b74dd76325d1a901fe689ef555cc4e28f2a4c274298988051873b8217b10f866abdee6c1515d04daa2849755881d45ad7b70d30a3d4f8796d590352a91360d4dbc2fb058be081f05ba304eb8e1a16fa20a92c0c5fab922f375bb5bdfd7bf172720e986a453b0ad2dd7fa3f52ae43a7c90c5e8f1bbc810274139285875da',
  //           },
  //         });
  //       // console.log(res.data)
  //       setData(res.data.data)
  //     } catch (err) {
  //       console.log('error fetching data', err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  console.log(data)
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus diam,
          gravida vitae vestibulum sed, dignissim at nulla. Vivamus in porta velit,
          eu aliquam lectus. Vivamus elementum odio sit amet semper eleifend.
        </p>
      </div>
      <div className="bottom">
        {
          error ? "Something went wrong!!"
            : (loading ? "loading"
              : data?.map((item) => <Card item={item} key={item.id} />)
            )
        }
      </div>
    </div>
  )
}

export default FeaturedProducts
