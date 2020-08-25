const { ApolloServer } = require("apollo-server");

///////////  https://www.youtube.com/watch?v=Sz64p1Udwjk /////////////

// The GraphQL schema

// A map of functions which return data for the schema.
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
