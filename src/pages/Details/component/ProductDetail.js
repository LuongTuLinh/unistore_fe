import React from 'react'

export default function ProductDetail({product, addToCart}) {
	return (
		<>
			<hr class="offset-lg"/>
			<div className="product">
				<div className="container">
					<div className="row">
						<div className="col-sm-7 col-md-7">
							<div className="carousel product" data-count="5" data-current="1">
								{/* <button className="btn btn-control"></button> */}

								<div className="items">
									<div className="item active" data-marker="1">
										<img src={product.image} alt="ChromeBook 11"/>
									</div>
								</div>

								<ul className="markers">
									<li data-marker="1" className="active"><img src={product.image} alt="Background"/></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-5 col-md-5">
							{/* <img src="../assets/img/brands/hp.png" alt="HP" className="brand hidden-xs" /> */}

							<h1>{ product.name }</h1>

							<p> &middot; { product.os }</p>
							<p> &middot; { product.processer }</p>
							<p> &middot; { product.graphics }</p>

							<p className="price">${ product.price }</p>
							{/* <p className="price through">$249.99</p> */}
							<br/><br/>

							<button className="btn btn-primary btn-rounded" onClick={() => addToCart(product)}> <i className="ion-bag"></i> Add to cart</button>
						</div>
					</div>
					<br/> 
					<br/> 
					<br/>


					<div className="row">
						<div className="col-sm-7">
							<h1>{ product.name }</h1>
							<br/>

							<p>
								{ product.description }
							</p>
							<br/>

							<h2>Product specifications</h2>
							<br/>

								<div className="row specification">
									<div className="col-sm-6"> <label>Operating system</label> </div>
									<div className="col-sm-6"> <p>{ product.os }</p> </div>
								</div>
								
								<div className="row specification">
									<div className="col-sm-6"> <label>Processor</label> </div>
									<div className="col-sm-6"> <p>{ product.processer }</p> </div>
								</div>

								{/* <div className="row specification">
									<div className="col-sm-6"> <label>Processor technology</label> </div>
									<div className="col-sm-6"> <p>Intel Turbo Boost Technology</p> </div>
								</div> */}

								<div className="row specification">
									<div className="col-sm-6"> <label>Graphics</label> </div>
									<div className="col-sm-6"> <p>{ product.graphics }</p> </div>
								</div>

								<div className="row specification">
									<div className="col-sm-6"> <label>Memory</label> </div>
									<div className="col-sm-6"> <p>{ product.memory }</p> </div>
								</div>

								<div className="row specification">
									<div className="col-sm-6"> <label>Hard drive</label> </div>
									<div className="col-sm-6"> <p>{ product.hardDrive }</p> </div>
								</div>

								<div className="row specification">
									<div className="col-sm-6"> <label>Wireless</label> </div>
									<div className="col-sm-6"> <p>{ product.wireless }</p> </div>
								</div>

								{/* <div className="row specification">
									<div className="col-sm-6"> <label>Power supply</label> </div>
									<div className="col-sm-6"> <p>45 W AC power adapter</p> </div>
								</div> */}

								<div className="row specification">
									<div className="col-sm-6"> <label>Battery</label> </div>
									<div className="col-sm-6"> <p>{ product.battery }</p> </div>
								</div>
						</div>
						<div className="col-sm-5">
							<div className="comments">
								<h2 className="h3">What do you think? (#3)</h2>
								<br/>


								<div className="wrapper">
									<div className="content">
										<h3>Anne Hathaway</h3>
										<label>2 years ago</label>
										<p>
											Apple Music brings iTunes music streaming to the UK. But is it worth paying for? In our Apple Music review, we examine the service's features, UK pricing, audio quality and music library
										</p>


										<h3>Chris Hemsworth</h3>
										<label>Today</label>
										<p>
											Samsung's Galaxy S7 smartphone is getting serious hype. Here's what it does better than Apple's iPhone 6s.
										</p>


										<h3>Anne Hathaway</h3>
										<label>2 years ago</label>
										<p>
											Apple Music brings iTunes music streaming to the UK. But is it worth paying for? In our Apple Music review, we examine the service's features, UK pricing, audio quality and music library
										</p>
									</div>
								</div>
								<br/>

								<button className="btn btn-default btn-sm" data-toggle="modal" data-target="#Modal-Comment"> <i className="ion-chatbox-working"></i> Add comment </button>
							</div>
							<br/><br/>

							<div className="talk">
								<h2 className="h3">Do you have any questions?</h2>
								<p>Online chat with our manager</p>

								<button className="btn btn-default btn-sm"> <i className="ion-android-contact"></i> Lat's talk </button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br/><br/>
		</>
	)
}
