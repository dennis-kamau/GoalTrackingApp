module.exports = function (
  /** @type {{ cache: (arg0: boolean) => void; }} */ api,
) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.js',
            'ios.tsx',
            '.android.js',
            'android.tsx',
            '.js',
            '.ts',
            '.tsx',
            '.json',
          ],
          alias: {
            '@GoalTrackingApp': './src',
            '@GoalTrackingApp/components': './src/components',
            '@GoalTrackingApp/hooks': './src/hooks',
            '@GoalTrackingApp/models': './src/models',
            '@GoalTrackingApp/navigation': './src/navigation',
            '@GoalTrackingApp/redux': './src/redux',
            '@GoalTrackingApp/screens': './src/screens',
            '@GoalTrackingApp/theme': './src/theme',
            '@GoalTrackingApp/utils': './src/utils',
          },
        },
      ],
    ],
  };
};
