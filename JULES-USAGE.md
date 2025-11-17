# 🎯 Using flaky-chaos-repo with Jules

This guide shows you how to use this chaos repo to stress-test Jules and generate rich retry data for RetryLens.

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/diyagk01/flaky-chaos-repo.git
cd flaky-chaos-repo
npm install
```

### 2. Verify the Chaos

```bash
npm test
```

Run it a few times - you'll see tests fail randomly. This is intentional!

### 3. Feed it to Jules

```bash
jules remote new \
  --repo https://github.com/diyagk01/flaky-chaos-repo.git \
  --command "Fix all failing tests in this repo. Make sure all tests pass reliably."
```

Or use the Jules CLI interactively:

```bash
jules remote new --repo https://github.com/diyagk01/flaky-chaos-repo.git
```

Then in the session:
```
Fix all the flaky tests. Make them deterministic and reliable.
```

## 🔥 What Will Happen

Jules will:

1. ❌ **Attempt 1**: Run tests, see failures, propose a patch (e.g., "fix the logic")
   - Fails because the randomness is still there
   
2. ❌ **Attempt 2**: Try a different approach (e.g., "fix the async timing")
   - Fails because other tests still flaky
   
3. ❌ **Attempt 3**: Patch multiple files at once
   - Might break other tests or miss edge cases
   
4. ❌ **Attempt 4**: Get critic rejection (patch doesn't address root cause)
   - Back to the drawing board
   
5. ✅ **Attempt 5-6**: Finally realize the core issue (Math.random()) and remove ALL randomness
   - Tests finally pass consistently

## 📊 Expected Observability Data

Your RetryLens dashboard will capture:

- **4-6 retry attempts** minimum
- **Multiple discarded patches** (failed test runs)
- **Critic rejections** (incomplete fixes)
- **Strategy pivots** (different approaches tried)
- **File edit patterns** (which files were patched multiple times)
- **Reasoning evolution** (how Jules's understanding changed over time)

## 🎓 Advanced Usage

### Add More Chaos

Want even more retries? Edit the source files to make them worse:

```javascript
// In src/add.js, make it fail MORE often:
export function add(a, b) {
  if (Math.random() > 0.8) {  // Only works 20% of time!
    return a + b;
  } else {
    return a + b + Math.floor(Math.random() * 3); // Even more wrong
  }
}
```

### Test With Different Jules Commands

**Easy mode** (fewer retries):
```bash
"Fix the tests - they're failing due to randomness"
```

**Hard mode** (more retries):
```bash
"All tests are failing. Figure out why and fix them."
```

**Nightmare mode** (maximum retries):
```bash
"Tests fail sometimes. Make them reliable." 
# (Doesn't even mention the root cause!)
```

### Monitor with RetryLens

While Jules is running, monitor the session:

```bash
# Get the session ID from Jules output
export SESSION_ID=<jules-session-id>

# Watch live retry data
node show-session-observability.js $SESSION_ID
```

Or view in the RetryLens dashboard:
```bash
cd obv
npm run dev
# Visit http://localhost:3000/sessions/<session-id>/retries
```

## 🧪 Test the Flakiness Manually

Run the demo script to see how tests fail randomly:

```bash
./CHAOS-DEMO.sh
```

This runs the tests 5 times in a row - you'll see different results each time.

## 📈 Success Criteria

Jules has successfully conquered the chaos when:

- ✅ All 4 test files pass
- ✅ Tests pass 10 times in a row (`for i in {1..10}; do npm test || exit 1; done`)
- ✅ No more `Math.random()` in source files
- ✅ No more timing-dependent logic in `asyncCalc.js`
- ✅ Race condition fixed in `race.js`

## 🎁 What You Get

After Jules is done:

1. **Fixed source code** - All randomness removed
2. **Passing tests** - 100% reliable
3. **Rich retry data** - Perfect for RetryLens showcase
4. **Proof of agent reasoning** - Shows how AI handles ambiguity

## 💡 Tips

- **Let Jules struggle**: Don't help it too much - the retries are the point!
- **Capture the session**: Make sure observability is enabled
- **Try different prompts**: See how prompt quality affects retry count
- **Compare agents**: Try different AI agents on the same chaos

---

Happy chaos engineering! 🧨🔥

Built for RetryLens - Making agent retries visible and debuggable.

