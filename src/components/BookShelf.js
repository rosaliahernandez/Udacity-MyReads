import React, { Component } from 'react'

import Books from './Books'

class BookShelf extends Component {


  render() {
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book, key) =>
                  <Books
                    updateBook={this.props.updateBook}
                    book={book}
                    key={key}
                  />
                )}
              </ol>
          </div>
        </div>
      );
  }
}
export default BookShelf
