import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
	//objects
	summer: {
		textToDisplay: "Let's hit the beach",
		iconName: "sun",
	},
	winter: {
		textToDisplay: "Brrr, it is cold!",
		iconName: "snowflake",
	},
};

// determine what the season is
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		// summer months
		return lat > 0 ? "summer" : "winter";
		// if lat = Northern Hemisphere -> true, then we return summer, if not, we return winter
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

const SeasonDisplay = (props) => {
	console.log(props.lat);
	const season = getSeason(props.lat, new Date().getMonth());
	console.log(season);

	const { textToDisplay, iconName } = seasonConfig[season]; // object with {text, iconName}
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{textToDisplay}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
