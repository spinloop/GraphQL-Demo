import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries'
import BookDetails from './BookDetails'

class BookList extends Component {
  displayBooks = () => {
    const { data } = this.props

    if (data.loading === true) {
      return (<div>Loading books...</div>)
    }

    return data.books.map((book, index) => {
      return <li key={index}>{book.name}</li>
    })
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList)
