import axios from "axios";

const KEY = "AIzaSyATmlJsO1IedJ5a8cBIUd4vyJNMfvQpT0Q";

// pre configured instance of axios
export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResult: 5,
		key: KEY,
	},
});
