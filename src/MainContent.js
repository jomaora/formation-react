import React from "react";
import ProductList from './ProductList';
import Cart from './Cart';

export default () => (
	<main>
		<div className="container">
			<ProductList></ProductList>
		</div>
		{/* Modal Structure */}
		<Cart/>
	</main>
);