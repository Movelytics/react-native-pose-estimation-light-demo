# PoseTracker React Native Light Demo

Expo Go demo for the **PoseTracker Light** human pose estimation SDK — TF.js +
MoveNet loaded online each session (small npm package).

## Try it

**Fastest — no clone:** [Expo Snack](https://snack.expo.dev/@fsepret/posetracker-sdk-light-demo-app) → install [Expo Go](https://expo.dev/go) → **Run on device** → scan the QR.

Or run this repo:

1. Install [Expo Go](https://expo.dev/go)
2. `npm install && npx expo start`
3. Scan the QR code (needs network for model / TF.js)
4. Keypoints work without an API key; paste a PoseTracker API key for exercises

## SDK

```bash
npm install @pose-tracker/react-native-pose-estimation-light react-native-webview
```

- Light SDK: https://github.com/Movelytics/react-native-pose-estimation-light
- Offline SDK (bundled model): https://github.com/Movelytics/react-native-pose-estimation
- Comparison: see Light SDK `docs/LIGHT_SDK.md`
- Product: https://www.posetracker.com

**Never commit API keys.** Use the in-app field only.

## License

This demo is **MIT** (see `LICENSE`). The SDK is proprietary — see the Light SDK repo.
