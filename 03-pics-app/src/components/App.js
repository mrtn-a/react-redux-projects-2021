import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
// class component

class App extends React.Component {
	onSearchSubmit(term) {
		console.log(term);
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				{/* we are passing the onSearchSubmit function as a props to the child component */}
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
