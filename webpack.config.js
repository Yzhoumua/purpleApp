//导入合成模块
const baseConfig = require("./webpack.base");
//导入生产模块
const prodConfig = require("./webpack.prod");
// 导入开发模块
const devConfig = require("./webpack.dev");

module.exports = (env) =>{
    if(env && env.prod){
        const config = {
            ...baseConfig,
            ...prodConfig
        }
        config.plugins = [...baseConfig.plugins,...prodConfig.plugins];
        return config
    }else{
        return{
            ...baseConfig,
            ...devConfig
        }
    }
}