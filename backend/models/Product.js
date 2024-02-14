const mongoose = require("mongoose");
const User = require("./User");

const RewievsSchema = mongoose.Schema({
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  //ilişkili veri tabanı yaptık
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,required: true},
});
const ProductShema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: [{ type: String, required: true }],
    rewievs: [RewievsSchema],
    description: { type: String, required: true },
    colors: [{ type: String, required: true }],
    sizes: [{ type: String, required: true }],
    price: {
      current: { type: String, required: true },
      discount: { type: Number },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Product", ProductShema);
module.exports = Product;
