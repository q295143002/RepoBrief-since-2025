# 2025 GitHub 趋势速递 — 导出与博客实现计划

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 从 `github_repos.db` 导出标准化 Markdown 与 JSON，并搭建 Jekyll 博客，支持 GitHub 内预览与 GitHub Pages 访问。

**Architecture:** 单一 Python 脚本读 SQLite，按 spec 的 slug 规则生成 `repos/<slug>.md` 与 `_data/repos.json`，并生成根目录 `index.md` 作为索引；Jekyll 以仓库根为站点，首页用 `site.data.repos` 渲染列表，单仓页使用 `repos/*.md` + `layout: repo`。

**Tech Stack:** Python 3 (stdlib `sqlite3`)、Jekyll（GitHub Pages 默认）、Liquid、标准 Markdown。

**Spec:** `docs/superpowers/specs/2025-03-16-github-trends-export-and-blog-design.md`

---

## File Structure

| Path | Responsibility |
|------|----------------|
| `scripts/export_from_db.py` | 读 DB，生成 slug，写 `repos/*.md`、`_data/repos.json`、根目录 `index.md` |
| `repos/<slug>.md` | 单仓标准化 MD（frontmatter + What it is / Problems solved / How to get started） |
| `_data/repos.json` | Jekyll 用全量列表（id, repo_name, url, stars, language, slug, title, summary, tags, …） |
| `index.md` | 脚本生成的索引页（frontmatter + 按 stars 降序的链接列表），兼作 Jekyll 首页与仓库内预览 |
| `README.md` | 项目说明、数据来源、如何运行脚本、如何访问博客与 MD |
| `_config.yml` | Jekyll 配置（title, baseurl, markdown, 不排除 repos/） |
| `_layouts/default.html` | 默认 layout（导航、页脚、`{{ content }}`） |
| `_layouts/repo.html` | 单仓页 layout（frontmatter 展示、正文、Back to list） |

---

## Chunk 1: 导出脚本与生成物

### Task 1.1: 脚本骨架与 DB 读取

**Files:**
- Create: `scripts/export_from_db.py`
- Create: `requirements.txt`（若需依赖则留空或仅注释；当前仅用 stdlib）

- [ ] **Step 1: 实现脚本入口与 DB 检查**

在 `scripts/export_from_db.py` 中：
- 使用 `argparse` 或固定路径，默认读取项目根目录下的 `github_repos.db`（脚本可接受一个可选参数 `--db path`）。
- 若文件不存在或无法打开，打印错误并 `sys.exit(1)`。
- 连接 SQLite，执行 `SELECT * FROM repositories`，将每行映射为字典（列名 → 值），存入列表 `rows`。
- 打印 `Loaded N repositories` 后退出（暂不写文件）。

- [ ] **Step 2: 验证 DB 读取**

在项目根执行：
```bash
python3 scripts/export_from_db.py
```
预期：输出 `Loaded 479`（或当前表行数），无报错。

- [ ] **Step 3: Commit**

```bash
git add scripts/export_from_db.py
git commit -m "chore: add export script skeleton and DB read"
```

---

### Task 1.2: Slug 生成与唯一化

**Files:**
- Modify: `scripts/export_from_db.py`

- [ ] **Step 1: 实现 slug 函数**

按 spec §4、§7：
- 输入 `repo_name`（str）和 `id`（int，DB 主键）。
- 生成基础 slug：小写 → 将 `/`、空格、`_` 替换为 `-` → 只保留 `[a-z0-9-]` → 连续 `-` 合并 → 去掉首尾 `-`；若结果为空则用 `repo-<id>`。
- 返回 `(base_slug, id)`；调用方将用「已见 slug 集合」做重名检测。

- [ ] **Step 2: 实现唯一 slug 列表**

对 `rows` 顺序遍历，维护 `seen: set`。对每条记录调用 slug 函数得到 `base_slug`；若 `base_slug` 已在 `seen` 中，则使用 `base_slug + "_" + str(id)`，否则使用 `base_slug`。将最终 slug 加入 `seen`，并在该条记录上附加 `slug` 字段（供后续写 MD 与 JSON 使用）。

- [ ] **Step 3: 验证 slug**

临时在脚本末尾打印前 3 条记录的 `repo_name` 与 `slug`，运行脚本查看输出是否符合规则（如 `owner/repo-name` → `owner-repo-name`）。

- [ ] **Step 4: 移除临时打印并 Commit**

删除调试输出，提交：
```bash
git add scripts/export_from_db.py
git commit -m "feat(export): slug generation and collision handling"
```

