import React from 'react'
import "./Footer.css"

export default function Footer() {
	return (
		<footer>
			<div className="about">
				<div className="container">
					<div className="row">
						<hr className="offset-md" />
						<div className="col-xs-6 col-sm-3">
							<div className="item">
								<i className="ion-ios-telephone-outline" />
								<h1>24/7 free <br /> <span>support</span></h1>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3">
							<div className="item">
								<i className="ion-ios-star-outline" />
								<h1>Low price <br /> <span>guarantee</span></h1>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3">
							<div className="item">
								<i className="ion-ios-gear-outline" />
								<h1> Manufacturer’s <br /> <span>warranty</span></h1>
							</div>
						</div>
						<div className="col-xs-6 col-sm-3">
							<div className="item">
								<i className="ion-ios-loop" />
								<h1> Full refund <br /> <span>guarantee</span> </h1>
							</div>
						</div>
						<hr className="offset-md" />
					</div>
				</div>
			</div>
			<div className="subscribe">
				<div className="container align-center">
					<hr className="offset-md" />
					<h1 className="h3 upp">Join our newsletter</h1>
					<p>Get more information and receive special discounts for our products.</p>
					<hr className="offset-sm" />
					<form action="" method="post"> 
						<div className="input-group">
							<input type="email" name="email" placeholder="E-mail" required className="form-control" />
							<span className="input-group-btn">
							<button type="submit" className="btn btn-primary"> Subscribe <i className="ion-android-send" /> </button>
							</span>
						</div>{/* /input-group */}
					</form>
					<hr className="offset-lg" />
					<hr className="offset-md" />
					<div className="social">
					<a href={this}><i className="ion-social-facebook" /></a>
					<a href={this}><i className="ion-social-twitter" /></a>
					<a href={this}><i className="ion-social-googleplus-outline" /></a>
					<a href={this}><i className="ion-social-instagram-outline" /></a>
					<a href={this}><i className="ion-social-linkedin-outline" /></a>
					<a href={this}><i className="ion-social-youtube-outline" /></a>
					</div>
					<hr className="offset-md" />
					<hr className="offset-md" />
				</div>
			</div>
			<div className="container">
				<hr className="offset-md" />
				<div className="row menu">
					<div className="col-sm-3 col-md-2">
					<h1 className="h4">Information <i className="ion-plus-round hidden-sm hidden-md hidden-lg" /> </h1>
					<div className="list-group">
						<a href={this} className="list-group-item">About</a>
						<a href={this} className="list-group-item">Terms</a>
						<a href={this} className="list-group-item">How to order</a>
						<a href={this} className="list-group-item">Delivery</a>
					</div>
					</div>
					<div className="col-sm-3 col-md-2">
					<h1 className="h4">Products <i className="ion-plus-round hidden-sm hidden-md hidden-lg" /> </h1>
					<div className="list-group">
						<a href={this} className="list-group-item">Laptops</a>
						<a href={this} className="list-group-item">Tablets</a>
						<a href={this} className="list-group-item">Servers</a>
					</div>
					</div>
					<div className="col-sm-3 col-md-2">
					<h1 className="h4">Support <i className="ion-plus-round hidden-sm hidden-md hidden-lg" /> </h1>
					<div className="list-group">
						<a href={this} className="list-group-item">Returns</a>
						<a href={this} className="list-group-item">FAQ</a>
						<a href={this} className="list-group-item">Contacts</a>
					</div>
					</div>
					<div className="col-sm-3 col-md-2">
					<h1 className="h4">Location</h1>
					<div className="dropdown">
						<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Language
						<span className="caret" />
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<li><a href={this}> <img src="assets/img/flags/gb.png" alt="Eng" /> English</a></li>
						<li><a href={this}> <img src="assets/img/flags/es.png" alt="Spa" /> Spanish</a></li>
						<li><a href={this}> <img src="assets/img/flags/de.png" alt="De" /> Deutch</a></li>
						<li><a href={this}> <img src="assets/img/flags/fr.png" alt="Fr" /> French</a></li>
						</ul>
					</div>
					<hr className="offset-xs" />
					<div className="dropdown">
						<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Currency
						<span className="caret" />
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
						<li><a href={this}><i className="ion-social-euro" /> Euro</a></li>
						<li><a href={this}><i className="ion-social-usd" /> Dollar</a></li>
						<li><a href={this}><i className="ion-social-yen" /> Yen</a></li>
						<li><a href={this}><i className="ion-social-bitcoin" /> Bitcoin</a></li>
						</ul>
					</div>
					</div>
					<div className="col-sm-3 col-md-3 col-md-offset-1 align-right hidden-sm hidden-xs">
						<h1 className="h4">Unistore, Inc.</h1>
						<address>
							1305 Market Street, Suite 800<br />
							San Francisco, CA 94102<br />
							<abbr title="Phone">Phone:</abbr> (123) 456-7890
						</address>
						<address>
							<strong>Support</strong><br />
							<a href={this}>sup@example.com</a>
						</address>
					</div>
				</div>
			</div>
			<hr />
			<div className="container">
				<div className="row">
					<div className="col-sm-8 col-md-9 payments">
					<p>Pay your order in the most convenient way</p>
					<div className="payment-icons">
						<img src="assets/img/payments/paypal.svg" alt="paypal" />
						<img src="assets/img/payments/visa.svg" alt="visa" />
						<img src="assets/img/payments/master-card.svg" alt="mc" />
						<img src="assets/img/payments/discover.svg" alt="discover" />
						<img src="assets/img/payments/american-express.svg" alt="ae" />
					</div>
					<br />
					</div>
					<div className="col-sm-4 col-md-3 align-right align-center-xs">
						<hr className="offset-sm hidden-sm" />
						<hr className="offset-sm" />
						<p>Unistore Pro © 2016 <br /> Designed By <a href="#1" target="_blank" rel="noreferrer">Sunrise Digital</a></p>
						<hr className="offset-lg visible-xs" />
					</div>
				</div>
			</div>
		</footer>
	)
}
