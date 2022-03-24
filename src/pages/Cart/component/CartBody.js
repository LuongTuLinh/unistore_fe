import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem'


export default function CartBody({cart , onChangeCart}) {
  
  if(cart === null) {
    window.location.href = "/catalog";
  }
	
	const [totalPrice, setTotalPrice] = useState(0);
	
	var total = totalPrice;

	const price = (cal, val) => {
		switch (cal) {
			case "minus":
				total -= val;
				break;
			case "plus":
				total = parseFloat(total) + val;
				break;
      default: break;
		}
		setTotalPrice(total.toFixed(2));
	};
	
    console.log(cart)
    const list = cart.list.map((product, index) => {
      return <CartItem key={index} data={product} price={price} onChangeCart={onChangeCart}/>
    })
  
	

	return (
		<>
			<hr className="offset-md"/>

			<div className="box">
				<div className="container">
						<h1>Shopping Cart</h1>
						<hr className="offset-sm"/>
				</div>
			</div>
			<hr className="offset-md"></hr>

			{/* Cart body */}
			<div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="checkout-cart">
                      <div className="content">
												
												{list}

                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-sm-8 col-md-4">
              <hr className="offset-md visible-sm"/>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h2 className="no-margin">Summary</h2>
                    <hr className="offset-md"/>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6">
                                <p>Subtotal ({cart.quantity} items)</p>
                            </div>
                            {/* <div className="col-xs-6">
                                <p><b>$1499</b></p>
                            </div> */}
                        </div>
                    </div>
                    <hr/>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-6">
                                <h3 className="no-margin">Total sum</h3>
                            </div>
                            <div className="col-xs-6">
                                <h3 className="no-margin" id="total">${totalPrice}</h3>
                            </div>
                        </div>
                    </div>
                    <hr className="offset-md"/>

                    {/* <a href="../checkout/" className="btn btn-primary btn-lg justify"><i className="ion-android-checkbox-outline"></i>&nbsp;&nbsp; Checkout order</a> */}
                    <Link to="/checkout" className="btn btn-primary btn-lg justify">
                      <i className="ion-android-checkbox-outline"></i>&nbsp;&nbsp; Checkout order
                    </Link>
                    <hr className="offset-md"/>

                    {/* <p>Pay your order in the most convenient way</p>
                    <div className="payment-icons">
                      <img src="../assets/img/payments/icon-paypal.svg" alt="paypal"/>
                      <img src="../assets/img/payments/icon-visa.svg" alt="visa"/>
                      <img src="../assets/img/payments/icon-mc.svg" alt="mc"/>
                      <img src="../assets/img/payments/icon-discover.svg" alt="discover"/>
                      <img src="../assets/img/payments/icon-ae.svg" alt="ae"/>
                    </div> */}
                  </div>
                </div>
            </div>
        </div>
			</div>
			<hr className="offset-lg"/>
			<hr className="offset-lg"></hr>
		</>
	)
}
