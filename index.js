import { AppRegistry, Platform } from 'react-native';
import { ScriptManager, Federated, Script } from '@callstack/repack/client';

import App from './src/App';
import appJson from './app.json';
import { version } from './package.json';

const container = {
  ios: {
    '0.0.1': {
      auth: 'https://github.com/thiendinh1995/auth/releases/download/auth-ios@0.0.1/[name][ext]',
    },
  },
  android: {
    '0.0.1': {
      auth: 'https://github.com/thiendinh1995/auth/releases/download/auth-android@0.0.2/[name][ext]',
    },
  },
};

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const resolveURL = Federated.createURLResolver({
    containers: container[Platform.OS][version], // TODO fetch api app management
  });

  let url;
  if (__DEV__ && caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: !__DEV__,
    query: {
      platform: Platform.OS, // only needed in development
    },
    verifyScriptSignature: __DEV__ ? 'off' : 'strict',
  };
});

AppRegistry.registerComponent(appJson.name, () => App);
