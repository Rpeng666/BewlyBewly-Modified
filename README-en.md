# BewlyBewly (Modified)

English | [官话 - 简体中文](README.md) | [官話 - 繁體中文](README-cmn_TW.md) | [廣東話](README-jyut.md)

<p align="center" style="margin-bottom: 0px !important;">
<img width="300" alt="BewlyBewly icon" src="https://cdn.jsdelivr.net/gh/BewlyBewly/Imgs/logos/bewlybewly-vtuber-logo.png"><br/>
</p>

<p align="center">Just make a few small changes to your Bilibili homepage.</p>

> [!IMPORTANT]
> **Acknowledgements & Disclaimer**
>
> This project is a modification of [BewlyBewly](https://github.com/BewlyBewly/BewlyBewly). The original project has been archived, and we thank the original author for their outstanding work.
>
> **This project is for personal learning and research purposes only. Use at your own risk.**

## 🛡️ Fuck Recommendation (Save My Attention)

> **Your attention is being plundered.**
>
> In today's internet environment, major platforms are doing their best to compete for your attention. Recommendation algorithms, infinite scrolling, red dot notifications... these carefully designed mechanisms have only one purpose: to keep you on the platform longer and sell more ads.
>
> If you find yourself mindlessly scrolling through videos and wasting a lot of time, **please don't blame yourself**. It's not that you lack self-control, but that you are fighting against a huge team of top psychologists, data scientists, and engineers. Their goal is to break through your psychological defenses and use dopamine loops to get you addicted, while you are just an unarmed user.

To help you regain control of your attention, we have added the **Fuck Recommendation** mode based on the original BewlyBewly.

After enabling this mode, you can:
- **Simple Mode**: Hide all recommended videos on the homepage, giving you a fresh start.
- **Hide Comments**: Out of sight, out of mind. Avoid getting involved in meaningless arguments and emotional drain.
- **Only Show Followed**: Only see content you actively choose to follow, refusing "junk food" fed by algorithms.
- **Hide Video Recommendations**: The recommendation list on the right side of the playback page? Make it disappear and focus on the current video.
- **Hide Ending Recommendations**: Video finished? Then it ends. Don't tempt me to click on the next one.

We hope that through these features, we can help you break free from the coercion of algorithms and become the master of yourself again.

## 👋 Introduction

> [!IMPORTANT]
> BewlyBewly mainly focuses on page adjustments and optimization rather than improving functionally and efficiency.
>
> The dark mode will only be adapted to commonly used pages due to its efficiency and maintenance difficulty, while less
> frequently used pages will not to be adapted.

> [!CAUTION]
> [BLBewly](https://apps.apple.com/us/app/blbewly/id6742200021) is a free BewlyBewly extension on Safari. We thank [𝗦𝘁𝗲𝘃𝗲 𝕏](https://x.com/st7evechou) for their help with the free publication of the app to Safari.
> However, issues encountered with the Safari version are outside of our maintenance scope,
> and we are not considering Safari maintenance.

> [!CAUTION]
> If you are installing this extension, your browser will probably say that it can read your browser history.
>
> This is because BewlyBewly uses the ["tabs" permission](https://developer.chrome.com/docs/extensions/reference/api/tabs), which can also be used to read each tab, allowing it to know the browsing history, but it is not utilized here.
>
> **Some browsers will mention the worst-case scenario and the highest risks, ensuring your safety after installation.**
> Additionally, this project is open source, so you can see what exactly what it does.

BewlyBewly is a browser extension for BiliBili that aims to enhance the user experience by redesigning the BiliBili UI.
The design is inspired by YouTube, Vision OS, and iOS, resulting in a more visually appealing and user-friendly interface.
This project uses the [vitesse-webext](https://github.com/antfu/vitesse-webext) template for development.
Without this template, it may not be possible to develop this project.

## ⬇️ Installation

### Online Installation

> [!TIP]
> Even in the Edge browser, we strongly recommend you install it in the Chrome web store.
> In terms of review speed, the Chrome web store is faster than Edge Add-ons.
>
> Additionally, the Chrome Web Store version of BewlyBewly will address and fix critical bugs more quickly.

- Chrome: <https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp>
- Edge: <https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp>
- Firefox: <https://addons.mozilla.org/en-US/firefox/addon/bewlybewly/>

#### To Firefox users

> [!WARNING]
> When using the Firefox browser, remember to enable all permissions shown in the picture below for normal use of BewlyBewly

<br/> <img width="655" alt="enable all bewlybewly permissions on firefox" src="https://github.com/Rpeng666/BewlyBewly-Modified/assets/33394391/9566aed8-040a-4435-a2ec-c61117f8e429">

### Local Installation

[CI](https://github.com/Rpeng666/BewlyBewly-Modified/actions): Automatically build with the latest code

[Releases](https://github.com/Rpeng666/BewlyBewly-Modified/releases): Stable version

#### Edge & Chrome (RECOMMENDED)

> Ensure you installed [extension.zip](https://github.com/Rpeng666/BewlyBewly-Modified/releases) .

Opening the `edge://extensions` page in the Edge or `chrome://extensions` page in Chrome,
simply drag and drop the downloaded `extension.zip` file into the browser to complete the installation.

<details>
 <summary> Another installation method for Edge & Chrome </summary>

#### Edge

> Ensure you installed [extension.zip](https://github.com/Rpeng666/BewlyBewly-Modified/releases) and decompress this file.

1. Type in `edge://extensions/` in the address bar and press Enter
2. Turn on `Developer mode` then press `Load Unpacked` <br/> <img width="655" alt="image" src="https://user-images.githubusercontent.com/33394391/232246901-e3544c16-bde2-480d-b770-ca5242793963.png">
3. Load the decompressed extension folder in your browser

#### Chrome
>
> Ensure you installed [extension.zip](https://github.com/Rpeng666/BewlyBewly-Modified/releases) and decompress this file.

1. Type in `chrome://extensions/` in the address bar and press Enter
2. Turn on `Developer mode` then press `Load Unpacked` <br/> <img width="655" alt="Snipaste_2022-03-27_18-17-04" src="https://user-images.githubusercontent.com/33394391/160276882-13da0484-92c1-47dd-add8-7655c5c2bf1c.png">
3. Load the decompressed extension folder in your browser

</details>

## 🤝 Contribution & Build

See [CONTRIBUTING.md](docs/CONTRIBUTING.md)

## ❤️ Credits

- [vitesse-webext](https://github.com/antfu/vitesse-webext) - The template used for this project
- [UserScripts/bilibiliHome](https://github.com/indefined/UserScripts/tree/master/bilibiliHome),
[bilibili-app-recommend](https://github.com/magicdawn/bilibili-app-recommend) - Reference source for obtaining the access key
- [Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved) - Partial implementation of functionalities
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
