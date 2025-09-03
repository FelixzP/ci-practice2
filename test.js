// test.js

function add(a, b) {
  return a + b;
}

// simple test
if (add(2, 3) !== 5) {
  console.error("❌ Test failed: 2 + 3 should equal 5");
  process.exit(1); // exit code 1 = error
} else {
  console.log("✅ Test passed: 2 + 3 = 5");
}
