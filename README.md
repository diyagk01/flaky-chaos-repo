# 🧨 Flaky Chaos Repo

This repo is intentionally unstable and designed to stress-test AI coding agents.

## 💥 What's Inside

This repo contains:

- **Random logic** - Functions that return different values on each run
- **Async flakiness** - Timing-based nondeterministic behavior
- **Race conditions** - Shared state that breaks unpredictably
- **Nondeterministic tests** - Tests that fail ~50-80% of the time
- **Edge case chaos** - Impossible-to-predict special cases

## 🎯 Purpose

Designed to generate maximum retries when used with AI coding agents like Jules. Perfect for testing:

- Patch generation strategies
- Critic evaluation systems
- Retry logic and backtracking
- Agent reasoning under uncertainty
- RetryLens observability dashboards

## 🚀 Usage

```bash
npm install
npm test
```

And watch the world burn. 🔥

## 📊 Expected Behavior

Tests will fail randomly. An AI agent attempting to fix them will:

1. ❌ Fail tests (random failures)
2. ✔️ Propose a patch
3. ❌ Fail again (different random failure)
4. ✔️ Try a different approach
5. ❌ Break other tests accidentally
6. ✔️ Retry with yet another strategy
7. ❌ Get stuck in backtracking
8. ✔️ Eventually fix the root cause (remove randomness)

**Minimum expected retries: 3-6**

Perfect for showcasing retry analysis and observability systems.

## 🛠️ Files

- `src/add.js` - Random addition (fails ~50% of time)
- `src/subtract.js` - Random subtraction with edge case chaos
- `src/asyncCalc.js` - Async timing-based flakiness
- `src/race.js` - Race condition simulator
- `tests/*.test.js` - Corresponding flaky tests

## ⚠️ Warning

Do NOT use this in production. This is a chaos engineering tool for AI agent testing only.

---

Built with 💣 for RetryLens

