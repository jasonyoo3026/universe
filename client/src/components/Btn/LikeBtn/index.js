import React, { useEffect, useState } from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { LIKE_POST_MUTATION } from '../../../utils/mutations';

const LikeBtn = ({ user, post: { id, likes, likeCount } }) => {
  const [isLiked, setIsLiked] = useState(false);
  const userSub = user.sub;
  const userId = userSub.substring(6);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.nickname)) {
      setIsLiked(true);
    } else setIsLiked(false);
  }, [user, likes]);

  const renderLikeButton = () => {
    if (!user) {
      return (
        <Button color="red" basic>
          <Icon name="heart" />
        </Button>
      );
    }

    return isLiked ? (
      <Button color="red">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="red" basic>
        <Icon name="heart" />
      </Button>
    );
  };

  const [performLike] = useMutation(LIKE_POST_MUTATION, {
    variables: { userId, postId: id },
  });

  return (
    <Button as="div" labelPosition="right" onClick={performLike}>
      {renderLikeButton()}
      <Label basic color="red" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
};

export default LikeBtn;
