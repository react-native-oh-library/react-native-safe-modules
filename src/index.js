/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

/* eslint global-require: 0 */

import SafeModules from 'react-native-safe-modules'

module.exports = {
  create: require('./SafeModule'),
  module: require('./SafeModule'),
  component: SafeModules.component,
};
