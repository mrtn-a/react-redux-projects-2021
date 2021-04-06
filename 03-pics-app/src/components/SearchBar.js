import React from "react";

// class based component
class SearchBar extends React.Component {
	// initialise a state object
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault(); // so the form does not refresh the page

		this.props.onSubmit(this.state.term); // reference to the function that got passed
		// we add this as this is a class component
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
