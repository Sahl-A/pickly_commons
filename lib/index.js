const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

exports.helmet = (app) => {
  app.use(helmet());
};

exports.rateLimit = (app) => {
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
};
