const sass = require('saas')
const getStyleRule = require('../utils/get_style_rule')

module.exports = getStyleRule(/\.(scss|sass)(\.erb)?$/i, false, [
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      implementation: sass
    }
  }
])
