import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author="Sam"
				timeAgo="Today at 4:45PM"
				commentContent="Nice post!"
				avatar={faker.image.avatar()}
			/>
			<CommentDetail
				author="Alex"
				timeAgo="Yesterday at 2:20M"
				commentContent="Good job bro, I like it!"
				avatar={faker.image.avatar()}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
