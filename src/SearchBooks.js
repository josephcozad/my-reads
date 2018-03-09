import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class SearchBooks extends Component {

  static propTypes = {
    bookList: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
		this.setState({query: query});
    BooksAPI.search(query).then((books) => {
      if(Array.isArray(books)) {
        this.setState({ books: books });
      }
      else {
        this.setState({ books: [] });
      }
     });
	};

  render() {
    const query = this.state.query;
    let foundBooks = this.state.books;
    const library = this.props.bookList;

    library.forEach((libraryBook) => {
      let index = foundBooks.findIndex((book) => book.id === libraryBook.id);
      if(index > -1) {
        foundBooks[index] = libraryBook;
        console.log('  B['+foundBooks[index].title+'] -> '+foundBooks[index].shelf);
      }
    });

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf bookList={foundBooks} moveBook={this.props.moveBook} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
