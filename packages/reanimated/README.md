# 🕹 @react-native-media-console/reanimated

[![platforms][3]][4]
[![GitHub issues][5]][6]
[![GitHub][7]][8]
[![GitHub top language][9]][10]
[![Maintenance][11]][12]
[![npm][13]][14]

<!-- [![ci][1]][2] -->

Reanimated animations for `react-native-media-console`.

[![demogif][16]][17]

## ⭐️ Features

This package contains a `useAnimations` hook that uses `react-native-reanimated` for `react-native-media-console`.

## ⚙️ Installation

Run `yarn add react-native-reanimated react-native-video react-native-media-console @react-native-media-console/reanimated`

Then follow installation instructions
from [react-native-video][15].

## 🛠 Usage

```javascript
// At the top where our imports are...
import VideoPlayer from 'react-native-media-console';
import {useAnimations} from '@react-native-media-console/reanimated';

// in the component's render() function
<VideoPlayer
  useAnimations={useAnimations}
  source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
  navigator={props.navigator}
/>;
```

## 📃 License

> 📃 This project is released under the [MIT License](LICENSE). \
> 💻 By contributing, you agree that your contributions will be licensed under its MIT License.

## 🏆 Sponsors

|                           |                                |
| ------------------------- | ------------------------------ |
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
[11]: https://img.shields.io/maintenance/yes/2023
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
