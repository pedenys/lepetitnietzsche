const withOffline = require("next-offline");

const nextConfig = {
  distDir: "build",
};

module.exports = withOffline(nextConfig);
