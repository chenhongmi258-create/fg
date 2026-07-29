# 星河问天｜中国航天全景主题网站

这是一个 10 页沉浸式中国航天主题单页网站（SPA），融合现代深空高科技视觉与敦煌飞天国风浪漫。页面结构为 `#page-1` 至 `#page-10`，覆盖星河启航、敦煌飞天、嫦娥奔月、天问探火、天宫空间站、长征火箭、北斗、高分/探日、航天员精神与未来征途。

## 放入背景视频

把首页/全站背景视频放入 `assets` 文件夹，并命名为以下任一文件名：

```text
assets/home-background.mp4
assets/home-background.webm
```

浏览器通常会阻止“自动播放并带声音”的视频，所以背景视频默认静音播放。网页右上角有“开启声音”按钮，点击后即可播放原视频声音。

## 放入 6 张图片

你提供的前 3 张现代航天图片、后 3 张敦煌飞天/神话图片，可以按下面文件名放入 `assets` 文件夹：

```text
assets/space-panorama-1.jpg      # 第 1 页：中国航天全景概览
assets/rocket-launch-1.jpg       # 第 6 页：长征火箭
assets/rocket-launch-2.jpg       # 第 5 页：天宫/发射相关背景
assets/feitian-1.jpg             # 第 2 页：敦煌飞天壁画
assets/feitian-astronaut.jpg     # 第 3 页：飞天与宇航员相遇
assets/space-panorama-3.jpg      # 第 10 页：未来深空展望
```

如果你的文件是 `.png` 或 `.webp`，请把 `styles.css` 里对应 `background-image` 的文件名后缀改成你的实际后缀。

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
