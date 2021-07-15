const path =require('path')

module.exports = {    
    trailingSlash: true,
    webpack: config => {
        config.resolve.modules.push(path.resolve('./'))
        return config
    }
}
