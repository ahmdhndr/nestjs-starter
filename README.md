# NestJS Starter · ⚡️

Basic starter project for building scalable and maintainable [NestJS](https://nestjs.com) applications, equipped with developer-friendly tooling and CI-ready setup.

---

## ✨ Features

- 🚀 Built with [NestJS](https://nestjs.com)
- 📦 Auto-import sorting via `@trivago/prettier-plugin-sort-imports`
- 📝 Commit linting with [Conventional Commits](https://www.conventionalcommits.org/)
- 📄 Logger with [Pino](https://getpino.io/#/)
- ✅ CI Workflows for type checking & linting
  > Check `.github/workflows/ci.yml` for more details.

---

## 📦 Getting Started

This starter template assumes you are using `pnpm` as your package manager. Of course, `pnpm` and `npm` can be used interchangeably.

```bash
npx @ahmdhndrsyh/nestjs-starter my-app
cd my-app
pnpm start:dev
```

### 📋 Git Hooks & Commit Rules

This starter uses:

- [commitlint](https://commitlint.js.org/)
- [husky](https://typicode.github.io/husky/)

Conventional commit examples:

```bash
feat(auth): add JWT strategy
fix(core): fix logger context issue
chore: update dependencies
```

### 🔧 Tooling

| Tool                      | Purpose                       |
| ------------------------- | ----------------------------- |
| `pino`                    | Fast, structured logging      |
| `prettier + sort-imports` | Auto-format + sort imports    |
| `eslint`                  | Lint codebase                 |
| `husky` + `commitlint`    | Enforce clean commit messages |
| GitHub Actions            | Run Type Check & Linter       |
