const Piscina = require('piscina');
const path = require('path');

const worker = new Piscina({
  filename: path.resolve(__dirname, 'worker2.js'),
});

(async function() {
  const primes = [];
  while(primes.length < 20) {
    const value = Math.floor(Math.random() * 50);
    primes.push(worker.run({ a: value }).then((x) => ({
      status: x,
      value,
    })));
  }

  const result = await Promise.any(primes);
  console.log(result);
})();

