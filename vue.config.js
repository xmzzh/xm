const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('./src'))
            .set('a',resolve('./src/assets'))
            .set('c',resolve('./src/components'))
            .set('v',resolve('./src/views'))
    }
}
