module.exports = {
  presets: ['module:@react-native/babel-preset', 'module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          // Define your alias here
          "@screens": "./src/screens",
          "@navigation": "./src/navigation",
          "@components": "./src/components",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
