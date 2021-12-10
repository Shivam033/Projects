function factorial(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }
  console.log("Factorial of ", n, " is ", ans);
}

module.exports = {
  fact: factorial,
};
