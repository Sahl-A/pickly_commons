const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const compression = require("compression");

exports.helmet = (app) => {
  app.use(helmet());
};

exports.rateLimit = (
  app,
  rateLimitOptions = { windowMs: 15 * 60 * 1000, max: 100 }
) => {
  app.use(rateLimit(rateLimitOptions));
};

exports.compression = (app) => {
  app.use(compression());
};
