# 2025 GitHub 趋势速递：DB 导出 + 标准化 MD + Jekyll 博客 — 设计说明

**日期**: 2025-03-16  
**状态**: 设计已定，待实现

---

## 1. 目标与范围

- **项目宗旨**：2025 GitHub 趋势速递 — 专注于顶级项目的 AI 核心摘要，只传达「是什么、价值点、如何开始」，用秒级速度读懂年度开源先锋。
- **数据源**：`github_repos.db`（只读），表 `repositories`，约 479 条记录；不按 `status` 过滤，导出全部。
- **本版内容语言**：英文（使用 `english_summary`、`original_description` 等英文字段）；后续单独做中文版（翻译后输出到 `repos-zh/` 与 `_data/repos-zh.json`）。

---

## 2. 整体架构与仓库布局

- **数据流**：`github_repos.db` → 导出脚本 → `repos/*.md` + `_data/repos.json`（+ 可选 `index.md` 索引）。Jekyll 只读生成好的文件，不直连 DB。
- **目录与产物**：
  - `repos/`：每个仓库一个标准化 MD 文件（当前为英文版）。
  - `_data/repos.json`：Jekyll 用全量列表数据（元数据 + 摘要等）。
  - 根目录或指定位置：Jekyll 站点（`_config.yml`、layouts、`index`、assets 等）。
  - 根目录 `README.md`：项目说明、如何运行脚本、如何访问博客与 MD 列表。
  - 可选：由脚本生成的 `index.md`，作为「仓库内可预览」的完整索引页。

---

## 3. 数据流与脚本职责

- **单一导出脚本**（如 `scripts/export_from_db.js` 或 `scripts/export_from_db.py`）：
  - 读取 `github_repos.db` 的 `repositories` 表，遍历所有行。
  - 对每条记录：用英文字段生成单仓 MD，写入 `repos/<slug>.md`。
  - 汇总所有记录为结构化数据，写入 `_data/repos.json`。
  - 可选：生成/覆盖索引页 `index.md`（指向各 `repos/<slug>.md` 的链接列表）。
- **幂等**：每次运行根据当前 DB 全量重写上述文件，便于数据更新后重新生成。

---

## 4. 单仓 MD：文件名与内容格式

- **文件名 / slug**：
  - 由 `repo_name` 生成：先转为小写，将所有 `/` 替换为 `-`（支持多级如 `org/subgroup/repo` → `org-subgroup-repo`），空格与下划线替换为 `-`，去掉不在 `[a-z0-9-]` 的字符，将连续多个 `-` 合并为一个，去掉首尾 `-`，得到基础 slug；扩展名为 `.md`，全部放在 `repos/` 下。
  - **重名**：若基础 slug 已存在，在该条记录后追加 `_<id>`（使用 DB 主键 `repositories.id`），如 `owner-repo_912559512.md`。
  - **`title`**：无单独 DB 列时，用 `repo_name` 作为展示标题（即 frontmatter 与 `_data/repos.json` 的 `title` 均取 `repo_name`）。
  - **`tags`**：来自 DB 列 `tags`（逗号分隔字符串）；导出时按逗号拆分、去空格后存为数组写入 frontmatter 与 JSON。
- **Frontmatter（YAML）**：`title`、`repo_name`、`url`、`stars`、`language`、`tags`（数组）；可选 `layout: repo`（若使用，需在 Jekyll 中提供对应 layout 文件）。
- **正文（全英文）**：
  - **What it is**：优先 `english_summary`，空则 `original_description`。
  - **Problems solved**：`problems_solved` 在 DB 中为纯文本（可能多行）；MD 正文中原样输出，保留原有换行与格式，不做自动列表转换。
  - **How to get started**：`how_to_use` 原样输出，不做自动代码块检测或包装。
- 某字段为空时对应小节可省略或写 "—"。正文仅用标准 Markdown，不写 HTML。

---

## 5. 索引 README / index.md 与 _data/repos.json

