// const catchAsync = require('./../utils/catchAsync');
const Review = require('../models/reviewsModel');

const factory = require('./handlerFactore');

exports.getAllReviews = factory.getALL(Review);

exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.CreateReview = factory.createOne(Review);
exports.getReview = factory.getOne(Review);

// حتى ضيفا للميدلوير واكمال تابع الانشاء
exports.setTourAndUser = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
