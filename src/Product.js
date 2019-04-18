import React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */

export default (props) => {
	const {product} = props;
	return (
		<div className="col s3">
			<div className="card">
				<div className="card-image">
					<img src={product.image} alt="" />
					<a className="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={() => {console.log('TODO ADD', product.id)}}>
						<i className="material-icons">add_shopping_cart</i>
					</a>
				</div>
				<div className="card-content">
					<span className="card-title">{product.title} ({product.price} €)</span>
				</div>
			</div>
		</div>
	);
}