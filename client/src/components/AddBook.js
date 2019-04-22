import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery, addBookMutation } from '../queries'

class AddBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      genre: "",
      authorId: ""
    }
  }
  displayAuthors = () => {
    const data = this.props.getAuthorsQuery

    if (data.loading === true) {
      return (<option disabled>Loading authors...</option>)
    }

    return data.authors.map((author, index) => (
      <option key={index} value={author.id}>{author.name}</option>
    ))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, genre, authorId } = this.state
    this.props.addBookMutation({
      variables: {
        name: name,
        genre: genre,
        authorId: authorId
      }
    })
  }

  render() {
    return (
      <form
        id="add-book"
        onSubmit={this.handleSubmit}
      >
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select
            onChange={(e) => this.setState({ authorId: e.target.value })}
          >
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
  )(AddBook)

