const path = require('path');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactjsSparkline',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    html: {
      template: 'demo/src/index.html'
    },
    rules: {
      sass: {
        includePaths: [path.resolve('src/**')]
      }
    }
  }
}
