# 2025 GitHub 趋势速递

**AI 核心摘要 · 顶级项目速览**

专注于顶级开源项目的 AI 核心摘要：只告诉你**它是什么**、**价值点在哪**、**如何开始**。用秒级速度读懂年度开源先锋，停止盲目刷榜。

---

## 数据来源

- 数据来自本仓库中的 **`github_repos.db`**（SQLite），内含约 479 条仓库记录（描述、摘要、标签等）。
- 通过导出脚本将 DB 转为标准化 Markdown 与 JSON，供本站与博客使用。

---

## 本仓库内容

| 路径 | 说明 |
|------|------|
| `repos/*.md` | 每个仓库一篇标准化说明（What it is / Problems solved / How to get started） |
| `_data/repos.json` | 全量列表数据，供 Jekyll 博客使用 |
| `index.md` | 按 stars 排序的索引页，可在仓库内直接预览 |
| Jekyll 站点 | 根目录即 Jekyll 项目，可发布为 GitHub Pages 博客 |

---

## 如何生成内容

在项目根目录执行（需 Python 3，无额外 pip 依赖）：

```bash
python3 scripts/export_from_db.py
```

可选：指定数据库路径：

```bash
python3 scripts/export_from_db.py --db /path/to/github_repos.db
```

脚本会覆盖生成：

- `repos/*.md`
- `_data/repos.json`
- 根目录 `index.md`

---

## 如何访问

- **博客（GitHub Pages）**  
  在仓库 **Settings → Pages** 中启用 Pages（Source: 默认分支根目录）。发布后访问：  
  `https://q295143002.github.io/RepoBrief-since-2025/`

- **仓库内预览**  
  在 GitHub 上打开根目录的 **`index.md`** 或任意 **`repos/xxx.md`**，即可使用 GitHub 自带的 Markdown 预览。

---

## 本地预览 Jekyll（可选）

```bash
bundle install
bundle exec jekyll serve
```

在浏览器打开 `http://127.0.0.1:4000/`。若为 project site，请在 `_config.yml` 中设置 `baseurl: "/本仓库名"`。
