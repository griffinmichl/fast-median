import median from './src/index';

const data = [];
for (let i = 0; i <= 1000 * 1000 * 10; i++) {
    data.push(Math.random());
}

console.time('with force check');
median(data);
console.timeEnd('with force check');

console.time('without force check');
median(data, true);
console.timeEnd('without force check');

