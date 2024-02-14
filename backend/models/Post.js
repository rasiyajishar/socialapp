const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] // Reference to the Comment model
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);