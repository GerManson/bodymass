const transformation = {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
};
module.exports = { toJSON: transformation, toObject: transformation };
