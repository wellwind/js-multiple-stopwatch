# js-multiple-stopwatch.js

A stopwatch tool let you measure the performance of your code. You can manage multiple stopwatches using this library.

## Installation

```
npm install js-multiple-stopwatch
```

## Quick Start

Just see the code below to learn how to manage multiple stopwatches.

```javascript
var Stopwatch = require("js-multiple-stopwatch");

// start a stopwatch
Stopwatch.Tick();

var val = 0;
for (var i = 1; i <= 10; ++i) {
    // using any name in parameter as stopwatch name
    Stopwatch.Tick("iteration_" + i);
    for (var j = 0; j < 1000000; ++j) {
        val += j;
    }
    Stopwatch.Tock("iteration_" + i);
}

// stop a stopwatch
Stopwatch.Tock();

// using ElaspedTime to get execution time
for(var i = 1; i <= 10; ++i){
    console.log("Iteration " + i + " Time : " + (Stopwatch.ElapsedTime("iteration_" + i) / 1000) + " seconde");
}

console.log("Total Time : " + (Stopwatch.ElapsedTime() / 1000) + " seconde");
```