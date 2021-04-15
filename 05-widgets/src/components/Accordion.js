import React, { useState } from "react";

const Accordion = ({ items }) => {
	// initialize the state
	const [activeIndex, setActiveIndex] = useState(null);
	// set state
	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		// check if index of the item that we are currently iterating over
		// is equal to the activeIndex piece of state
		const active = index === activeIndex ? "active" : "";

		return (
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					{/* arrow function onTitleClick*/}
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
