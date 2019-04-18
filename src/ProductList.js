import React, {useState, useEffect, useRef} from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import {TProduct} from "./types";
import {withRouter} from "react-router-dom";
import {listCategoryProducts} from './api';

const ProductList = (props) => {
	const {products, loading} = props;

	if (loading) {
		return (<p>Loading</p>)
	}

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
	products: PropTypes.arrayOf(TProduct),
	loading: PropTypes.bool
};

const ConnectedProductList = ({ match }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const mounted = useRef(false)
	useEffect(() => {
		mounted.current = true
		return () => (mounted.current = false)
	}, [])

	// hook qui remplace componentDidMount
	useEffect(() => {
		setLoading(true);
		listCategoryProducts(match.params.category)
			.then(list => {
				if (mounted.current) {
					setLoading(false);
					setProducts(list)
				}
			});

		return () => {
			if (mounted.current) {
				setProducts([])
				setLoading(true);
			}
		}
	}, [match.params.category]);	// on rajoute ce param à useeffet pour qu'il sache ce qui a changé !!

	return <ProductList products={products} loading={loading}/>
};

export default withRouter(ConnectedProductList)