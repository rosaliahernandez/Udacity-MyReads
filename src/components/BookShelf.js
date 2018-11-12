//Currently Reading, Want to Read, and Read shelves
//Makes component to render books from API to selected shelves
//imports React
import React, { Component } from 'react'

import Books from './Books'

class BookShelf extends Component {


//The code here allows the BooksAPI to to be sorted into different shelves which is carried out by the <select> code contained in Books.jsx
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