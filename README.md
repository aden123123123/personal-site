# 一隅 · 个人网站

一个使用 [Astro](https://astro.build/) 搭建的极简个人网站，用来记录生活、读书和照片。网站是纯静态的：没有数据库、登录、评论，也不需要服务器维护，可以直接部署到 Vercel。

## 第一次使用：先换成你的信息

按下面顺序修改即可：

1. 打开 `src/consts.ts`，可以修改名字、网站名和简介。
2. 打开 `src/content/pages/about.md`，把示例自我介绍改成你的内容，删除末尾的提醒。
3. 打开 `src/content/pages/now.md`，改成你最近的状态，并把 `updatedDate` 改成当天日期。
4. 打开 `src/pages/index.astro`，修改首页介绍和右侧“此刻”卡片的文字。
5. 第一次部署后，把 `astro.config.mjs` 里的 `site` 改成 Vercel 给你的正式网址。

在 VS Code 里按 `Ctrl + Shift + F` 搜索“杨林”或“Yang Lin”，可以快速找到所有姓名位置。

### 更换头像

当前头像原图是 `src/assets/profile.jpg`，网页会通过 `src/components/ProfilePhoto.astro` 自动裁切面部区域。以后更换头像时，最简单的方法是用新的 JPG 图片覆盖 `profile.jpg`，保持文件名不变。

## 平时怎么启动网站

第一次拿到项目时安装依赖：

```bash
npm install
```

后台启动开发服务器：

```bash
npm run dev
```

浏览器打开 [http://localhost:4321](http://localhost:4321)。常用管理命令：

```bash
npm run dev:status  # 查看是否正在运行
npm run dev:logs    # 查看运行日志
npm run dev:stop    # 停止开发服务器
```

修改文件并保存后，刷新浏览器即可看到变化。

## 新增一篇随笔

1. 打开 `src/content/essays/`。
2. 复制任意一个 `.md` 文件并改名，例如 `第一次远行.md`。
3. 修改文件最上面的信息和下面的正文。

可以直接复制这个模板：

```md
---
title: 文章标题
description: 一句话介绍这篇文章
pubDate: 2026-06-28
tags: [生活, 随想]
draft: false
---

从这里开始写正文。

## 一个小标题

继续写……
```

- 日期必须写成 `年-月-日`。
- `draft: true` 表示草稿，不会出现在网站；写完改成 `false` 即可发布。
- 文件名会成为网址的一部分，发布后尽量不要改名。

## 新增一本读书记录

1. 打开 `src/content/books/`。
2. 复制任意一个 `.md` 文件并改成书名。
3. 使用下面的格式填写。

```md
---
title: 书名
author: 作者
description: 一句话阅读感受
pubDate: 2026-06-28
status: 读完
rating: 5
tags: [小说, 成长]
draft: false
---

从这里写读书笔记。
```

- `status` 只能写 `想读`、`在读` 或 `读完`。
- `rating` 是 1 到 5；不想评分时，可以整行删除。
- 草稿规则和随笔相同。

## 新增或替换照片

照片分两步管理：图片放在 `src/assets/`，标题等信息放在 `src/data/photos.ts`。

1. 把照片复制到 `src/assets/`，建议使用英文文件名，例如 `summer-evening.jpg`。
2. 打开 `src/data/photos.ts`，在顶部加入：

```ts
import summerEvening from '../assets/summer-evening.jpg';
```

3. 在 `photos` 数组的最上方加入：

```ts
{
  src: summerEvening,
  alt: '夕阳照在河面上',
  caption: '夏日晚风',
  date: '2026.06'
},
```

`alt` 是图片无法显示或读屏软件使用时的说明，应简短描述画面。当前照片都保存在 `src/assets/photos/`，替换时同步修改对应的 `import` 和数组项目即可。

建议：

- 使用 JPG、PNG、WebP 或 AVIF。
- 单张照片最好控制在 5 MB 以内，Astro 构建时还会自动生成适合不同屏幕的尺寸。
- 横图、竖图都可以；页面会自动裁切缩略图。

## 更新关于我和 Now

- 关于我：编辑 `src/content/pages/about.md`。
- Now：编辑 `src/content/pages/now.md`，同时更新顶部的 `updatedDate`。

它们都使用 Markdown。常用写法：

```md
## 二级标题

普通段落，**这里是粗体**，[这里是链接](https://example.com)。

- 列表第一项
- 列表第二项

> 这里是一段引用。
```

## 发布前检查

每次发布前运行：

```bash
npm run build
```

看到构建成功后，`dist/` 就是生成的网站文件。这个命令也会检查 Markdown 顶部的信息格式；如果写错日期或字段，会直接告诉你是哪一个文件。

## 部署到 Vercel

最适合新手的方式：

1. 在 GitHub 新建一个仓库，把这个项目上传到仓库。
2. 登录 [Vercel](https://vercel.com/)，点击 **Add New → Project**。
3. 选择刚才的 GitHub 仓库并导入。
4. Vercel 通常会自动识别 Astro。构建命令保持 `npm run build`，输出目录保持 `dist`。
5. 点击 **Deploy**。以后每次把修改推送到 GitHub，Vercel 都会自动更新网站。
6. 部署完成后复制网址，填入 `astro.config.mjs` 的 `site`，再提交一次。

本项目使用 Astro 的默认静态输出，因此部署到 Vercel 不需要安装 adapter，也不需要添加数据库或环境变量。

## 项目结构

```text
src/
├─ assets/              图片文件
├─ components/          导航、列表等可复用组件
├─ content/
│  ├─ essays/           随笔 Markdown
│  ├─ books/            读书 Markdown
│  └─ pages/            关于我和 Now
├─ data/photos.ts       照片清单
├─ layouts/             全站与文章布局
├─ pages/               每个网址对应的页面
├─ styles/global.css    全站颜色、字体和排版
├─ consts.ts            网站名、作者名、简介
└─ content.config.ts    Markdown 字段规则
```

## 常见问题

**新增内容后页面没出现？** 先确认 `draft` 是 `false`，再看开发服务器日志。

**改坏了怎么办？** 先看终端报错指出的文件和行号。大多数情况是 Markdown 顶部漏了冒号、引号或日期格式不对。

**想换颜色？** 修改 `src/styles/global.css` 最上方的 `--paper`、`--ink` 和 `--accent`。

**想绑定自己的域名？** 在 Vercel 项目的 **Settings → Domains** 添加域名，然后同步修改 `astro.config.mjs` 的 `site`。
