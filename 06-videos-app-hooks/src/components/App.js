import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  // initialise the states
  const [selectedVideo, setSelectedVideo] = useState(null);
  // add default search term (dogs)
  const [videos, search] = useVideos("dogs");

  // second argument -> run the function anytime we get a new list of videos
  useEffect(() => {
    // selecting the first video
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          {/* use 11 out of the default 16 columns */}
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
