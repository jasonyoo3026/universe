const User = require("../../models/User");
const { UserInputError } = require("apollo-server");

module.exports = {
  Mutation: {
    async register(_, { registerInput: { username, university } }) {
      // Make sure user doesn't already exist
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken"
          }
        });
      }

      const newUser = new User({
        username,
        university,
        createdAt: new Date().toISOString()
      });

      const res = await newUser.save();

      return {
        ...res._doc,
        id: res._id
      };
    }
  }
};
