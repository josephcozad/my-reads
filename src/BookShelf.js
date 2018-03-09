import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {

  static propTypes = {
    bookList: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    shelfTitle: PropTypes.string // Optional
  }

  render() {
    const bookList = this.props.bookList;
    const shelfTitle = this.props.shelfTitle;

    // Create the bookshelf title header if one was supplied...
    let bookShelfTitleUI = '';
    if(shelfTitle != null) {
      bookShelfTitleUI = <h2 className="bookshelf-title">{shelfTitle}</h2>;
    }

    // Create the bookshelf if there are books to use...
    let bookShelfUI = '';
    if(bookList != null && bookList.length > 0) {
      bookShelfUI =
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList.map((book) => (
            <Book key={book.id} book={book} moveBook={this.props.moveBook}/>
          ))}
        </ol>
      </div>
    }

    return(
      <div className="bookshelf">
        {bookShelfTitleUI}
        {bookShelfUI}
      </div>
    );
  }
}

export default BookShelf;
