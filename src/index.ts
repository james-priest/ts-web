import { User } from './models/User';

const user = new User({ name: 'James', age: 49 });

// user.set({ name: 'Steve' });

// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('change 2');
});
user.on('destroy', () => {
  console.log('destroy 1');
});

console.log(user);

user.trigger('');
user.trigger('destroy');
user.trigger('asdf');
user.trigger('change');
