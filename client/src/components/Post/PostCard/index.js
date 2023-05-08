import React from 'react';
import { Card, Image, Button, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import { DeleteBtn, LikeBtn } from '../../Btn';

const PostCard = ({ post: { content, createdAt, postId, author, numLikes, numComments, likedBy, authorAvatar } }) => {
    const { user } = useAuth0();
    const { sub } = user;
    const mongoId = sub.substring(6)

    return (
        <>
            <Card fluid color="purple">
                <Card.Content>
                    {authorAvatar ? (<Image
                        floated='right'
                        size='big'
                        src={authorAvatar}
                        avatar
                    />) :
                        (<Image
                            floated='right'
                            size='big'
                            src="🎓"
                            avatar
                        />)
                    }
                    < Card.Header > {author}</Card.Header>
                    <Card.Meta as={Link} to={`/posts/${postId}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                    <Card.Description>{content}</Card.Description>

                </Card.Content>
                <Card.Content extra>
                    <LikeBtn user={user} post={{ postId, likedBy, numLikes }} />
                    <Link to={`/posts/${postId}`}>
                        <Button as='div' labelPosition='right'>
                            <Button color='yellow' basic>
                                <Icon name='comments' />
                            </Button>
                            <Label basic color='yellow' pointing='left'>
                                {numComments}
                            </Label>
                        </Button>
                    </Link>
                    {user && user.nickname === author && <DeleteBtn postId={postId} mongoId={mongoId} />}
                </Card.Content>
            </Card>
        </>
    )
}

export default PostCard;
