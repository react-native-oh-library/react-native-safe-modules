/* eslint global-require: 0 */

import SafeModules from 'react-native-safe-modules'

module.exports = {
  create: require('./SafeModule'),
  module: require('./SafeModule'),
  component: SafeModules.component,
};
