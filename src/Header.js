import React from "react";
import PropTypes from "prop-types";
import Menu from './Menu';
import {TCategory} from "./types";

const Header = (props) => {
	const {categories, category} = props;
	return (
		<nav>
			<div className="nav-wrapper">
				<a href="#/" className="brand-logo">
					Bazket
				</a>
				<Menu {... {categories, category}}></Menu>
			</div>
		</nav>
	);
};

Header.propTypes = {
	categories: PropTypes.arrayOf(TCategory),
	category: PropTypes.shape(TCategory)
};

export default Header