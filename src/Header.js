import React from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import Menu from './Menu';
import {TCategory} from "./types";

const Header = (props) => {
	const {categories, category} = props;
	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">
					Bazket
				</Link>
				<Menu categories={categories} category={category}></Menu>
			</div>
		</nav>
	);
};

Header.propTypes = {
	categories: PropTypes.arrayOf(TCategory),
	category: PropTypes.string.isRequired
};

export default Header