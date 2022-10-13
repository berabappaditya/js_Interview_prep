function printFibnaci(n) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  //   let fib =
  //   console.log(fib);
  return printFibnaci(n - 1) + printFibnaci(n - 2);
}

for (let i = 1; i <= 10; i++) {
  console.log(printFibnaci(i));
}
