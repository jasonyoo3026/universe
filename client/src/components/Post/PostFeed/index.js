import React from "react";
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react';
import { useAuth0 } from "@auth0/auth0-react";
import { CreatePost, Loading, Posts } from "../../components";
import { FETCH_POSTS_QUERY } from '../../graphql';

const PostFeed = () => {
    const { user } = useAuth0();
    const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className="post-feed-container">
                    <Transition.Group>
                        {user && <CreatePost />}
                        {data && data.getPosts.map((post) => (
                            <Grid.Column key={post.id} style={{ marginBottom: 25 }}>
                                <Posts post={post} />
                            </Grid.Column>
                        ))}
                    </Transition.Group>
                </main>
            )}
            {error && <div id="error">{error}</div>}
        </>
    );
};

export default PostFeed;
