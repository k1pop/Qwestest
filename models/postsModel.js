const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "QwestTv",
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  "person"
);

module.exports = { PostsModel };
