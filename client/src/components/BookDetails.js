import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries'

class BookDetails extends Component {
  render() {
    console.log(this.props.bookId)
    return (
      <div id="book-details">
        <p>Book details here...</p>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookDetails)
