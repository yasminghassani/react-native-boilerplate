# React Native App

This is a **React Native** project bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

## Getting Started

> **Prerequisites**: 
>
> * Node v25
> * CocoaPods v1.16.2 -> iOS
> * Ruby 3.2 -> iOS
> * Java v17 -> Android
>
> Make sure you have completed the official [Set Up Your Environment](https://reactnative.dev/docs/environment-setup) guide before continuing.

---

---

## Step 0: Install JavaScript dependencies (required)

After cloning the repository, install all JavaScript dependencies first:

```sh
yarn install
```

This will generate the `node_modules` folder required for Metro, iOS Pods, and Android builds.

---

## Step 1: Start Metro (optional but recommended)

Metro is the JavaScript bundler for React Native.

```sh
yarn start
```

> 💡 Metro will also start automatically when you run `yarn ios` or `yarn android`, so this step is optional.

---

## Step 2: Install iOS native dependencies

> This is required **only for iOS** and usually only on the first install or when native dependencies change.

```sh
cd ios
bundle install
bundle exec pod install
cd ..
```

---

## Step 3: Build and run the app

Open a new terminal from the project root.

### Android

```sh
yarn android
```

### iOS

```sh
yarn ios
```

If everything is set up correctly, the app will open in the Android Emulator, iOS Simulator, or a connected device.

---

## Step 4: Modify your app

Edit `App.tsx` and save your changes. The app will automatically update using **Fast Refresh**.

### Reloading the app

* **Android**: Press <kbd>R</kbd> twice or open the Dev Menu (<kbd>Cmd ⌘</kbd> + <kbd>M</kbd>)
* **iOS**: Press <kbd>R</kbd> in the iOS Simulator

---

## Common Commands

```sh
yarn install        # Install dependencies
yarn start          # Start Metro
yarn ios            # Run iOS app
yarn android        # Run Android app
```

---

## Troubleshooting

If you encounter issues:

* Make sure `node_modules` exists (`yarn install` was run)
* Re-run Pods if iOS build fails:

```sh
cd ios && bundle exec pod install && cd ..
```

See the official [Troubleshooting guide](https://reactnative.dev/docs/troubleshooting) for more help.

---

## Learn More

* [React Native Documentation](https://reactnative.dev)
* [Fast Refresh](https://reactnative.dev/docs/fast-refresh)
* [Integration with Existing Apps](https://reactnative.dev/docs/integration-with-existing-apps)

---

🎉 **You’re ready to develop!**
