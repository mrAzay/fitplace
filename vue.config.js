module.exports = {
  configureWebpack: () => {
    return {
      devServer: {
        proxy: {
          app: {
            target: 'https://back.fit-place.com',
            secure: false,
            changeOrigin: true
          }
        }
      }
    }
  }
}
