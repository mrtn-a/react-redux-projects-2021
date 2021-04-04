import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	constructor(props) {
		super(props);

		// THIS IS THE ONLY TIME we do direct assignment to this.state
		this.state = { lat: null, errorMessage: "" }; // state object that will contain some different pieces of data and properties that are important for us
		// lat -> latutude of null (as we don't know what it is yet)

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				//  we call setState!!
				this.setState({ lat: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	// React says we have to define render!!
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}

		// if no error and no latitude
		return <div>Loading!</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
