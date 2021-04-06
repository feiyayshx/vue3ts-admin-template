

const { resolve } = require('path')

module.exports = {
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@':resolve('src')
                }
            }
        }
    }
}