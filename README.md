# 中国航天宣传站

这是一个静态宣传网站，首页已经配置了全屏背景视频。

## 如何把你的视频放进来

> 视频文件夹路径：`/workspace/fg/assets`
>
> 如果你的编辑器有文件树，请直接展开 `assets` 文件夹，把视频拖进去。

1. 在项目根目录下找到或创建 `assets` 文件夹。
2. 把你要作为主页背景的第一个视频文件放入 `assets` 文件夹。
3. 将该视频重命名为 `home-background.mp4`。
4. 确认最终路径是：

```text
assets/home-background.mp4
```

`index.html` 中的视频地址已经写好：

```html
<source src="assets/home-background.mp4" type="video/mp4" />
```

如果你的视频不是 MP4 格式，建议先转换成 MP4；或者把 `index.html` 中的 `src` 和 `type` 改成对应文件名与格式。

## 为什么视频默认没有声音

浏览器通常会阻止“自动播放并带声音”的视频。为了让背景视频能自动播放，首页视频默认使用静音播放。

首页主按钮区域有“开启视频声音”按钮。点击后，浏览器会把这次点击视为用户操作，然后允许视频取消静音并播放原视频声音。

## 如果页面还是静态、视频没有动

请优先检查这 4 点：

1. 文件必须真的在 `assets` 文件夹里面，而不是只放在浏览器下载目录或桌面。
2. 文件名必须完全是 `home-background.mp4`；如果是 WebM，也可以命名为 `home-background.webm`。
3. 注意不要变成 `home-background.mp4.mp4` 或 `home-background.MP4`。
4. 建议用本地服务器打开，不要直接双击 HTML 文件：

```bash
python3 -m http.server 4173
```

然后访问 `http://127.0.0.1:4173/index.html`。如果网站顶部出现红色提示，就说明浏览器没有读到视频文件。

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://127.0.0.1:4173/index.html
```
