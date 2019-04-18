import React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */

export default () => (<a
	href="#"
	onClick={() =>
		document.querySelector('.cart').classList.toggle('open')
	}
>
	<i className="material-icons left">shopping_cart</i> (3)
</a>);