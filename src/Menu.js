import React from "react";
import {Link, withRouter} from 'react-router-dom';
import CartButton from './CartButton'
import PropTypes from "prop-types";
import {TCategory} from "./types";

const Menu = (props) => {
	const {categories, match} = props;
	console.log('Menu', match)

	return (
		<ul id="nav-mobile" className="right hide-on-med-and-down">
			{categories.map(c => {
				const isActive = (c.id === match.params.category) ? 'active' : '';
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
	match: PropTypes.shape({
		params: PropTypes.shape({
			category: PropTypes.string
		}).isRequired
	}).isRequired,
	categories: PropTypes.arrayOf(TCategory)
};

export default withRouter(Menu);