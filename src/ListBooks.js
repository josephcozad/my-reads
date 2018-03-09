import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class ListBooks extends Component {

  static propTypes = {
    bookList: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  render() {

    const bookList = this.props.bookList;
    const currentList = bookList.filter((book) => book.shelf === 'currentlyReading');
    const wannaReadList = bookList.filter((book) => book.shelf === 'wantToRead');
    const readList = bookList.filter((book) => book.shelf === 'read');

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelfTitle="Currently Reading" bookList={currentList} moveBook={this.props.moveBook}/>
            <BookShelf shelfTitle="Want To Read" bookList={wannaReadList} moveBook={this.props.moveBook} />
            <BookShelf shelfTitle="Read" bookList={readList} moveBook={this.props.moveBook} />
          </div>
        </div>
        <div className='open-search'>
          <Link to='search' >Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
