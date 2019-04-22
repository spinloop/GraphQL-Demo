import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getAuthorsQuery } from '../queries'

class AddBook extends Component {
  displayAuthors = () => {
    const { data } = this.props

    if (data.loading === true) {
      return (<option disabled>Loading authors...</option>)
    }

    return data.authors.map((author, index) => (
      <option key={index} value={author.id}>{author.name}</option>
    ))
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default graphql(getAuthorsQuery)(AddBook)

