import React from "react";
import Menu from './Menu';

export default () => (
	<nav>
		<div className="nav-wrapper">
			<a href="#/" className="brand-logo">
				Bazket
			</a>
			<Menu></Menu>
		</div>
	</nav>
);