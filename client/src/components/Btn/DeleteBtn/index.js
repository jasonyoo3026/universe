import React from "react";
import { useMutation } from '@apollo/client';
import { Button } from 'semantic-ui-react';

import { FETCH_POST_QUERY } from '../../../utils/queries';
import { DELETE_POST_MUTATION, DELETE_COMMENT_MUTATION } from '../../../utils/mutations';

const DeleteBtn = ({ postId, mongoId, commentId }) => {
    const userId = mongoId;
    const selectedMutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;

    const [handleDelete] = useMutation(selectedMutation, {
        variables: {
            postId,
            userId,
            commentId
        },
        update(proxy) {
            if (!commentId) {
                const postData = proxy.readQuery({
                    query: FETCH_POST_QUERY
                });
                let updatedData = [...postData.getPosts];
                updatedData = [postData.getPosts.filter((p) => p.id !== postId)];
                proxy.writeQuery({
                    query: FETCH_POST_QUERY,
                    data: {
                        ...postData,
                        getPosts: {
                            updatedData,
                        },
                    },
                })
            }
        }
    });

    return (
        <Button
            floated="right"
            color="red"
            onClick={handleDelete}>
            Remove
        </Button>
    );
};

export default DeleteBtn;
