import React, { useState, useEffect } from 'react'
import Tags from "./component/Tags"
import ProductBody from './component/ProductBody'
import CatalogApi from 'api/catalogApi'
import Alert from 'components/Alert/Alert'

export default function Products() {

  const [data, setData] = useState(
    {
      status : "faild",
      message : "Request products...",
      data : [
          {
              name : "",
              memory : "",
              description : "",
              status : "",
              catalog : "",
              hardDrive : "",
              os : "",
              processer : "",
              graphics : "",
              Wireless : "",
              battery : "",
              image : "",
              productID : 11,
              price : 0
          }
      ],
      pagination: {
          page : 1,
          totalPage: 1,
          totalRow: 1
      }

    }
  );

  const [page,setPage] = useState({ page : 1, limit: 6 });

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await CatalogApi.getAll(page);
        setData(response);
      } catch (error) {
        console.log("Failed to fetch product list ", error);
        setData({...data, status: "failed", message: "Failed to connect server"});
      }
    }

    fetchProductList();
  },[page])

  const handlePagination = (value) => {
    
    setPage({...page, page: value});
  }

  const addToCart = (data) => {
    const initCart = {
      isActive: false,
      list: [],
      quantity: 0
    }
    let status = false;

    //Create cart if it doesn't exist
    if(localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify(initCart));
    }

    //Get cart
    const cart = JSON.parse(localStorage.getItem("cart"));

    //Update if product is already
    cart.list.forEach(product => {
      if(product.id === data.productId) {
        console.log("UPDATE AMOUNT");
        product.amount = product.amount + 1;
        cart.quantity += 1;
        cart.isActive = true;
        localStorage.setItem("cart", JSON.stringify(cart));
        status = true;
      }
    })

    //Add product to cart
    if(!status) {
      console.log("ADD PRODUCT TO CART");
      cart.list.push({id: data.productId, amount: 1});
      cart.isActive = true;
      cart.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    showAlert();
  }

  const showAlert = () => {
    const alert = document.getElementById('alert');
    document.getElementById('alert').style.display = "block";

    setTimeout(function() {alert.style.display='none'}, 2000);
  }
  
  return (
    <>
      <Alert type="success" text={"Product added to your cart."}/>
      <Tags />
      <ProductBody data={data} handlePagination={handlePagination} addToCart={addToCart}/>
    </>
  )
}