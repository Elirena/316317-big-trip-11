const path = require(`path`);

module.exports = (
    {mode} = {mode: `development`}
) => {
  const isDevelopment = mode === `development`;
  return {
    devtool: isDevelopment ? `sourcemap` : false,
    entry: `./src/main.js`,
    output: {
      filename: `bundle.js`,
      path: path.join(__dirname, `public`),
    },
    devServer: {
      watchContentBase: true,
      contentBase: path.join(__dirname, `public`),
      port: 7001,
    },
  };
};
