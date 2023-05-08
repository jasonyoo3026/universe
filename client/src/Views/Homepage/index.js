import React from "react";
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react';
import { useAuth0 } from "@auth0/auth0-react";

import { NewPost } from "../../components";
import PostCard from "../../components/Post/PostCard";
import FETCH_POST_QUERY from '../../utils/queries';

const PostFeed = () => {
    const { user } = useAuth0();
    const { loading, error, data } = useQuery(FETCH_POST_QUERY);

    const renderFeed = () => {
        if (loading) {
            return <div>Loading</div>;
        } else if (error) {
            return <div id="error">{error}</div>;
        } else {
            return (
                <main className="post-feed-container">
                    <Transition.Group>
                        {user && <NewPost />}
                        {data &&
                            data.getPosts.map((post) => (
                                <Grid.Column key={post.id} style={{ marginBottom: 30 }}>
                                    <PostCard post={post} />
                                </Grid.Column>
                            ))}
                    </Transition.Group>
                </main>
            );
        }
    };

    return <>{renderFeed()}</>;
};

export default PostFeed;