module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: "bob",
          email: "jon@gmail.com",
        },
        {
          username: "tim",
          email: "tim@gmail.com",
        },
      ];

      return users;
    },
  },
};
