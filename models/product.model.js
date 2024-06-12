const mongoose = require("mogoose");
const ProductSchema = mongoose.Scheema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    qunatity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
      default:
        "https://i.pinimg.com/564x/2b/31/7d/2b317d18888888888888888888888888.jpg",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
