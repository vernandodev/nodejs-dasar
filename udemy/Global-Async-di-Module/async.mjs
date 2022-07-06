function samplePromise() {
  return Promise.resolve('mjs');
}

const name = await samplePromise();
console.info(name);
