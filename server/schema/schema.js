const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// NOTE: `fields` here is a function which allows `AuthorType` to be used before it's created
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

// NOTE: `fields` here is an object
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
