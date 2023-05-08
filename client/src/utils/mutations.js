import { gql } from '@apollo/client';

// Delete mutations starts
export const DELETE_POST_MUTATION = gql`
  mutation deletePost($postId: String!, $userId: String!){
    deletePost(postId: $postId, userId: $userId)
  }
`;

export const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: String!, $commentId: String!){
    deleteComment(postId: $postId, commentId: $commentId){
        id
        comments {
            id username body createdAt 
        }
        commentCount
    }
  }
`;

// Add comment
export const ADD_COMMENT_MUTATION = gql`
    mutation($userId: ID!, $postId: String!, $body: String!) {
        createComment(userId: $userId, postId: $postId, body: $body) {
            id 
            comments {
                id body createdAt username
            }
            commentCount
        }
    }
`;

// create mutation
export const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!, $userId: ID!, $userAvatar: String!) {
    createPost(body: $body, userId: $userId, userAvatar: $userAvatar) {
      id
      body
      createdAt
      username
      userAvatar
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

// likebutton starts
export const LIKE_POST_MUTATION = gql`
  mutation likePost($userId: ID!, $postId: ID!) {
    likePost(userId: $userId, postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;
