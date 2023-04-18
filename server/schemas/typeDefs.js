const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    yellow: Boolean
  }

  type Twit {
    _id: ID
    userId: ID
    twitText: String
    thumbsUp: Int
    thumbsDown: Int
    retwitCounter: Int
    createdAt: Date
    updatedAt: Date
  }

  type Comment {
    _id: ID
    twitId: ID
    userId: ID
    commentText: String
    thumbsUp: Int
    thumbsDown: Int
    createdAt: Date
    updatedAt: Date
  }

  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
