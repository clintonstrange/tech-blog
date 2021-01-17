const { Post } = require("../models");

const postdata = [
  {
    title: "Test Post Title 1.",
    post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 10,
  },
  {
    title: "Test Post Title 2.",
    post_url: "https://nasa.gov/donec.json",
    user_id: 8,
  },
  {
    title: "Test Post Title 3.",
    post_url:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    user_id: 1,
  },
  {
    title: "Test Post Title 4.",
    post_url: "http://desdev.cn/enim/blandit/mi.jpg",
    user_id: 4,
  },
  {
    title: "Test Post Title 5.",
    post_url: "http://google.ca/nam/nulla/integer.aspx",
    user_id: 7,
  },
  {
    title: "Test Post Title 6.",
    post_url: "https://stanford.edu/consequat.png",
    user_id: 4,
  },
  {
    title: "Test Post Title 7.",
    post_url: "http://edublogs.org/non/ligula/pellentesque.js",
    user_id: 1,
  },
  {
    title: "Test Post Title 8.",
    post_url: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
  },
  {
    title: "Test Post Title 9.",
    post_url: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    user_id: 9,
  },
  {
    title: "Test Post Title 10.",
    post_url: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
  },
  {
    title: "Test Post Title 11.",
    post_url: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
  },
  {
    title: "Test Post Title 12.",
    post_url:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
  },
  {
    title: "Test Post Title 13.",
    post_url: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
  },
  {
    title: "Test Post Title 14.",
    post_url: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
  },
  {
    title: "Test Post Title 15.",
    post_url: "https://gmpg.org/lorem.jpg",
    user_id: 3,
  },
  {
    title: "Test Post Title 16.",
    post_url: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    title: "Test Post Title 17.",
    post_url: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "Test Post Title 18.",
    post_url: "https://shareasale.com/quis.json",
    user_id: 4,
  },
  {
    title: "Test Post Title 19.",
    post_url:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title: "Test Post Title 20.",
    post_url: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
