import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

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
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList)
