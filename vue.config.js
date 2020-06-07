module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  }
}