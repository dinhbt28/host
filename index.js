import { AppRegistry, Platform } from 'react-native';
import { ScriptManager, Federated, Script } from '@callstack/repack/client';

import App from './src/App';
import appJson from './app.json';
import { version } from './package.json';
import { getContainer } from '@/utils/container';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  console.log(getContainer(Platform.OS, version));
  const resolveURL = Federated.createURLResolver({
    containers: getContainer(Platform.OS, version), // TODO fetch api app management
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
      platform: Platform.OS,
    },
    verifyScriptSignature: 'off',
  };
});

AppRegistry.registerComponent(appJson.name, () => App);
