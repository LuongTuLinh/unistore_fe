import React from 'react'
import {Link} from 'react-router-dom'

export default function ProductCard({data, addToCart}) {
	return (
		<>
			<div className="col-sm-6 col-md-4 product">
				<a href="#favorites" className="favorites" data-favorite="inactive"><i className="ion-ios-heart-outline"></i></a>
				<a href="./"><img src={data.image} alt="HP Chromebook 11"/></a>

				<div className="content">
					<h1 className="h4">{data.name}</h1>
					<p className="price">${data.price}</p>
					<label>{data.catalog}</label>
					<Link to={"/details?id="+data.productId} className="btn btn-link">Details</Link>
					{/* <a href={"/details?id="+data.productId} className="btn btn-link"> Details</a> */}
					<button className="btn btn-primary btn-rounded btn-sm" onClick={() => addToCart(data)}> 
						<i className="ion-bag"></i> Add to cart
					</button>
				</div>
			</div>
		</>
	)
}
