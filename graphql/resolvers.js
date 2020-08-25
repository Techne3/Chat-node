const { User } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    register: async (_, args) => {
      let { username, email, password, confirmPassword } = args;
      try {
        // TODO: validate input data
        // TODO: Check if username / email exist
        // TODO: Hash pass
        password = await bcrypt.hash(password, 6);
        // TODO: Create user
        const user = await User.create({
          username: username,
          email: email,
          password: password,
        });
        // TODO: Return User
        return user;
      } catch (err) {
        throw err;
      }
    },
  },
};
