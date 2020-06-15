const {injectBabelPlugin} = require('react-app-rewired')
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config= injectBabelPlugin(['import',{ libraryName: "antd-mobile", style: "css" }],config);
    return config;
  };
//   针对于antd-mobile按需打包