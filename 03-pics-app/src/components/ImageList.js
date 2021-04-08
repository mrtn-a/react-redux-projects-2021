import React from "react";

// functional component
const ImageList = (props) => {
	const images = props.images.map(({ description, id, urls }) => {
		return <img key={id} alt={description} src={urls.regular} />;
	});
	return <div>{images}</div>;
};

export default ImageList;
