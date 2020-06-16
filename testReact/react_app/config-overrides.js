
// 视屏内容
// const {injectBabelPlugin} = require('react-app-rewired')
// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     // 注入bale插件
//     config= injectBabelPlugin(['import',{ libraryName: "antd-mobile", style: "css" }],config);
//     return config;
//   };
//   针对于antd-mobile按需打包


// 官网内容
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
     }),
  );