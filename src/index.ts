import { User } from './models/User';

const user = new User({ name: 'James', age: 49 });

// user.set({ name: 'Steve' });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {});
user.on('change', () => {});
user.on('destroy', () => {});

console.log(user);
