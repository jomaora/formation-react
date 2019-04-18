import React from "react";

export default (props) => {
	// comme il vient de Route et il est appelé via component il reçoit
	// directement history, location, match
	console.log('Props Home', props);
	return (
		<h1>Bienvenue</h1>
	);
}