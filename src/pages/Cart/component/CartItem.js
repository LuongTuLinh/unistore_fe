import React from 'react'
import { useState, useEffect } from 'react'
import CatalogApi from 'api/catalogApi'

export default function CartItem({data, price, onChangeCart}) {
	//console.log(product.name);

	const [product, setProduct] = useState([]);

	useEffect(() => {
		async function fetch() {
			try {
				const res = await CatalogApi.get(data.id);
				setProduct(res.data);
	
				price("plus", res.data.price * data.amount);
			} catch (err) {
				console.log("cart is null.")
			}
		}
		
		fetch();
	},[])

	const minus = () => {
		const amountElm = document.getElementById(data.id);
		console.log(amountElm.value)
		if(!(amountElm.value <= 1)) {
			
			amountElm.value -= 1;
	
			const cart = JSON.parse(localStorage.getItem('cart'));
	
			cart.list.forEach((prod, index) => {
				if(prod.id === data.id) {
					prod.amount -= 1;
					cart.quantity -= 1;
					if(prod.amount === 0) {
						cart.list.splice(index, 1);
					}
					if(prod.quantity === 0) {
						cart.isActive =false;
					}
					localStorage.setItem('cart', JSON.stringify(cart));
				}
			})
	
			price("minus", product.price);
			onChangeCart();
			console.log("minus");
		}
	}

	const plus = () => {
		const amountElm = document.getElementById(data.id);
		
		amountElm.value = parseInt(amountElm.value) + 1 ;

		const cart = JSON.parse(localStorage.getItem('cart'));

		cart.list.forEach((prod) => {
			if(prod.id === data.id) {
				prod.amount += 1;
				cart.quantity += 1;
				
				localStorage.setItem('cart', JSON.stringify(cart));
			}
		})

		price("plus", product.price);
		onChangeCart();
		console.log("plus");
	}

	return (
		<>
			<div className="media">
				<div className="media-left">
					<a href="#image">
					<img className="media-object" src={product.image} alt="HP Chromebook 11"/>
					</a>
				</div>
				<div className="media-body">
					<h2 className="h4 media-heading">{product.name}</h2>
					<label>{product.catalog}</label>
					<p className="price">${(product.price * data.amount).toFixed(2)}</p>
				</div>
				<div className="controls">
					<div className="input-group">
					<span className="input-group-btn">
						<button className="btn btn-default btn-sm" type="button" data-action="minus" onClick={() => {minus()}}><i className="ion-minus-round"></i></button>
					</span>
					<input id={data.id} type="text" className="form-control input-sm" placeholder="Qty"  onChange={null} readOnly={true} value={data.amount}/>
					<span className="input-group-btn">
						<button className="btn btn-default btn-sm" type="button" data-action="plus" onClick={() => {plus()}}><i className="ion-plus-round"></i></button>
					</span>
					</div>
												{/* <!-- /input-group --> */}

					<a href="#remove" > <i className="ion-trash-b"></i> Remove </a>
				</div>
			</div>
		</>
	)
}
