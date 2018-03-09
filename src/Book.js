import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoveToOptions from './MoveToOptions';
import noImage from './imageUnavailable.jpg'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  moveBook = (shelf) => {
     this.props.moveBook(this.props.book, shelf);
  }

  render() {
    const book = this.props.book;
    const shelf = book.shelf != null ? book.shelf : 'none';

    let bookImageUI = noImage;
    if(book.imageLinks != null) {
      bookImageUI = book.imageLinks.thumbnail;
    }

    let authors = 'Unknown Author';
    if(book.authors != null) {
      authors = book.authors.join(', ');
    }

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${bookImageUI})` }}/>
            <MoveToOptions shelf={shelf} moveToShelf={this.moveBook} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
