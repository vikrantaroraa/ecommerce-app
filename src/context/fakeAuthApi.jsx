//comes from the database
const Users = [
  {
    username: "vikrant",
    password: "arora",
  },
  {
    username: "shivam",
    password: "pandey",
  },
  {
    username: "harshit",
    password: "negi",
  },
];

const findUserByUserName = (username) => {
  return Users.find((user) => user.username === username);
};

export const fakeAuthApi = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = findUserByUserName(username);
      if (user.password === password) {
        resolve({ success: true, status: 200 });
      }
      reject({ success: false, status: 401 });
    }, 3000);
  });
};
