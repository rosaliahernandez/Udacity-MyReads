//Component to get API data about individual books

import React, { Component } from 'react'

class Book extends Component {


render() { //fixes search bug so books without images appear in search
  let coverThumb = this.props.book.imageLinks ? //Ternary to allow books without images to render
			this.props.book.imageLinks.thumbnail : ''

  //The following variable is attributed to Susan Pommer
  let authorsPrintOut = this.props.book.authors ?
      this.props.book.authors.join(", ") : ''

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
              `url("${coverThumb}")`
          }}></div>
          <div className = 'book-shelf-changer'>
            <select
              value={this.props.book.shelf || "none"}
              onChange = //allows for drop down menu to be changed then recorded when updateBook is invoked
              {(e) => { this.props.updateBook(this.props.book, e.target.value) }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authorsPrintOut}</div>
      </div>
    </li>
    )
  }
}
export default Book;