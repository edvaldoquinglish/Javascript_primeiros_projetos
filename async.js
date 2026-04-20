function foo() {
    return new Promise(resolve => {
        setTimeout(() => resolve('bar'), 1000);
    });
}

async function asyncExample() {
    await foo().then(result => console.log(result));
    console.log('Boa isso foi a função  async  mas rápida e completa');
}

asyncExample();
