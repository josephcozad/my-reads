import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoveToOptions extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired
  }

  state = {
    optionValue:'none'
  }

  handleChange = (event) => {
      this.setState({optionValue: event.target.value});
      this.props.moveToShelf(event.target.value);
  }

  render() {
    const {shelf} = this.props;

    return(
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.handleChange}>
          <option value="xxxx" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default MoveToOptions;
