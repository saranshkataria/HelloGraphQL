// Helpers from graphql-js
const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');

// Starting point for queries
const rootGraphQlObjectType = new GraphQLObjectType({
    name: 'root',
    fields: {
        message: {
            type: GraphQLString,
            resolve: () => 'Hello World',
            description: 'Hello World *GraphQL* style'
        }
    }
});

const schema = new GraphQLSchema({
    query: rootGraphQlObjectType
});

module.exports = schema;