#!/bin/bash

# 🧨 Flaky Chaos Demo
# Run this to see the chaos in action

echo "🧨 FLAKY CHAOS REPO DEMONSTRATION"
echo "=================================="
echo ""
echo "Running tests 5 times to show flakiness..."
echo ""

for i in {1..5}; do
  echo "🔥 Attempt $i:"
  npm test 2>&1 | grep -E "(PASS|FAIL|✓|✕|passed|failed)"
  echo ""
  sleep 1
done

echo "=================================="
echo "Notice how tests fail randomly?"
echo "Perfect for stress-testing AI agents! 🎯"

