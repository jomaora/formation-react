import React from "react";
import PropTypes from "prop-types";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Product = (props) => {
	const {product} = props;
	const {id, image, title, price} = product;
	return (
		<div className="card">
			<div className="card-image">
				<img src={image} alt="" />
				<a className="btn-floating btn-large halfway-fab waves-effect waves-light red" onClick={() => {console.log('TODO ADD', id)}}>
					<i className="material-icons">add_shopping_cart</i>
				</a>
			</div>
			<div className="card-content">
				<span className="card-title">{title} ({price} €)</span>
			</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	}).isRequired
};

export default Product;