import React from "react";
import VideoItem from "./VideoItem";

// functional component
const VideoList = ({ videos }) => {
	// videos
	const renderedList = videos.map((video) => {
		return <VideoItem video={video} />;
	});

	return <div>{renderedList}</div>;
};

export default VideoList;
