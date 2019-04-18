import PropTypes from "prop-types";

export const TProduct = PropTypes.shape({
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
});

export const TCategory = PropTypes.shape({
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
});