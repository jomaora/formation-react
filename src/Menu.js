import React from "react";
import CartButton from './CartButton'
import PropTypes from "prop-types";
import {TCategory} from "./types";

const Menu = (props) => {
	const {categories, category} = props;
	return (
		<ul id="nav-mobile" className="right hide-on-med-and-down">
			{categories.map(c => {
				const className = (c.id === category.id) ? 'isActive' : null;
				return (
					<li>
						<a href={`#/${c.id}`}>{c.label}</a>
					</li>
				);
			})}
			<li>
				<CartButton/>
			</li>
		</ul>
	);
};

Menu.propTypes = {
	categories: PropTypes.arrayOf(TCategory),
	category: PropTypes.shape(TCategory)
};

export default Menu;