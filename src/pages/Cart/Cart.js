// import Alert from 'components/Alert/Alert';
import React, { useState, useEffect} from 'react'
import CartBody from './component/CartBody'

export default function Cart() {

	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
	// console.log(cart);

	useEffect(() => {
		console.log(cart);
	},[cart])

	const onChangeCart = () => {
		setCart(JSON.parse(localStorage.getItem('cart')));
	};

	
	
	return (
		<>
			<CartBody cart={cart} onChangeCart={onChangeCart}/>
		</>
	)
}
