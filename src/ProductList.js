import React, {useState, useEffect} from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import {TProduct} from "./types";
import {withRouter} from "react-router-dom";
import {listCategoryProducts} from './api';

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

const ConnectedProductList = ({ match }) => {
	const [products, setProducts] = useState([]);

	// TODO get products from category match.params.category
	// hook qui remplace componentDidMount
	useEffect(() => {
		setProducts([]);
		listCategoryProducts(match.params.category).then(list => setProducts(list));

		return () => {};
	}, [match.params.category]);	// on rajoute ce param à useeffet pour qu'il sache ce qui a changé !!

	return <ProductList products={products} />
};

export default withRouter(ConnectedProductList)