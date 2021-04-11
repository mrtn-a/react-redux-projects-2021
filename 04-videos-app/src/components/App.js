import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	// initialise the state
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit("dogs");
	}

	onTermSubmit = async (term) => {
		// console.log(term);
		const response = await youtube.get("search/", {
			params: {
				q: term, // from YT doc
			},
		});

		console.log(response); // response has tons of data, we check for what we need
		// -> response.data.items
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0],
		}); // selecting the first video
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						{/* use 11 out of the default 16 columns */}
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