- **根目录 README.md**：项目名与宗旨；数据来源说明；如何运行导出脚本（命令 + 依赖）；如何访问博客（Pages URL）及在仓库内预览 MD；可选简短项目列表或链接到完整索引 `index.md`。
- **index.md（可选，推荐）**：由脚本生成。列表**默认按 stars 降序**排序；可选支持按 `repo_name` 字母序。每行：`[repo_name](repos/<slug>.md)`、stars、language、一行摘要；纯 Markdown，便于在 GitHub 内预览。
- **`_data/repos.json` 字段**：数组，每项含 `id`、`repo_name`、`url`、`stars`、`language`、`slug`、`title`（同 `repo_name`）、`summary`、`problems_solved`（可选，字符串）、`how_to_use`（可选，字符串）、`tags`（数组，来自 DB 列 `tags` 逗号拆分）。`slug` 与单仓 MD 文件名（不含 `.md`）一致，便于 Jekyll 列表与单页对应。

---

## 6. Jekyll 博客：结构、首页、单页与导航

- **站点**：Jekyll 放在仓库根（或子目录如 `blog/`）；`_config.yml` 配置 title、description、baseurl（project site 用 `/<repo名>`）、markdown 等；不依赖非白名单插件，保证 GitHub Pages 可构建。
- **单仓 MD 与 URL**：脚本输出到 **`repos/`**（不做成 `_repos/` collection）。Jekyll 默认会将 `repos/` 下 `.md` 当作普通页面处理，生成 URL `/repos/<slug>.html`（或通过 frontmatter 设置 `permalink: /repos/:slug/` 得到目录式 URL）。不在 `_config.yml` 中排除 `repos/` 目录即可。
- **首页**：用 `site.data.repos` 渲染列表；每条展示标题（链到单页）、stars、language、一行 summary、tags；默认按 stars 降序；页头/页脚含站点标题与数据来源说明。
- **单仓页**：每篇为 `repos/<slug>.md`，使用统一 layout（如 `layout: repo` 时需在 `_layouts/repo.html` 中实现）展示 frontmatter + 正文（What it is、Problems solved、How to get started）及链到 GitHub 的 url。
- **导航**：顶部「Home / All repos」；单仓页「Back to list」指回首页。样式用默认或轻量主题，可少量自定义 CSS。

---

## 7. 错误处理与边界情况

- 脚本启动时检查 DB 存在且可读，否则报错退出。
- 单条记录必填字段为空时仍生成该条，缺失处用 "—" 或 "N/A"；`english_summary` 空则用 `original_description`，两者皆空则 "What it is" 写 "—" 或 "No description."
- **Slug 规则**：按 §4 执行（小写、`/`/空格/下划线→`-`、仅保留 `[a-z0-9-]`、合并并去掉首尾 `-`）；**重名时仅使用 DB 主键**：在 slug 后追加 `_<id>`（如 `repositories.id`），不再使用数字后缀，保证规则唯一。
- Jekyll 不依赖非常规插件；frontmatter 与正文中特殊字符（如未转义的 `"`、多余 `---`）做必要转义或安全格式（YAML 中字符串用引号、正文中 `---` 与 frontmatter 用空行隔离），避免解析错误。

---

## 8. 后续中文版扩展（预留）

- 当前仅实现英文版。后续可增加导出逻辑：读 `chinese_summary` 等，输出 `repos-zh/<slug>.md` 与 `_data/repos-zh.json`；Jekyll 通过 data/permalink 区分语言或单独入口。数据结构与 slug 与英文版一致以便扩展。

---

## 9. 验收要点

- 运行导出脚本后：`repos/` 下存在与 DB 记录数一致的 MD 文件；`_data/repos.json` 条数与之一致且 slug 对应正确。
- 根目录 README 说明完整，索引页（若有）在仓库内可预览且链接有效。
- Jekyll 本地/Pages 构建成功；首页列表可点击进入单仓页；单仓页展示完整 frontmatter 与三段式正文。
- GitHub Pages 发布后，通过 `https://<username>.github.io/<repo>/` 可访问博客首页。
