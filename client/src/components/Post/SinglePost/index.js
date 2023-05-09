// import React, { useState } from "react";
// import { useNavigate} from 'react-router-dom';
// import { Card, Image, Button, Label, Icon, Form } from 'semantic-ui-react';
// import moment from 'moment';
// import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import { useQuery, useMutation } from '@apollo/client';

// import { DeleteBtn, LikeBtn } from '../../Btn'
// import { ADD_COMMENT_MUTATION } from '../../../utils/mutations';
// import { FETCH_POST_QUERY } from '../../../utils/queries';

// const SinglePost = (props) => {
//     const { user } = useAuth0();
//     const { sub } = user;
//     const mongoId = sub.substring(6)

//     const postId = props.match.params.postId;

//     const navigate = useNavigate();

//     const [comment, setComment] = useState("");

//     const { data: getPost } = useQuery(FETCH_POST_QUERY, {
//         variables: {
//             postId
//         },
//     });

//     const [addComment, { error }] = useMutation(ADD_COMMENT_MUTATION, {
//         update() {
//             setComment("")
//         },
//         variables: {
//             userId: mongoId,
//             postId,
//             body: comment
//         }
//     })

//     let renderPosts;
//     if (!getPost) {
//         renderPosts = <p>Loading post..</p>;
//     } else {
//         const { id, body, createdAt, username, likeCount, likes, commentCount, comments, userAvatar } = getPost.getPost;

//         renderPosts = (
//             <main className="individual-post-container">
//                 <Button id="back-button" onClick={navigate.goBack}>Go Back</Button>
//                 <Card fluid color="red">
//                     <Card.Content>
//                         {userAvatar ? (<Image
//                             floated='right'
//                             size='big'
//                             src={userAvatar}
//                             avatar
//                         />) :
//                             (<Image
//                                 floated='right'
//                                 size='big'
//                                 src="png"
//                                 avatar
//                             />)
//                         }
//                         <Card.Header>{username}</Card.Header>
//                         <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
//                         <Card.Description>{body}</Card.Description>

//                     </Card.Content>
//                     <Card.Content extra>
//                         <LikeBtn user={user} post={{ id, likes, likeCount }} />

//                         <Button as='div' labelPosition='right'>
//                             <Button color='pink' basic>
//                                 <Icon name='comments' />
//                             </Button>
//                             <Label basic color='pink' pointing='left'>
//                                 {commentCount}
//                             </Label>
//                         </Button>
//                         {user && user.nickname === username && <DeleteBtn postId={id} mongoId={mongoId} />}
//                     </Card.Content>
//                 </Card>
//                 {user && <Card fluid>
//                     <Card.Content>
//                         <Card.Description><p>Leave a Comment</p></Card.Description>
//                         <Form>
//                             <Form.Field>
//                                 <Form.Input
//                                     placeholder="Share your thoughts 💬"
//                                     name="body"
//                                     value={comment}
//                                     onChange={e => setComment(e.target.value)}
//                                     autoComplete="off"
//                                     error={error ? true : false}
//                                 />
//                                 <Button type="submit" inverted color="orange" onClick={addComment}>
//                                     Post Comment
//                                 </Button>
//                             </Form.Field>
//                         </Form>
//                         {error && (
//                             <div className="ui error message" style={{ margin: "0" }}>
//                                 {error.graphQLErrors[0].message}
//                             </div>
//                         )}
//                     </Card.Content>
//                 </Card>}
//                 {comments.map(comment => (
//                     <Card fluid key={comment.id}>
//                         <Card.Content>
//                             {user && user.nickname === comment.username && <DeleteBtn postId={id} commentId={comment.id} />}
//                             <Card.Header>{comment.username}</Card.Header>
//                             <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
//                             <Card.Description>{comment.body}</Card.Description>
//                         </Card.Content>
//                     </Card>
//                 ))}
//             </main>
//         );
//     }
//     return renderPosts;
// }

// export default SinglePost;

import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { GET_POST } from "../utils/graphql";
import { FETCH_POST_QUERY } from '../../../utils/queries';

const SinglePost = () => {
  const { postId } = useParams();

  const { loading, error, data } = useQuery(FETCH_POST_QUERY, {
    variables: { postId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data?.getPost;

  if (!post) {
    return <p>No post found for ID {postId}</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default SinglePost;


