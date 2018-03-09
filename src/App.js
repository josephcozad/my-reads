import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks bookList={this.state.books} moveBook={this.moveBook}/>
        )} />

        <Route exact path='/search' render={() => (
          <SearchBooks bookList={this.state.books} moveBook={this.moveBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp
