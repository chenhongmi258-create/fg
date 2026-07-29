# 星河问天｜中国航天全景主题网站

这是一个 10 页沉浸式中国航天主题单页网站（SPA），融合现代深空高科技视觉与敦煌飞天国风浪漫。页面结构为 `#page-1` 至 `#page-10`，覆盖星河启航、敦煌飞天、嫦娥奔月、天问探火、天宫空间站、长征火箭、北斗、高分/探日、航天员精神与未来征途。

## 放入背景视频

把首页/全站背景视频放入 `assets` 文件夹，并命名为以下任一文件名：

```text
assets/home-background
assets/home-background.mp4
assets/home-background.webm
```

浏览器通常会阻止“自动播放并带声音”的视频，所以背景视频默认静音播放。网页右上角有“开启声音”按钮，点击后即可播放原视频声音。

封面视频现在只用于第 1 页，不再铺满全站；样式使用 `object-fit: contain` 和深空蓝蒙版，尽量保留视频字幕与完整画面，同时让它和网站主题色调融合。

## 放入 6 张图片

你提供的前 3 张现代航天图片、后 3 张敦煌飞天/神话图片，可以按下面文件名放入 `assets` 文件夹：

```text
assets/space-panorama-1       # 第 1 页：中国航天全景概览
assets/rocket-launch-1        # 第 6 页：长征火箭
assets/rocket-launch-2        # 第 5 页：天宫/发射相关背景
assets/feitian-1              # 第 2 页：敦煌飞天壁画
assets/feitian-astronaut      # 第 3 页：飞天与宇航员相遇
assets/space-panorama-3       # 第 10 页：未来深空展望
```

程序会优先读取你截图里的无后缀文件名，也兼容 `.jpg`、`.png`、`.webp` 后缀。
assets/space-panorama-1.jpg      # 第 1 页：中国航天全景概览
assets/rocket-launch-1.jpg       # 第 6 页：长征火箭
assets/rocket-launch-2.jpg       # 第 5 页：天宫/发射相关背景
assets/feitian-1.jpg             # 第 2 页：敦煌飞天壁画
assets/feitian-astronaut.jpg     # 第 3 页：飞天与宇航员相遇
assets/space-panorama-3.jpg      # 第 10 页：未来深空展望
```

如果你的文件是 `.png` 或 `.webp`，请把 `styles.css` 里对应 `background-image` 的文件名后缀改成你的实际后缀。
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

## 文件说明

- `index.html`：10 页内容结构、视频元素、导航与页面语义。
- `styles.css`：色彩变量、现代科技/国风页面主题、鎏金流动、飞天飘带、毛玻璃、视差视觉与响应式布局。
- `app.js`：平滑导航状态、滚动淡入、数字累加、视频声音开关与背景视差。
- `assets/README.md`：素材放置说明。
