// The React useMemo Hook returns a memoized value.

// Think of memoization as caching a value so that it does not need to be recalculated.

// The useMemo Hook only runs when one of its dependencies update.

// This can improve performance.

// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a
// memoized value and useCallback returns a memoized function. You can learn more about
// useCallback in the useCallback chapter.

// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

// In this example, we have an expensive function that runs on every render.

// When changing the count or adding a todo, you will notice a delay in execution.

import { useState, useMemo } from "react";
const calculation = useMemo(() => expensiveCalculation(count), [count]);

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000; i++) {
    num += 1;
  }
  return num;
};
