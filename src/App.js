import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Search from './components/Search';
import BookCase from './components/BookCase';
import * as BooksAPI from './BooksAPI'

class App extends React.Component {

  state = { 
      books: []
    }

    componentDidMount() { 
      BooksAPI.getAll().then(books => {
        this.setState ({ books:books });
        console.log (books);
      });
    }

    updateBooks = (book, shelf) => { //function for switching shelves 
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
