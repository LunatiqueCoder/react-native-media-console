# 🕹 react-native-media-console

[![platforms][3]][4]
[![GitHub issues][5]][6]
[![GitHub][7]][8]
[![GitHub top language][9]][10]
[![Maintenance][11]][12]
[![npm][13]][14]
<!-- [![ci][1]][2] -->

VideoPlayer for the React Native `<Video/>` component at [react-native-video][15].

[![demogif][16]][17]

### ⚠️ **Note:**
> 
> We're only supporting the beta version of `react-native-video`. Since it looks stable enough except for the subtitles (which might still be a WIP at the time of writing), we're already using it in production at http://englishdiscoveries.net/

## ⭐️ Features

This package contains a simple set of GUI controls that work with the [react-native-video][15] `<Video>` component.
- [x] `react-native-reanimated`
- [x] Back Button
- [x] Volume bar
- [x] Fullscreen button
- [x] Play/Pause button
- [x] Rewind/Forward buttons
- [x] Seekbar
- [x] Title
- [x] Error handling
- [x] Timer
- [ ] Rate button

By default the `<VideoPlayer>` accepts a navigator property from React's built-in `<Navigator>` which pops the current
scene off the stack when tapped. Alternatively you can provide your own onBack prop to the component to override this
functionality. You should also provide your own onEnd prop to the component so it knows what to do when a video ends
playback.

By default, tapping the screen anywhere will show the player controls. After 15s the controls disappear. Double tapping
will toggle fullscreen.

## ⚙️ Installation

Run `yarn add react-native-video react-native-media-console`

Then follow installation instructions
from [react-native-video][15].

If you are using `react-native-reanimated`, then you can use `yarn add @react-native-media-console/reanimated`

> **🚧 WARNING**
>
> You need react-native-video > 6.0.0 in order to use this library.

## 🛠 Usage

