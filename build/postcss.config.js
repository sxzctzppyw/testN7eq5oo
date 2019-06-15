const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const stylelint = require('stylelint');

module.exports = {
  map: true,
  plugins: [
    autoprefixer,
    postcssFlexbugsFixes,
    postcssPresetEnv,
    stylelint({
      configFile: 'build/.stylelintrc'
    })
  ]
};
