import React, { useState, useEffect } from 'react'
import ProductDetail from './component/ProductDetail'
import CatalogApi from 'api/catalogApi'
import Alert from 'components/Alert/Alert'

export default function Details() {

	const url = new URL(window.location.href);
	const id = (parseInt(url.searchParams.get("id")))?url.searchParams.get("id"):-1;

	const [product, setProduct] = useState({
		battery: "4-cell Li-ion, 59 Wh",
		catalog: "Acer",
		description: "Trải nghiệm chơi game cực mượt mà trên chiếc laptop Acer Predator Triton 300 PT315 53 71DJ i7 (NH.QDSSV.001) mang trong mình bộ xử lý Intel thế hệ 11 mạnh mẽ cân được nhiều tựa game hot.",
		graphics: "NVIDIA GeForce RTX 3070, 8 GB",
		hardDrive: "SSD 512 GB NVMe PCIe",
		image: "https://i.ibb.co/VLQp6HZ/image.png",
		memory: "8GB, DDR4 2 khe",
		name: "Laptop Acer Predator Triton 300 PT315 53 71DJ",
		os: "Windows 10 Home SL",
		price: 2071.96,
		processer: "Intel Core i7 Tiger Lake - 11800H",
		productId: 7,
		status: "1",
		wireless: "Bluetooth 5.2, Wi-Fi 6 (802.11ax)"
	})

	useEffect(() => {
		const fetchProductList = async () => {
			try {
				const response = await CatalogApi.get(id);
				setProduct(response.data);
			} catch (error) {
				window.location.href = "/notfound";
				console.log("Failed to fetch product list ", error);
			}
		}

		fetchProductList();
	},[id]);

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
			<ProductDetail product={product} addToCart={addToCart}/>
		</>
	)
}
