import React, { useState } from "react";
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { useAuth0 } from "@auth0/auth0-react";

import { FETCH_POST_QUERY } from '../../../utils/queries';
import { CREATE_POST_MUTATION } from '../../../utils/mutations';

const NewPost = () => {
    const { user } = useAuth0();
    const { sub } = user;
    const mongoId = sub.substring(6);
    const userAvatar = user.picture;

    const [postContent, setPostContent] = useState({ body: "", userId: mongoId, userAvatar: userAvatar });

    const handleInputChange = (e) => {
        setPostContent(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitNewPost();
    };

    const [submitNewPost, { errorMsg }] = useMutation(CREATE_POST_MUTATION, {
        variables: postContent,
        update(proxy, result) {
            const postData = proxy.readQuery({
                query: FETCH_POST_QUERY
            });
            let updatedData = [...postData.getPosts];
            updatedData = [result.data.createPost, ...updatedData];
            proxy.writeQuery({
                query: FETCH_POST_QUERY,
                data: {
                    ...postData,
                    getPosts: {
                        updatedData,
                    },
                },
            });
            postContent.body = '';
        }
    })

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h4>What's on your mind?</h4>
                <Form.Field>
                    <Form.Input
                        placeholder="Share your experience"
                        name="body"
                        autoComplete="off"
                        value={postContent.body}
                        onChange={handleInputChange}
                        error={errorMsg ? true : false}
                    />
                    <Button type="submit" inverted color="purple">
                        Publish
                    </Button>
                </Form.Field>
            </Form>

            {errorMsg && (
                <div className="ui error message" style={{ marginBottom: "1rem", marginTop: "0" }}>
                    {errorMsg.graphQLErrors[0].message}
                </div>
            )}
        </>
    );
};

export default NewPost;
