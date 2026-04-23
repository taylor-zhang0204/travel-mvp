# AGENTS.md

本仓库的 AI 编码代理指南。完整的项目架构、Tamagui 用法、组件约定见 [CLAUDE.md](CLAUDE.md)。

## 核心要求

### 代码检查（强制）

**每次修改 `.ts` / `.tsx` / `.js` 代码后，必须执行 ESLint 检查并修复发现的问题：**

```bash
pnpm lint
```

工作流：

1. 完成代码修改后立即运行 `pnpm lint`
2. 如果有报错或警告，先尝试修复
3. 只有当 lint 通过（或仅剩与本次修改无关的既有问题）才能向用户汇报完成
4. 若问题无法自动修复，需在最终回复中明确说明剩余的 lint 问题及原因

仅修改非代码文件（如 `*.md`、`*.json` 配置说明）时可跳过。

## 包管理器

使用 **pnpm**，禁止使用 `npm` 或 `yarn`。

## 项目速览

- **框架**：Expo SDK 55 + expo-router（文件路由）+ React Native 0.83
- **UI**：Tamagui v2（细节见 [CLAUDE.md](CLAUDE.md)）
- **图标**：`@tamagui/lucide-icons-2`
- **路由入口**：[app/](app/)
- **共享代码**：[src/](src/)（`api/`、`components/`、`i18n/`、`store/`、`styles/`）

## 常用命令

| 命令                                     | 用途                 |
| ---------------------------------------- | -------------------- |
| `pnpm install`                           | 安装依赖             |
| `pnpm start`                             | 启动 Expo dev server |
| `pnpm ios` / `pnpm android` / `pnpm web` | 启动各平台           |
| `pnpm lint`                              | **改完代码必跑**     |
