const path = require('path');

const filenameAliases = {
  '@': path.resolve(__dirname, './src'),
  '@components': path.resolve(__dirname, './src/components'),
  '@assets': path.resolve(__dirname, './src/assets'),
  '@i18n': path.resolve(__dirname, './src/i18n'),
  '@libs': path.resolve(__dirname, './src/libs'),
  '@pages': path.resolve(__dirname, './src/pages'),
  '@constants': path.resolve(__dirname, './src/constants'),
  '@layouts': path.resolve(__dirname, './src/layouts'),
  '@routes': path.resolve(__dirname, './src/routes'),
  '@utils': path.resolve(__dirname, './src/utils'),
  // '@types': path.resolve(__dirname, './src/types'),
  '@store': path.resolve(__dirname, './src/store'),

};

module.exports = filenameAliases;