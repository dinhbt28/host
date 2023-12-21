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

const containerLocal = {
  auth: 'http://localhost:9000/[name][ext]',
};

export const getContainer = (os: string, version: string) =>
  __DEV__ ? containerLocal : (container as any)[os][version];
