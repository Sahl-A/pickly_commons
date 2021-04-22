const helmet = require("helmet");

exports.helmet = (app) => {
    app.use(helmet());
    console.log("helmet protection was added");
};