---

### Task 1.3: 单仓 MD 与 _data/repos.json 生成

**Files:**
- Modify: `scripts/export_from_db.py`
- Create: 目录 `repos/`、`_data/`（脚本内若不存在则创建）

- [ ] **Step 1: 实现单条记录 → frontmatter + 正文**

- **title**: 使用 `repo_name`。
- **tags**: 从 DB 列 `tags`（字符串）按逗号拆分，strip 后得到列表；若为空则 `[]`。
- **layout**: 固定写 `repo`，供 Jekyll 使用 `_layouts/repo.html`。
- **summary 文本**: 优先 `english_summary`，空则 `original_description`；再空则 `"—"`。
- **problems_solved / how_to_use**: 原样使用 DB 值；空则对应小节不输出或写 "—"。
- 正文三段：**What it is**（summary 文本）、**Problems solved**（原样）、**How to get started**（原样）。YAML 中字符串若含 `:` 或换行用引号包裹；正文与 frontmatter 之间用 `---` 加空行分隔。

- [ ] **Step 2: 写入 repos/<slug>.md**

对每条记录，生成完整 MD 内容（frontmatter + `---` + 正文），写入 `repos/<slug>.md`。路径以项目根为基准（脚本可通过 `__file__` 定位项目根：`script_dir = os.path.dirname(os.path.abspath(__file__))`, `root = os.path.dirname(script_dir)`）。

- [ ] **Step 3: 构建并写入 _data/repos.json**

构建列表 `data`：每条为 dict，含 `id`, `repo_name`, `url`, `stars`, `language`, `slug`, `title`(=repo_name), `summary`, `problems_solved`, `how_to_use`, `tags`（数组）。用 `json.dump(data, fp, ensure_ascii=False, indent=2)` 写入 `_data/repos.json`。

- [ ] **Step 4: 运行脚本并抽查**

```bash
python3 scripts/export_from_db.py
```
检查：`repos/` 下 MD 数量与 DB 行数一致；`_data/repos.json` 条数一致；打开 1～2 个 `repos/*.md` 检查 frontmatter 与三段式正文。

- [ ] **Step 5: Commit**

```bash
git add scripts/export_from_db.py repos/ _data/
git commit -m "feat(export): generate repos/*.md and _data/repos.json"
```

---

### Task 1.4: 生成根目录 index.md（索引页）

**Files:**
- Modify: `scripts/export_from_db.py`

- [ ] **Step 1: 生成 index.md 内容**

- 对 `data` 按 `stars` 降序排序（None 或缺失视为 0）。
- 首行为 frontmatter：`title`、`layout: default`（供 Jekyll 用），然后 `---`。
- 正文：一级标题如 "All repositories (by stars)"，然后对每条输出一行：`- [repo_name](repos/<slug>.md) · ⭐ stars · language · summary 首行截断（约 80 字符）`。
- 写入项目根目录 `index.md`（覆盖）。

- [ ] **Step 2: 运行并检查**

```bash
python3 scripts/export_from_db.py
```
打开根目录 `index.md`，确认链接指向 `repos/<slug>.md` 且排序正确。

- [ ] **Step 3: Commit**

```bash
git add scripts/export_from_db.py index.md
git commit -m "feat(export): generate index.md repo list"
```

---

## Chunk 2: Jekyll 站点

### Task 2.1: Jekyll 配置与默认 layout

**Files:**
- Create: `_config.yml`
- Create: `_layouts/default.html`

- [ ] **Step 1: 编写 _config.yml**

- `title`: "2025 GitHub Trends"
- `description`: 一句话（与 README 宗旨一致）
- `baseurl`: 若 Pages 用 project site 则为 `"/<repo名>"`（如 `/two` 或实际仓库名）
- `markdown`: kramdown
- 不设置 `exclude` 排除 `repos/`，确保 `repos/*.md` 被当作页面处理。

- [ ] **Step 2: 编写 _layouts/default.html**

- 简单 HTML5 结构；`<head>` 内 title 用 `{{ page.title }}`。
- `<body>`：顶部导航 "Home" 链接到 `{{ site.baseurl }}/` 或 `/`；`<main>{{ content }}</main>`；页脚写数据来源与仓库链接。

- [ ] **Step 3: 本地构建验证**

```bash
bundle init && echo 'gem "github-pages", group: :jekyll_plugins' >> Gemfile && bundle install
jekyll build
```
（若无 Jekyll 环境可暂用 `docker run -v $(pwd):/src jekyll/jekyll jekyll build` 或跳过，在后续任务中再验。）

