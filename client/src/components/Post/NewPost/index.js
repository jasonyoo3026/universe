import React, { useState } from "react";
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { useAuth0 } from "@auth0/auth0-react";

import { FETCH_POSTS_QUERY } from '../../utils/queries';
import { CREATE_POST_MUTATION } from '../../utils/mutations';

const NewPost = () => {
    const { user } = useAuth0();
    const { sub } = user;
    const mongoId = sub.substring(6);
    const userAvatar = user.picture;

    const [values, setValues] = useState({ body: "", userId: mongoId, userAvatar: userAvatar });

    const onChange = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submitPostData();
    };

    const [submitPostData, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            });
            let newData = [...data.getPosts];
            newData = [result.data.createPost, ...newData];
            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: {
                    ...data,
                    getPosts: {
                        newData,
                    },
                },
            });
            values.body = '';
        }
    })

    return (
        <>
            <Form onSubmit={onSubmit}>
                <h4>Share your thoughts!</h4>
                <Form.Field>
                    <Form.Input
                        placeholder="What have you been watching? 🎬"
                        name="body"
                        autoComplete="off"
                        value={values.body}
                        onChange={onChange}
                        error={error ? true : false}
                    />
                    <Button type="submit" inverted color="orange">
                        Post!
                    </Button>
                </Form.Field>
            </Form>

            {error && (
                <div className="ui error message" style={{ marginBottom: "1rem", marginTop: "0" }}>
                    {error.graphQLErrors[0].message}
                </div>
            )}
        </>
    );
};

export default NewPost;
