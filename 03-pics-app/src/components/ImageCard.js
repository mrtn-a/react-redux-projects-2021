import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 }; // initialize the state

		this.imageRef = React.createRef(); // create the Ref
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpansGrid); // now the image is loaded
	}

	// arrow function to avoid  'this = undefined'
	setSpansGrid = () => {
		const height = this.imageRef.current.clientHeight;

		const spans = Math.ceil(height / 10 + 1); // row height (10px) + 1 extra; Math.ceil to round the value
		this.setState({ spans }); // set the spans amount
	};

	render() {
		const { description, urls } = this.props.image;

		return (
			// assigning spans to the style of the div to get the desirable size
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}

export default ImageCard;
