import React from "react";
import {Link} from 'react-router-dom';
import CartButton from './CartButton'
import PropTypes from "prop-types";
import {TCategory} from "./types";

const Menu = (props) => {
	const {categories, category} = props;
	return (
		<ul id="nav-mobile" className="right hide-on-med-and-down">
			{categories.map(c => {
				const isActive = (c.id === category) ? 'active' : '';
				return (
					<li className={isActive} key={c.id}>
						<Link to={`/${c.id}`}>{c.label}</Link>
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
	category: PropTypes.string.isRequired
};

export default Menu;