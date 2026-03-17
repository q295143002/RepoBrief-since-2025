## ADDED Requirements

### Requirement: GitHub Star Count Correction
- 导航栏中的 GitHub Star 数量应显示为 "1"。

### Requirement: 仓库卡片语言字段对齐
- 仓库卡片的底部区域（包含标签和语言）应垂直居中对齐，确保“Python”等语言文本与标签气泡处于同一水平线上。

### Requirement: 按需导出 Excel
- 点击导出按钮时，下载的项目清单必须仅包含当前搜索和筛选后的结果，而不是全量数据。

#### Scenario: 过滤后导出
- **GIVEN** 用户在搜索框输入了 "React" 且筛选出 5 个项目
- **WHEN** 用户点击“导出 Excel”
- **THEN** 生成的 Excel 文件应仅包含这 5 个项目的数据

## 边界情况与异常处理
- 如果没有筛选结果且点击导出，应提示无可导出内容或导出一份带表头的空文件。
