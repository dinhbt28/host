module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'transform-inline-environment-variables',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@': './src/',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
