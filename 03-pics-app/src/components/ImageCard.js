import React from "react";

class ImageCard extends React.Component {
	render() {
		// we destructor out the properties we care about from the image
		const { description, urls } = this.props.image;
		return (
			<div>
				<img alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
