// case #1

function User(name) {
  this.name = name;
}
// User.prototype.constructor === User (by default)
// and
// user.__proto__ === User.prototype (by default)
// 
// therefore:
// user.__proto__.constructor = User
// or 
// user.constructor = User (because user inherit constructor from [[Prototype]])

const user = new User('Vova');
const user2 = new user.constructor('Sonia');
const user3 = new user.__proto__.constructor('Dima');
console.log(user);
console.log(user2);
console.log(user3);


// Case #2
function UserUser(name) {
  this.name = name;
}

UserUser.prototype = {};
// Now [[Prototype]] doesn't have it's own constructor => it inherit constructor from Object.
// UserUser.prototype.constructor === Object.prototype.constructor
// therefore new object won't be User, it'll be Object

const user_user = new UserUser('John');
const user_user2 = new user.constructor('Pete');
console.log(user_user);
console.log(user_user2);
console.log(user_user2 instanceof UserUser); // false
