# 素材放置说明

## 背景视频

请放入以下任一文件：

```text
home-background
home-background.mp4
home-background.webm
```

## 主题图片

建议把 6 张图片放入本目录，并使用以下文件名：

```text
space-panorama-1
rocket-launch-1
rocket-launch-2
feitian-1
feitian-astronaut
space-panorama-3
```

程序会优先尝试无后缀文件名，同时兼容 `.jpg`、`.png`、`.webp`。
space-panorama-1.jpg
rocket-launch-1.jpg
rocket-launch-2.jpg
feitian-1.jpg
feitian-astronaut.jpg
space-panorama-3.jpg
```

如果图片格式不同，请同步修改 `styles.css` 中对应的 `background-image` 路径。
# 背景视频放置说明

请把你要用于首页背景的第一个视频文件复制到本目录，并重命名为：

```text
home-background.mp4
```

最终路径应为：

```text
assets/home-background.mp4
```

主页中的 `<video>` 标签已经指向这个文件路径，所以放入并命名正确后，刷新网站首页即可看到视频背景。
