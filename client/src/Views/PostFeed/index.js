import React from "react";
import { useQuery } from '@apollo/client';
import { Grid, Transition } from 'semantic-ui-react';
import { useAuth0 } from "@auth0/auth0-react";
import { NewPost, PostCard } from "../../components/Post";
import Loading from "../../components/Loading"
// import { PostCard } from "../../components/Post/PostCard";
import { FETCH_POST_QUERY } from '../../utils/queries';

const PostFeed = () => {
    const { user } = useAuth0();
    const { loading, error, data } = useQuery(FETCH_POST_QUERY);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className="post-feed-container">
                    <Transition.Group>
                        {user && <NewPost />}
                        {data && data.getPostCard.map((post) => (
                            <Grid.Column key={post.id} style={{ marginBottom: 25 }}>
                                <PostCard post={post} />
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