- [ ] **Step 4: Commit**

```bash
git add _config.yml _layouts/default.html
git commit -m "feat(jekyll): add config and default layout"
```

---

### Task 2.2: 首页使用 site.data.repos

**Files:**
- Modify: `index.md`（或确保由脚本生成的 index.md 的 frontmatter 含 `layout: default`）
- Create: 若希望首页为纯 Liquid 列表而非脚本生成的 MD，可改为 `index.html`（见下）

说明：当前设计为脚本生成 `index.md` 且含 `layout: default`，则 Jekyll 会将 `index.md` 作为首页渲染，内容已是列表。若希望首页由 Jekyll 从 `site.data.repos` 动态渲染（便于后续加筛选），可新增 `index.html`（layout: default，内容为 Liquid 循环）；此时可将脚本生成的索引改名为 `REPOS_INDEX.md` 或保留 `index.md` 仅作仓库内预览用。为简单起见，本计划采用「脚本生成 index.md 即首页」；若需改为 data 驱动首页，可在本任务中增加 `index.html` 用 Liquid 遍历 `site.data.repos` 并链接到 `/repos/<slug>.html`。

- [ ] **Step 1: 确认首页行为**

若保留脚本生成的 `index.md` 为首页：确保其 frontmatter 含 `layout: default`，无需改代码。若改为 data 驱动：创建 `index.html`，frontmatter `layout: default`，正文用 Liquid 遍历 `site.data.repos | sort: "stars" | reverse`，每条输出标题（链接到 `/repos/{{ r.slug }}.html`）、stars、language、summary 摘要；并可将脚本生成的索引改写到 `REPOS_INDEX.md` 供仓库内预览。

- [ ] **Step 2: Commit**

按实际选择提交（如仅确认则无需改文件可跳过 commit；若有新增 `index.html` 则 commit）。

---

### Task 2.3: 单仓页 layout（repo）

**Files:**
- Create: `_layouts/repo.html`
- 确保 `repos/*.md` 的 frontmatter 含 `layout: repo`（在 Task 1.3 的脚本中已写入）

- [ ] **Step 1: 编写 _layouts/repo.html**

- 使用 `layout: default` 的包装方式（在 default 中 `{{ content }}`），或直接在 repo 中写完整 HTML 结构（含与 default 一致的导航与页脚）。
- 展示 frontmatter：`page.repo_name`、`page.url`（链到 GitHub）、`page.stars`、`page.language`、`page.tags`。
- 正文：`{{ content }}`（即 MD 渲染后的 What it is、Problems solved、How to get started）。
- "Back to list" 链接到 `{{ site.baseurl }}/`。

- [ ] **Step 2: 确认 frontmatter 含 layout: repo**

Task 1.3 中已在 frontmatter 写入 `layout: repo`。若无，则在脚本中补上并重新生成；确认 `repos/<slug>.md` 含 `layout: repo`。

- [ ] **Step 3: 本地构建并打开单页**

```bash
jekyll build
# 检查 _site/repos/<某slug>.html 存在且含正文
```

- [ ] **Step 4: Commit**

```bash
git add _layouts/repo.html scripts/export_from_db.py
git commit -m "feat(jekyll): repo layout and layout frontmatter"
```

---

### Task 2.4: README 与收尾

**Files:**
- Create or Modify: `README.md`

- [ ] **Step 1: 编写 README.md**

内容包含：
- 项目名称与宗旨（2025 GitHub 趋势速递，AI 核心摘要）。
- 数据来源：`github_repos.db`，约 479 条。
- 仓库内容：`repos/*.md` 单仓说明、`_data/repos.json`、Jekyll 博客。
- 如何生成：`python3 scripts/export_from_db.py`（建议在项目根执行）；依赖 Python 3，无额外 pip 依赖。
- 如何访问：博客通过 GitHub Pages 发布后访问 `https://<username>.github.io/<repo>/`；在仓库内可点击根目录 `index.md` 或 `repos/*.md` 使用 GitHub 自带预览。

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README with project intro and run instructions"
```

---

## Verification

- [ ] 运行 `python3 scripts/export_from_db.py`，确认无报错，`repos/` 与 `_data/repos.json`、`index.md` 已更新。
- [ ] `bundle exec jekyll build` 或 `jekyll build` 成功，`_site/` 下存在首页与 `repos/*.html`。
- [ ] 在仓库设置中启用 GitHub Pages（Source: main 根目录或指定分支），确认可访问博客首页与单仓页。
