const babel = require('rollup-plugin-babel');
const changeCase = require('change-case');
const createBanner = require('create-banner');
const pkg = require('./package');

pkg.name = pkg.name.replace('js', '');

const name = changeCase.pascalCase('viewer');
const banner = createBanner({
  data: {
    name: `${name}.js`,
    year: '2015-present',
  },
});

module.exports = {
  input: 'src/index.js',
  output: [
    {
      banner,
      name,
      file: 'dist/viewer.js',
      format: 'umd',
    },
    {
      banner,
      file: 'dist/viewer.common.js',
      format: 'cjs',
    },
    {
      banner,
      file: 'dist/viewer.esm.js',
      format: 'esm',
    },
    {
      banner,
      name,
      file: 'docs/js/viewer.js',
      format: 'umd',
    },
  ],
  plugins: [
    babel(),
  ],
};
