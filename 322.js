let g = [3, -50, 70, 2, 8];

let min = g[0];
let max = g[0];

for (let i = 1; i < g.length; i++) {
if (g[i] < min) {
        min = g[i];
    }
if (g[i] > max) {
        max = g[i];
    }
}

console.log("Мінімальне значення:", min);
console.log("Максимальне значення:", max);
