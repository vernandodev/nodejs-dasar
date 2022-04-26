function samplePromise() {
    return Promise.resolve("Richo");
}

const name = await samplePromise();
console.info(name);