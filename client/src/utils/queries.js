import { gql } from '@apollo/client';

export const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      userAvatar
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export const GET_TOP_KEYWORDS = gql`
  query GetTopKeywords {
    getTopKeywords {
      keyword
      count
    }
  }
`;
