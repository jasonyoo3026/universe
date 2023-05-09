const { gql } = require('apollo-server');

module.exports = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        userAvatar: String
        comments: [Comment]!
        likes: [Like]!
        likeCount: Int!
        commentCount: Int!
    }
    type Comment {
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type Like {
        id: ID!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        username: String!
        email: String!
        university: String!
        createdAt: String!
    }
    type SearchHistory {
        id: ID!
        keyword: String!
        createdAt: String!
    }
    type TopKeyword {
        keyword: String!
        count: Int!
    }

    input RegisterInput {
        username: String!
        email: String!
        password: String!
        university: String!
    }
    
    input LoginInput {
        email: String!
        password: String!
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
        getTopKeywords: [TopKeyword!]!
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(loginInput: LoginInput): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(postId: ID!, body: String!): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post!
        saveSearch(keyword: String!): SearchHistory!
    }
`;
