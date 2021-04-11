import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
	// initialise the state
	state = { videos: [] };

	onTermSubmit = async (term) => {
		// console.log(term);
		const response = await youtube.get("search/", {
			params: {
				q: term, // from YT doc
			},
		});

		console.log(response); // response has tons of data, we check for what we need
		// -> response.data.items
		this.setState({ videos: response.data.items });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				{this.state.videos.length} videos found
			</div>
		);
	}
}

export default App;
