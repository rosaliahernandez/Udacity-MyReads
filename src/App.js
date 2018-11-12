//import React libraries
import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Search from './components/Search';
import BookCase from './components/BookCase';
import * as BooksAPI from './BooksAPI'

//App.js holds the components which are the two pages in the app. The main BookCase and the search page
class App extends React.Component {

  state = { //creates empty array in which to sort the books
      books: []
    }

    componentDidMount() { //instantiates network request for BooksAPI
      BooksAPI.getAll().then(books => {
        this.setState ({ books:books });
        console.log (books);
      });
    }

    updateBooks = (book, shelf) => { //function for switching shelves passes down to BookCase and Search
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
    }

  render() {
    return (
      <div>
        <Route exact path="/" render={(() => (<BookCase updateBooks={this.updateBooks} books={this.state.books} />))}/>
        <Route exact path="/Search" render={(() => (<Search updateBooks={this.updateBooks} books={this.state.books} />))}/>
      </div>
    );
  }
}

export default App