let startTime = window.performance.now();
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += (i * i);
}
let endTime = window.performance.now();
console.log('O tempo final é:', endTime - startTime);