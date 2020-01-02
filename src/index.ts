import { User } from './models/User';

// Update existing record
const user = new User({ id: 1 });
// user.set({ name: 'New Name', age: 999 });
// user.save();
user.events.on('change', () => {
  console.log('change!');
});
user.events.trigger('change');

// Add new record
// const user = new User({ name: 'new record', age: 21 });
// user.save();
