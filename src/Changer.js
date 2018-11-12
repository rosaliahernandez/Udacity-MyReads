import React, { Component } from 'react';

class Changer extends Component {
	state = {
		shelfSelection: this.props.book.shelf || "none"
	}
	
	componentWillReceiveProps = (props) => {
		this.props = props;
		this.setState({shelfSelection: this.props.book.shelf});
	}
	
	onChangeShelves = (book, shelf) => {
		this.setState({shelfSelection: shelf});
		this.props.onChangeShelves(book, shelf);
	}
	
	render() {
		return (
			<div className="book-shelf-changer">
				<select 
					value={this.state.shelfSelection} 
					//Take the element that is clicked and change the shelves
					onChange={(e) => this.onChangeShelves(this.props.book, e.target.value)}
				>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default Changer;