// Helpers from graphql-js
const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');

// Starting point for queries
const rootGraphQlObjectType = new GraphQLObjectType({
    name: 'root',
    fields: {
        message: {
            type: GraphQLString,
            resolve: () => 'Hello World'
        }
    }
});

const schema = new GraphQLSchema({
    query: rootGraphQlObjectType
});

module.exports = schema;