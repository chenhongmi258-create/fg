# 中国航天宣传站

这是一个静态宣传网站，首页已经配置了全屏背景视频。

## 如何把你的视频放进来

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

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://127.0.0.1:4173/index.html
```
