import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import {TProduct} from "./types";

const ProductList = (props) => {
	const {products} = props;

	if (!products.length) {
		return (<p>Empty list</p>)
	}

	return (
		<div className="row">
			{
				products.map(product => (
					<div className="col s3" key={product.id}>
						<Product product={product}/>
					</div>)
				)
			}
		</div>
	);
};

ProductList.propTypes = {
	products: PropTypes.arrayOf(TProduct)
};

export default ProductList;