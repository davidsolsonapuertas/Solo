const { gql } = require('apollo-server');

const typeDefs = gql`
  type Trip {
    id: ID!
    destination: String!
    picture: String
    fromDate: String
    toDate: String
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getTrips: [Trip]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;

module.exports = typeDefs;
