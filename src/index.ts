import { User } from './models/User';

const user = new User({ id: 1 });

// user.on('change', () => console.log('User was changed'));
console.log(user.get('name'));

// Reminder on how 'this' works in javascript
const colors = {
  color: 'red',
  printColor(): void {
    console.log(this.color);
  }
};

// 'this' is what ever is to the left of the method call
colors.printColor();

const { printColor } = colors;
printColor(); // TypeError: Cannot read property 'color' of undefined
