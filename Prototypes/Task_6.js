function User(name) {
  this.name = name;
  this.logged = false;
  this.friends = [];

  this.subscribeToEvent({ event: 'new friend', handler: () => console.log('new friend')});

  this.login = function() {
    this.logged = true;
    this.generateEvent({ event: 'login' });
  }

  this.logout = function() {
    this.logged = false;
    this.generateEvent({ event: 'logout' });
  }

  this.addFriend = function(friend) {
    if (this.friends.includes(friend)) return;
    this.friends.push(friend);
    this.generateEvent({ event: 'new friend' });
  }
}

const eventMixin = {
  eventListeners: {},

  subscribeToEvent({ event, handler }) {
    this.eventListeners[event] = this.eventListeners[event] ?? [];
    this.eventListeners[event].push(handler);
  },

  generateEvent({ event }) {
    if (this.eventListeners[event] === undefined) return;
    this.eventListeners[event].forEach(handler => handler());
  },
};

Object.assign(User.prototype, eventMixin);

const user1 = new User('vova');
const user2 = new User('sonia');
console.log(user1);
user1.addFriend(user2);

