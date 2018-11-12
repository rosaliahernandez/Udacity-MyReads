// Display book image, title, author to page
//Coding help here from Jason Michael White

// import React
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf'
import * as BooksAPI from '.././BooksAPI'

class Search extends Component {

      state = {
            books: [], //empty array for books in API
      			query: ""  //empty query string
      };

      mergeSearchWithBookcase(searchResult) { //manages the string on the select menu
         searchResult.forEach(book => {
             let matches = this.props.books.filter(b => b.title === book.title);
             matches.length > 0 ? book.shelf = matches[0].shelf : book.shelf = 'none';
         });
         return searchResult;
      }

     updateQuery = (query) => {
         console.log('looking for books...');
         this.setState({ //The state of the query sting
             query: query
         });
         if (!query) {
             this.setState({
                 books: []
             });

             return;
         }

         BooksAPI.search(query).then(result => { //renders the books from the API
             result instanceof Array ? this.setState({books: this.mergeSearchWithBookcase(result)}) : this.setState({ books: [] });
         });
         //console.log(this.state.books);
     }
     handleChange = (e) => {
         const val = e.target.value;
         this.setState({ query: val });
         this.updateQuery(val);
     }

    render() {
            return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title or author"
                      value={this.state.query}
                      onChange={this.handleChange}
                />
              </div>
            </div>
                <BookShelf
                    books={this.state.books}
                    changeShelf={this.props.changeShelf}
                    updateBook={this.props.updateBooks}
                />
          </div>
        );
    }
}
export default Search