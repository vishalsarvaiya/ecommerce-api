const productSchema = require("../validations/product");

const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }
  next();
};

module.exports = validateProduct;
