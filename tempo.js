let today = new Date();
let hours = today.getHours().toString().padStart(2, '0');
let minutes = today.getMinutes().toString().padStart(2, '0');
let seconds = today.getSeconds().toString().padStart(2, '0');
console.log(`O tempo atual é: ${hours}:${minutes}:${seconds}`);
