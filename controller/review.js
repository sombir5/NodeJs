const Review = require("../modal/review.modal");

const createReview = async (req, res) => {
  try {
    let review = await Review.create(req.body);
    review.save();
    res.send({ review, message: "review Added" });
  } catch (error) {
    console.log(error.message);
  }
};

const getReviews = async (req, res) => {
    try {
        let review = await Review.findOne()
        res.send(review)
    } catch (error) {
        console.log(error.message);
    }
}
module.exports ={ createReview,getReviews};