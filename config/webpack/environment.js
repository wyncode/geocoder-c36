const { environment } = require("@rails/webpacker");

// Don't run babel-loader in the node_modules folder,
// replicating the same behavior as Webpacker 3
environment.loaders.delete("nodeModules");

module.exports = environment;
