import { User } from './models/User';

// const user = new User({ id: 1 });
// user.on('change', () => console.log(user));
// user.fetch();

const user = new User({ id: 1, name: 'newer name', age: 0 });
user.on('save', () => console.log(user));

user.save();
