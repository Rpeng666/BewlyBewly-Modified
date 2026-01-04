# BewlyBewly (Modified)

[English](README-en.md) | 官话 - 简体中文

<p align="center" style="margin-bottom: 0px !important;">
<img width="300" alt="BewlyBewly icon" src="https://cdn.jsdelivr.net/gh/BewlyBewly/Imgs/logos/bewlybewly-vtuber-logo.png"><br/>
</p>

<p align="center">只需对您的 Bilibili 主页进行一些小更改即可。</p>

> [!IMPORTANT]
> **致谢与声明**
>
> 本项目修改自 [BewlyBewly](https://github.com/BewlyBewly/BewlyBewly)。原项目已经归档，感谢原作者的杰出工作。
>
> **本项目仅供个人学习和研究使用，后果自负。**

## 🛡️ 拯救我的注意力 (Fuck Recommendation)

> **你的注意力正在被掠夺**
>
> 在当今的互联网环境下，各大平台都在竭尽全力争夺你的注意力。推荐算法、无限下拉、红点通知……这些精心设计的机制只有一个目的：让你在平台上停留更久，从而卖出更多的广告。
>
> 如果你发现自己经常无意识地刷视频，浪费了大量时间，**请不要责怪自己**。这不是你的自制力差，而是你正在对抗一个由顶尖心理学家、数据科学家和工程师组成的庞大团队。他们的目标就是攻破你的心理防线，利用多巴胺回路让你上瘾，而你只是一个手无寸铁的用户。

为了帮你夺回注意力的控制权，我们在原版 BewlyBewly 的基础上增加了 **Fuck Recommendation (拯救我的注意力)** 模式。

开启此模式后，你可以：
- **简洁模式**：隐藏首页的所有推荐视频，还你一个清爽的开始。
- **隐藏评论区**：眼不见心不烦，避免陷入无意义的争论和情绪消耗。
- **仅显示关注**：只看你主动选择关注的内容，拒绝算法投喂的“垃圾食品”。
- **隐藏视频推荐**：播放页右侧的推荐列表？消失吧，专注于当前的视频。
- **隐藏结束推荐**：视频播完了？那就结束，不要再诱惑我点开下一个。

我们希望通过这些功能，帮助你从算法的裹挟中挣脱出来，重新做回自己的主人。

## ⚡ 播放增强

- **扩展倍速播放**：在播放器中增加 3.0x, 4.0x, 5.0x 倍速选项，助你快速浏览长视频。

---

# 以下为原项目Readme

## 👋 介绍

> [!IMPORTANT]
> BewlyBewly 主要专注页面的调整和优化，而不是完善功能和提升效率。
>
> 由于效率和维护难度的原因，暗色模式只会适应常用页面，而不会适应不常用的页面。

> [!CAUTION]
> [BLBewly](https://apps.apple.com/us/app/blbewly/id6742200021) 是 Safari 上的免费 BewlyBewly 扩展程序。我们感谢 [𝗦𝘁𝗲𝘃𝗲 𝕏](https://x.com/st7evechou) 帮助我们免费将应用发布到 Safari。
> 但是，Safari 版本遇到的问题不在我们的维护范围内，我们不考虑 Safari 维护。

> [!CAUTION]
> 如果您正在安装此扩展程序，您的浏览器可能会提示它可以读取您的浏览历史记录。
>
> 这是因为 BewlyBewly 使用了["tabs" 权限](https://developer.chrome.com/docs/extensions/reference/api/tabs)，该权限也可用于读取每个标签页，从而了解浏览历史，但在这里并未使用。
>
> **一些浏览器会提到最坏的情况和最高的风险，以确保您在安装后的安全。**
> 此外，这个项目是开源的，所以您可以看到它究竟做了什么。

BewlyBewly 是一个用于 BiliBili 的浏览器扩展，旨在通过重新设计 BiliBili 用户界面来提升用户体验。设计灵感来自于 YouTube、Vision OS 和 iOS，从而实现了更具视觉吸引力和用户友好性的界面。

该项目使用 [vitesse-webext](https://github.com/antfu/vitesse-webext) 模板进行开发。如果没有这个模板，可能无法开发出这个项目。

## ⬇️ 安装

### 在线安装

> [!TIP]
> 即使在 Edge 浏览器中，我们也强烈建议您使用 Chrome 应用商店进行安装。在审核速度上，Chrome > 应用商店的审核速度比 Edge 应用商店快得多。
>
> 此外，BewlyBewly 的 Chrome Web Store 版本将更快地解决和修复关键性错误。

> [!IMPORTANT]
> 如果你的电脑无法访问 Chrome Web Store，你可以尝试去 crx 搜搜下载：<https://www.crxsoso.com/webstore/detail/bbbiejemhfihiooipfcjmjmbfdmobobp>
>
> 但与此项目在 Chrome Web Store 是否一致且未经修改不太能保证，但是经过测试是正常的，使用时请慎重，出现任何后果本项目概不负责

- Chrome: <https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp>
- Edge: <https://chromewebstore.google.com/detail/bewlybewly/bbbiejemhfihiooipfcjmjmbfdmobobp>
- Firefox: <https://addons.mozilla.org/zh-CN/firefox/addon/bewlybewly/>

#### 对于 Firefox 用户

> [!WARNING]
> 使用 Firefox 浏览器时，请记得启用下面图片中显示的所有权限，以正常使用 BewlyBewly

<br/> <img width="655" alt="enable all bewlybewly permissions on firefox" src="https://github.com/Rpeng666/BewlyBewly-Modified/assets/33394391/9566aed8-040a-4435-a2ec-c61117f8e429">

### 本地安装

[CI](https://github.com/Rpeng666/BewlyBewly-Modified/actions)：使用最新代码自动构建

[Releases](https://github.com/Rpeng666/BewlyBewly-Modified/releases)：稳定版

#### Edge 和 Chrome（推荐）

> 确保您下载了 [extension.zip](https://github.com/Rpeng666/BewlyBewly-Modified/releases)。

在 Edge 浏览器中打开 `edge://extensions` 或者在 Chrome 浏览器中打开 `chrome://extensions` 界面，只需将下载的 `extension.zip` 文件拖放到浏览器中即可完成安装。

<details>
 <summary> Edge & Chrome 的另一种安装方法 </summary>

#### Edge

> 确保您下载了 [extension.zip](https://github.com/Rpeng666/BewlyBewly-Modified/releases) 并解压缩该文件。

1. 在地址栏输入 `edge://extensions/` 并按回车
2. 打开 `开发者模式` 并点击 `加载已解压的拓展程序` <br/> <img width="655" alt="image" src="https://user-images.githubusercontent.com/33394391/232246901-e3544c16-bde2-480d-b770-ca5242793963.png">
3. 在浏览器中加载解压后的扩展文件夹

#### Chrome

> 确保您下载了 [extension.zip](https://github.com/Rpeng666/BewlyBewly-Modified/releases) 并解压缩该文件。

1. 在地址栏输入 `chrome://extensions/` 并按回车
2. 打开 `开发者模式` 并点击 `加载已解压的拓展程序` <br/> <img width="655" alt="Snipaste_2022-03-27_18-17-04" src="https://user-images.githubusercontent.com/33394391/160276882-13da0484-92c1-47dd-add8-7655c5c2bf1c.png">
3. 在浏览器中加载解压后的扩展文件夹

</details>

## 🤝 贡献与构建项目

查看 [CONTRIBUTING.md](docs/CONTRIBUTING-cmn_CN.md)

## ❤️ 鸣谢

- [vitesse-webext](https://github.com/antfu/vitesse-webext) - 该项目使用的模板
- [UserScripts/bilibiliHome](https://github.com/indefined/UserScripts/tree/master/bilibiliHome),
[bilibili-app-recommend](https://github.com/magicdawn/bilibili-app-recommend) - 获取访问密钥的参考来源
- [Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved) - 部分功能实现
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
