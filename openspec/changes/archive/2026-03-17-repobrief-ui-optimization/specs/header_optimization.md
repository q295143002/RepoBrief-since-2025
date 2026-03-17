## ADDED Requirements

### Requirement: GitHub 项目导航
- 在页面头部右侧新增 GitHub 项目导航组件。
- 该组件需显示 GitHub 图标、项目星数（数字旁带星星图标）。
- 点击组件应在新标签页中打开地址：`https://github.com/q295143002/RepoBrief-since-2025`。

#### Scenario: 初始加载
- **WHEN** 用户访问页面
- **THEN** 头部右侧应正确显示 GitHub 导航按钮及其当前的星数（如 43.5k）

#### Scenario: 点击跳转
- **WHEN** 用户点击 GitHub 导航按钮
- **THEN** 浏览器应在新窗口中打开项目的 GitHub 仓库页面

## 边界情况与异常处理
- 如果 GitHub API 调用失败或无法获取星数，应显示默认占位符或仅显示“Github”。
- 在移动端窄屏下，导航组件应根据空间自动隐藏文字或采用简化图标。
