let counter = 0;
let interval = setInterval(function () {
    counter++;
    if (counter > 3) {
        console.log('acabou');
        clearInterval(interval);
        return;
    }
    console.log('Um segundo passou...');
}, 1000);