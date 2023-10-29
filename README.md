# tbh mobile
sequel to [artificialbutter/tbhdesktop](https://github.com/artificialbutter/tbhdesktop)

## Installation
### Android
1. Download the latest release from the [releases page](https://github.com/artificialbutter/tbhmobile/releases)
2. Install the apk

### iOS
1. Download the latest release from the [releases page](https://github.com/artificialbutter/tbhmobile/releases)
2. Install the ipa using [AltStore](https://altstore.io/) or [Sideloady](https://github.com/jt52525/sideloady)
## Building
Base Requirements:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm)

```bash
# install dependencies
npm install
# build vite assets
npm run build
# copy assets to capacitor
npx cap copy
# continue with platform specific instructions
```

### Android
[Android Requirements](https://capacitorjs.com/docs/getting-started/environment-setup#android-requirements)

Open in android studio with `npx cap open android` and follow instructions for building any android app.

### iOS
[iOS Requirements](https://capacitorjs.com/docs/getting-started/environment-setup#ios-requirements)

Open in xcode with `npx cap open ios` and follow instructions for building any ios app.

## Tech Used
- [Capacitor](https://capacitorjs.com)
- [canvas-confetti](https://github.com/catdad/canvas-confetti)
- [vite](https://vitejs.dev)