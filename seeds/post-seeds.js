const { Post } = require("../models");

const postdata = [
  {
    title: "Test Post Title 1",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker",
    user_id: 10,
  },
  {
    title: "Test Post Title 2",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 8,
  },
  {
    title: "Test Post Title 3",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 1,
  },
  {
    title: "Test Post Title 4",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 4,
  },
  {
    title: "Test Post Title 5",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 7,
  },
  {
    title: "Test Post Title 6",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 4,
  },
  {
    title: "Test Post Title 7",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 1,
  },
  {
    title: "Test Post Title 8",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 1,
  },
  {
    title: "Test Post Title 9",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 9,
  },
  {
    title: "Test Post Title 10",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 5,
  },
  {
    title: "Test Post Title 11",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 3,
  },
  {
    title: "Test Post Title 12",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 10,
  },
  {
    title: "Test Post Title 13",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 8,
  },
  {
    title: "Test Post Title 14",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 3,
  },
  {
    title: "Test Post Title 15",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 3,
  },
  {
    title: "Test Post Title 16",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 7,
  },
  {
    title: "Test Post Title 17",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 6,
  },
  {
    title: "Test Post Title 18",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 4,
  },
  {
    title: "Test Post Title 19",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 6,
  },
  {
    title: "Test Post Title 20",
    contents:
      "Heave down list rum poop deck line topmast schooner pinnace pink spanker.",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
