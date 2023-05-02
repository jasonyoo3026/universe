const { UserInputError } = require("apollo-server");

const Post = require("../../models/Post");
const User = require("../../models/User");

module.exports = {
  Mutation: {
    createComment: async (_, { userId, postId, body }) => {
      if (body.trim() === "") {
        throw new UserInputError("Empty Comment", {
          errors: {
            body: "No text in comment??"
          }
        });
      }
      const post = await Post.findById(postId);
      const user = await User.findById(userId);
      if (post) {
        post.comments.unshift({
          body,
          username: user.username,
          createdAt: new Date().toISOString()
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    },

    async deleteComment(_, { postId, commentId }) {
      const post = await Post.findById(postId);
      if (post) {
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);
        const username = post.username;
        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new Error(err);
        }
      } else {
        throw new UserInputError("Post not found :(");
      }
    }
  }
};
