# Academic Personal Homepage

这是一个学术个人主页网站模板，基于 [Hanqi Jiang's Home Page](https://hq0709.github.io/) 设计。

## 功能特点

- 🎨 动态彩色背景特效
- 📱 响应式设计，支持移动端
- 📄 首页和个人主页结构
- 🔗 社交媒体链接
- 📚 论文列表页面
- 🏆 教育经历、荣誉奖励、工作经历展示
- 📰 新闻动态板块

## 文件结构

```
├── index.html              # 首页
├── publications.html       # 论文页面
├── .nojekyll               # GitHub Pages 配置
├── css/
│   └── style.css           # 主样式文件
├── js/
│   └── main.js             # 主 JavaScript 文件
├── images/
│   └── avatar.jpg          # 头像图片（需要自行添加）
└── README.md               # 说明文档
```

## 使用方法

### 1. 修改个人信息

在 `index.html` 文件中搜索 `TODO:` 注释，修改以下内容：

- 姓名
- 头像图片（放在 `images/avatar.jpg`）
- 学校/机构信息
- 研究方向
- 邮箱
- 社交媒体链接
- 教育经历
- 荣誉奖励
- 工作经历
- 审稿服务
- 新闻动态

### 2. 添加论文

在 `publications.html` 文件中，按照现有格式添加论文信息：

```html
<article class="publication-item">
    <h3 class="publication-title">论文标题</h3>
    <p class="publication-authors">
        <strong>你的名字</strong>, 作者2, 作者3
    </p>
    <p class="publication-venue">
        会议/期刊名称, 年份
    </p>
    <p class="publication-abstract">
        论文摘要...
    </p>
    <div class="publication-links">
        <a href="#" class="publication-link" target="_blank">Paper</a>
        <a href="#" class="publication-link secondary" target="_blank">Code</a>
    </div>
</article>
```

### 3. 自定义颜色主题

在 `css/style.css` 文件的 `:root` 部分修改颜色：

```css
:root {
    --primary-color: #1a73e8;      /* 主要链接和强调色 */
    --accent-color: #34a853;       /* 强调元素颜色 */
    --text-primary: #202124;       /* 主要文字颜色 */
    --text-secondary: #5f6368;     /* 次要文字颜色 */
    --link-color: #1a73e8;         /* 链接文字颜色 */
    --link-hover-color: #1557b0;   /* 链接悬停颜色 */
}
```

### 4. 修改背景特效

在 `css/style.css` 中可以修改 `.background-animation` 类的样式：

- 渐变颜色：`background: linear-gradient(...)`
- 动画速度：`animation: gradientBG 15s ease infinite;`

## GitHub Pages 部署

1. 创建 GitHub 仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 选择 main 分支作为源
5. 访问 `https://你的用户名.github.io/仓库名/`

## 自定义域名（可选）

如需使用自定义域名：

1. 在项目根目录创建 `CNAME` 文件
2. 在文件中写入你的域名（如 `example.com`）
3. 在域名服务商处配置 DNS 记录

## 技术栈

- HTML5
- CSS3（支持动画效果）
- JavaScript（原生）
- Bootstrap 5.3（用于响应式布局和组件）

## 浏览器支持

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）

## 许可证

MIT License - 可以自由修改和使用

## 致谢

设计灵感来自 [Hanqi Jiang's Home Page](https://hq0709.github.io/)

