/*

// Book#index
{
  books {
    name
  }
}

// Book#show
{
	book(id: 1) {
    name
    genre
    id
  }
}

{
  book(id: "5cb0b86f25db32053bdc7a99") {
    name
    id
    genre
  }
}

// three levels of nesting: book -> author -> books
{
  book(id: "5cb0b86f25db32053bdc7a99") {
    name
    genre
    author {
      name
      age
      books {
        name
        genre
      }
    }
  }
}

// Book#show with association
{
	book(id: 2) {
    name
    genre
    author {
      name
      age
    }
  }
}

// Author#index with association
{
  authors {
    name
    books {
      name
      genre
    }
  }
}

// Author#show
{
	author(id: 2) {
    name
    age
    id
  }
}

// Author#show with association
{
  author(id: 2) {
    name
    books {
      name
      genre
    }
  }
}

// mutations
mutation {
  addAuthor(name: "Chris", age: 38) {
  	name
  }
}

mutation {
	addBook(name: "Radical Action", genre: "Action", authorId: "5cb78e31e8a518770eb30f38") {
    name
    genre
  }
}

// check mutations
{
  books {
    name
    author {
      name
    }
  }
}

*/
