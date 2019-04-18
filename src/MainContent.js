import React from "react";
import PropTypes from "prop-types";
import ProductList from './ProductList';
import Cart from './Cart';

const MainContent = ({ children }) => (
	<main>
		<div className="container">
			{children}
		</div>
		{/* Modal Structure */}
		<Cart/>
	</main>
);

MainContent.propTypes = {
	children: PropTypes.element.isRequired
}

export default MainContent;