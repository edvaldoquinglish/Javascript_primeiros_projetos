const key = 'cão';
sessionStorage.setItem(key, 'Fluffy');
const myDog = sessionStorage.getItem(key);
console.log('Meu cão é o ', myDog);
