# 学术主页部署指南

本指南将帮助您将学术主页部署到互联网，让其他人可以通过网址访问。

## 🚀 方法一：GitHub Pages（推荐，免费）

### 步骤 1：创建 GitHub 账号和仓库

1. 访问 [GitHub](https://github.com) 并注册账号（如果还没有）
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称建议：`zhengliang-liu-homepage` 或 `academic-homepage`
4. 设置为 **Public**（公开仓库）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 步骤 2：上传文件到 GitHub

**方法 A：使用 GitHub 网页上传（最简单）**

1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽上传：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. 在页面底部填写提交信息（如："Initial commit"）
4. 点击 "Commit changes"

**方法 B：使用 Git 命令行（推荐给有经验的用户）**

```bash
# 在项目文件夹中打开终端/命令行
cd "D:\Cursor Program\Zhengliang Liu Web"

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Academic homepage"

# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/zhengliang-liu-homepage.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 在仓库页面，点击右上角的 "Settings"（设置）
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 选择分支：`main` 或 `master`
5. 选择文件夹：`/ (root)`
6. 点击 "Save"
7. 等待几分钟，GitHub 会显示您的网站地址：
   ```
   https://YOUR_USERNAME.github.io/zhengliang-liu-homepage/
   ```

### 步骤 4：自定义域名（可选）

如果您有自己的域名（如 `zhengliangliu.com`）：

1. 在 GitHub Pages 设置中，找到 "Custom domain"
2. 输入您的域名
3. 在您的域名注册商处添加 CNAME 记录：
   - 类型：CNAME
   - 名称：www（或 @）
   - 值：YOUR_USERNAME.github.io

---

## 🌐 方法二：Netlify（免费，简单）

### 步骤 1：准备文件

确保所有文件都在一个文件夹中。

### 步骤 2：部署

1. 访问 [Netlify](https://www.netlify.com)
2. 使用 GitHub 账号登录（推荐）或注册新账号
3. 点击 "Add new site" → "Deploy manually"
4. 将整个项目文件夹拖拽到上传区域
5. 等待部署完成，Netlify 会提供一个随机域名（如 `random-name-123.netlify.app`）

### 步骤 3：自定义域名（可选）

1. 在站点设置中找到 "Domain settings"
2. 点击 "Add custom domain"
3. 输入您的域名并按照提示配置 DNS

---

## ⚡ 方法三：Vercel（免费，快速）

### 步骤 1：部署

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 导入您的 GitHub 仓库
5. 点击 "Deploy"，等待完成

### 步骤 2：访问

部署完成后，Vercel 会提供一个域名（如 `your-project.vercel.app`）

---

## 📝 部署后的检查清单

- [ ] 网站可以正常访问
- [ ] 所有链接（Google Scholar、GitHub 等）都能正常打开
- [ ] 头像图片显示正常（如果使用了本地图片，需要确保路径正确）
- [ ] 论文缩略图显示正常
- [ ] 移动端显示正常（用手机浏览器测试）
- [ ] 页面切换功能正常（Home ↔ Publications）

---

## 🔧 常见问题

### Q: 上传后网站显示空白？
A: 检查 `index.html` 中的文件路径是否正确，确保 `styles.css` 和 `script.js` 的路径匹配。

### Q: 图片不显示？
A: 
- 如果使用本地图片，确保图片文件也上传到 GitHub
- 或者使用在线图片链接（如 Imgur、GitHub 等）
- 检查图片路径是否正确

### Q: 如何更新网站内容？
A: 
- **GitHub Pages**：修改文件后，提交并推送到 GitHub，几分钟后自动更新
- **Netlify/Vercel**：如果连接了 GitHub，推送后自动更新；否则重新上传文件

### Q: 如何让网址更短或使用自定义域名？
A: 
- GitHub Pages：仓库名改为 `YOUR_USERNAME.github.io`，网站地址会变成 `https://YOUR_USERNAME.github.io`
- 或购买域名并在设置中配置自定义域名

---

## 📚 推荐资源

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [Netlify 文档](https://docs.netlify.com/)
- [Vercel 文档](https://vercel.com/docs)

---

## 💡 提示

1. **定期备份**：建议将代码保存在 GitHub，这样即使本地文件丢失也能恢复
2. **版本控制**：使用 Git 管理代码变更，方便回退和协作
3. **SEO 优化**：在 `index.html` 的 `<head>` 中添加 meta 标签，提高搜索引擎可见性
4. **性能优化**：压缩图片大小，使用 CDN 加速

---

祝您部署顺利！如有问题，欢迎查阅相关文档或寻求帮助。
