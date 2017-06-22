const webpack = require('webpack');
const logger = require('boldr-utils/lib/logger');

module.exports = (webpackConfig, cb) => {
  let webpackCompiler;
  const type = webpackConfig.target === 'web' ? 'client' : 'server';

  // Compile the webpack config
  try {
    webpackCompiler = webpack(webpackConfig);
    logger.task(`${type} webpack configuration compiled`);
  } catch (error) {
    logger.error(`${type} webpack config is invalid\n`, error);
    console.log(error);
    process.exit(1);
  }

  // Handle errors in webpack build
  webpackCompiler.plugin('done', (stats) => {
    if (stats.hasErrors()) {
      logger.error(`${type} build failed\n`, stats.toString());
      logger.info('See webpack error above');
    } else if (stats.hasWarnings()) {
      logger.warn(`${type} build warnings`, stats.toString());
    } else {
      logger.task(`${type} build successful`);
    }

    if (cb) {
      cb(stats);
    }
  });


  // Return the compiler
  return webpackCompiler;
};
