const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "testuser1",
    email: "test1@email.com",
    password: "password123",
  },
  {
    username: "testuser2",
    email: "test2@email.com",
    password: "password123",
  },
  {
    username: "testuser3",
    email: "test3@email.com",
    password: "password123",
  },
  {
    username: "testuser4",
    email: "test4@email.com",
    password: "password123",
  },
  {
    username: "testuser5",
    email: "test5@email.com",
    password: "password123",
  },
  {
    username: "testuser6",
    email: "test6@email.com",
    password: "password123",
  },
  {
    username: "testuser7",
    email: "test7@email.com",
    password: "password123",
  },
  {
    username: "testuser8",
    email: "test8@email.com",
    password: "password123",
  },
  {
    username: "testuser9",
    email: "test9@email.com",
    password: "password123",
  },
  {
    username: "testuser10",
    email: "test10@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
