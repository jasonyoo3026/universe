import React from "react";
import { gql, useMutation } from '@apollo/client';
import { Button } from 'semantic-ui-react';

import { FETCH_POSTS_QUERY } from '../../graphql';
import { DELETE_POST_MUTATION, DELETE_COMMENT_MUTATION } from '../../utils/mutations';

const DeleteBtn = ({ postId, mongoId, commentId }) => {
    const userId = mongoId;

    const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;

    const [deleteOnClick] = useMutation(mutation, {
        variables: {
            postId,
            userId,
            commentId
        },
        update(proxy) {
            if (!commentId) {
                const data = proxy.readQuery({
                    query: FETCH_POSTS_QUERY
                });
                let newData = [...data.getPosts];
                newData = [data.getPosts.filter((p) => p.id !== postId)];
                proxy.writeQuery({
                    query: FETCH_POSTS_QUERY,
                    data: {
                        ...data,
                        getPosts: {
                            newData,
                        },
                    },
                })
            }
        }
    });

    return (
        <Button
            floated="right"
            onClick={deleteOnClick}>
            Delete
        </Button>
    );
};

export default DeleteBtn;
