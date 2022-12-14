const mongoose = require("mongoose");
const moment = require("moment");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    cDate: {
      type: String,
      default:
        moment().format("YYYY/MM/DD") + "/" + moment().format("hh/mm/ss"),
    },
    uDate: {
      type: String,
      default:
        moment().format("YYYY/MM/DD") + "/" + moment().format("hh/mm/ss"),
    },
    },
    {
        toJSON: { virtuals: true },
        toObject:{virtuals:true}
    }
);

productSchema.virtual("hero", {
  ref: "review",
  localField: "_id",
  foreignField: "userId",
//   justOne: true,
});

const product = mongoose.model("product", productSchema);
module.exports = product;