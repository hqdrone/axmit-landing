const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        static: path.resolve(__dirname, 'src/static'),
        const: path.resolve(__dirname, 'src/const'),
        locales: path.resolve(__dirname, 'src/locales')
      }
    }
  });
};
