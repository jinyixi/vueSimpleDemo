'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"https://www.fastmock.site/mock/04f9053521699146a86f9cfc5c7ef35a/mock"'
})


//示例 统一请求API管理js配置
	// const API_SER = process.env.API_SERVER;
	// //方法地址设定
	// var appUrl = {
	//     API_QUERY_AREA_ORG_LIST: API_SER + "/query/area/org",
	//   }
