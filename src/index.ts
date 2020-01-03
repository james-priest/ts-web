import { User } from './models/User';

const user = new User({ name: 'John', age: 0 });

// user.on('change', () => console.log('User was changed'));
console.log(user.get('name'));

user.on('change', () => console.log('User was changed'));
user.trigger('change');
