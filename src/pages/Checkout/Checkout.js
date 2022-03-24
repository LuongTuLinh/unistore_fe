import catalogAPI from 'api/catalogApi';
import React, { useState, useEffect } from 'react'
import CheckoutBody from './component/CheckoutBody'
import orderApi from 'api/orderApi';
import Alert from 'components/Alert/Alert';

export default function Checkout() {

	const [error, setError] = useState("");
	const cart = JSON.parse(localStorage.getItem('cart'));
	const [total, setTotal] = useState(0);
	var totalPrice = total;
	const [alert, setAlert] = useState({type: "infor", text: "Please enter full information"});

	

	useEffect(() => {
		function price(price) {
			totalPrice += price;
			setTotal(totalPrice);
		}

		async function getTotal() {
			cart.list.forEach(async (product) => {
				const res = await catalogAPI.get(product.id);
				price(res.data.price * product.amount);
			})
		}

		getTotal();
	}, [])

	const order = async (details) => {
		//console.log(details)
		let regex =/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
		
		if(!regex.test(details.phone)) {
			console.log("error phone");
			setError("Error phone.");
			return null;
		} 

		if(details.address === "" || details.city === "") {
			console.log("null");
			setError("Address or city is empty.");
			return null;
		}

		const order = {
			name: details.name,
			quantity: cart.quantity,
			total: total,
			product: cart.list,
			address: details.address
		}
		console.log(order);
		try {
			const res = await orderApi.add(order);
			setAlert({...alert, type:"success", text:"Order added successfully"});
			localStorage.removeItem('cart');
			window.location.href = "/home";
		} catch (err) {
			console.log(err);
			setAlert({...alert, type:"danger", text:"Order added failed. Please login and  fill infor"});
		}

	}

	

	useEffect(() => {
		const showAlert = () => {
			const alert = document.getElementById('alert');
			document.getElementById('alert').style.display = "block";

			setTimeout(function() {alert.style.display='none'}, 2000);
		}
		showAlert();
	},[alert])

	return (
		<>
			<Alert type={alert.type} text={alert.text} />
			<CheckoutBody total={total} order={order} error={error} setError={setError}/>
		</>
	)
}
