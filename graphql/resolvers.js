module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: "jon",
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