The `<VideoPlayer>` component follows the API of the `<Video>` component
at [react-native-video][15]. It also takes a number of
additional props which are outlined in the [API](#-api) section.

For basic operation the `<VideoPlayer>` component requires a video source and a navigator property. The default back
button functionality in the component relies on using the built-in `<Navigator>` functionality in React Native and pops
the current scene off the stack. This can be overridden if desired, see the [API](#-api) for more details.

```javascript
// At the top where our imports are...
import VideoPlayer from 'react-native-media-console';
// 👇 if you use react-native-reanimated 
import {useAnimations} from '@react-native-media-console/reanimated';

// in the component's render() function
<VideoPlayer
    useAnimations={useAnimations}
    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    navigator={props.navigator}
/>;
```

To play a local file, use require syntax like so:

```js
<VideoPlayer source={require('path/to/file')}/>
```

## 🧰 API

The `<VideoPlayer>` component can take a number of inputs to customize it as needed. They are outlined below:

### Props

You can pass any of the props that the `<Video />` component at [react-native-video][15] takes. Simply add them onto
the `<VideoPlayer />` and it will pass them through to the `<Video />` component.

In addition, the `<VideoPlayer />` also takes these props:

| Prop                         | Type                                          | Default                                  | Description                                                                                                                                                            |
|------------------------------|-----------------------------------------------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| alwaysShowControls           | Boolean                                       | false                                    | Always show controls.                                                                                                                                                  |
| controlAnimationTiming       | Integer                                       | 500                                      | The amount of time (in milliseconds) to animate the controls in and out.                                                                                               |
| controlTimeoutDelay          | Integer                                       | 15000                                    | Hide controls after X amount of time in milliseconds                                                                                                                   |                           |
| doubleTapTime                | Integer                                       | 130                                      | Tapping twice within this amount of time in milliseconds is considered a double tap. Single taps will not be actioned until this time has expired.                     |
| isFullscreen                 | Boolean                                       | false                                    | The VideoPlayer fullscreen state                                                                                                                                       |
| navigator                    | Navigator                                     | null                                     | When using the default React Native navigator and do not override the `onBack` function, you'll need to pass the navigator to the VideoPlayer for it to function       |
| rewindTime                   | Integer                                       | 15                                       | Number of seconds to rewind or forward.                                                                                                                                |
| seekColor                    | String(#HEX)                                  | '#FFF'                                   | Fill/handle colour of the seekbar                                                                                                                                      |
| showDuration                 | Boolean                                       | false                                    | Show duration of the media.                                                                                                                                            |
| showOnStart                  | Boolean                                       | false                                    | Show or hide the controls on first render                                                                                                                              |
| showOnEnd                    | Boolean                                       | false                                    | Show or hide the controls on end of video                                                                                                                              |
| showTimeRemaining            | Boolean                                       | false                                    | If true, show the time remaing, else show the current time in the Player.                                                                                              |
| showHours                    | Boolean                                       | false                                    | If true, convert time to hours in the Player                                                                                                                           |
| tapAnywhereToPause           | Boolean                                       | false                                    | If true, single tapping anywhere on the video (other than a control) toggles between playing and paused.                                                               |
| toggleResizeModeOnFullscreen | Boolean                                       | false                                    | If true, clicking the fullscreen button will toggle the `<Video />` component between cover/contain, set to false if you want to customize fullscreen behaviour        |
| containerStyle               | ViewStyle                                     |                                          | StyleSheet passed to the container of the <Video /> component                                                                                                          |
| videoStyle                   | ViewStyle                                     |                                          | StyleSheet passed to the <Video /> component                                                                                                                           |
| videoRef                     | Video                                         | undefined                                | Pass ref to the `<Video/>` component                                                                                                                                   |
| pan                          | `{ horizontal: Boolean, inverted: Boolean } ` | `{ horizontal: true, inverted: false } ` | An object allowing fine grained control over the `PanResponder` controlling the volume and seek. Use this if you need to apply rotation transformations to the player. |

### Events

These are various events that you can hook into and fire functions on in the component:

| Callback          | Description                                                                     |
|-------------------|---------------------------------------------------------------------------------|
| onEnterFullscreen | Fired when the video enters fullscreen after the fullscreen button is pressed   |
| onExitFullscreen  | Fired when the video exits fullscreen after the fullscreen button is pressed    |
| onHideControls    | Fired when the controls disappear                                               |
| onShowControls    | Fired when the controls appear                                                  |
| onError           | Fired when an error is encountered when loading the video                       |
| onPause           | Fired when the video is paused after the play/pause button is pressed           |
| onPlay            | Fired when the video begins playing after the play/pause button is pressed      |
| onBack            | Function fired when back button is pressed, override if using custom navigation |
| onEnd             | Fired when the video is complete                                                |

### Controls

These are the various controls that you can turn on/off as needed. All of these props default to false, override them to
disable any controls

| Control            | Description                                                                                                                         |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| disableFullscreen  | Hide the fullscreen button                                                                                                          |
| disablePlayPause   | Hide the play/pause toggle and the rewind/forward buttons                                                                           |
| disableSeekButtons | Hide the rewind/forward buttons (but not play/pause)                                                                                |
| disableSeekbar     | Hide the seekbar                                                                                                                    |
| disableVolume      | Hide the Volume control                                                                                                             |
| disableTimer       | Hide the timer                                                                                                                      |
| disableBack        | Hide the back button                                                                                                                |
| disableOverlay     | Hide the transparent overlay which is active when the controls are shown. Generally used when you want to disable all the controls. |

## 🪲 Debugging

### Android:

- Seek doesn't work correctly on
  Android: https://github.com/react-native-video/react-native-video/issues/2230#issuecomment-892982288
- Could not find com.yqritc:android-scalablevideoview:
  1.0.4: https://github.com/react-native-video/react-native-video/issues/2454#issuecomment-913709132

## 📃 License

> 📃 This project is released under the [MIT License](LICENSE). \
> 💻 By contributing, you agree that your contributions will be licensed under its MIT License.

## 🏆 Sponsors

|                           |                                |
|---------------------------|--------------------------------|
| [![jetbrains100][18]][19] | [![englishdislogo100][20]][21] |

[1]: https://github.com/LunatiqueCoder/react-native-media-console/workflows/ci/badge.svg

[2]: https://github.com/LunatiqueCoder/react-native-media-console/actions

[3]: https://img.shields.io/badge/platforms-Android%20%7C%20iOS%20%7C%20tvOS-brightgreen.svg?style=flat-square&colorB=191A17

[4]: https://github.com/react-native-tvos/react-native-tvos

[5]: https://img.shields.io/github/issues/LunatiqueCoder/react-native-media-console

[6]: https://github.com/LunatiqueCoder/react-native-media-console/issues

[7]: https://img.shields.io/github/license/LunatiqueCoder/react-native-media-console

[8]: https://github.com/LunatiqueCoder/react-native-media-console/blob/master/LICENSE

[9]: https://img.shields.io/github/languages/top/LunatiqueCoder/react-native-media-console

[10]: https://github.com/LunatiqueCoder/react-native-media-console/search?l=typescript

[11]: https://img.shields.io/maintenance/yes/2025

[12]: https://github.com/LunatiqueCoder/react-native-media-console/graphs/contributors

[13]: https://img.shields.io/npm/v/react-native-media-console

[14]: https://www.npmjs.com/package/react-native-media-console

[15]: https://github.com/react-native-video/react-native-video

[16]: https://user-images.githubusercontent.com/55203625/159137837-4e34a8be-1cbb-48ae-9d67-99ce4922e660.gif

[17]: https://user-images.githubusercontent.com/55203625/159138065-cf3554b6-3f8b-4cab-bf94-0f3fc0b57333.gif

[18]: https://user-images.githubusercontent.com/55203625/213786907-b95dfb4b-08bf-4449-a055-72edf401da23.png

[19]: https://www.jetbrains.com/

[20]: https://user-images.githubusercontent.com/55203625/213786736-1d0226de-f810-4ece-968f-08c81c769948.png

[21]: https://englishdiscoveries.page.link/fJc4
