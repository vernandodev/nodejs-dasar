function samplePromise() {
  return Promise.resolve('eko');
}
// const name = await samplePromise();
// console.info(name);

// await di dalam function
async function awaitDidalamFunction() {
  const name = await samplePromise();
  console.info(name);
}

awaitDidalamFunction();
