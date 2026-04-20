const key = 'Cão';
localStorage.setItem(key, 'Fluffy');
const myDog = localStorage.getItem(key);
console.log('Meu cão é o ', myDog);
