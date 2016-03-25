import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/fauxet.umd.js';
config.moduleName = 'fauxet';

export default config;
