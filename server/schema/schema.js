const graphql = require('graphql')
const Book = require('../models/book')
const Author = require('../models/author')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql

// NOTE: `fields` here is a function which allows `AuthorType` to be used before it's created
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // NOTE: don't forget return statement
        return Author.findById(parent.authorId)
      }
    }
  })
})

// NOTE: `fields` here is a function
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: { type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({ authorId: parent.id })
      }
    }
  })
})

// NOTE: `fields` here is an object
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({})
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id)
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({})
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id)
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        })

        return author.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

/*
sample queries:

```
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

```
*/
