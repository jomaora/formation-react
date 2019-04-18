import React from "react";
import CartButton from './CartButton'

export default () => (<ul id="nav-mobile" className="right hide-on-med-and-down">
	<li>
		<a href="#/kittens">Kittens</a>
	</li>
	<li>
		<a href="#/bears">Bears</a>
	</li>
	<li>
		<a href="#/doggos">Doggos</a>
	</li>
	<li>
		<CartButton/>
	</li>
</ul>);