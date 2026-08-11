/**
 * Metro config for the PoseTracker Light Expo Go demo.
 */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const defaultResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  let resolvedName = moduleName;
  if (
    moduleName === 'expo-file-system' &&
    (context.originModulePath.includes('react-native-pose-estimation') ||
      context.originModulePath.includes('pose-estimation-react-native'))
  ) {
    resolvedName = 'expo-file-system/legacy';
  }
  if (defaultResolveRequest) {
    return defaultResolveRequest(context, resolvedName, platform);
  }
  return context.resolveRequest(context, resolvedName, platform);
};

module.exports = config;
