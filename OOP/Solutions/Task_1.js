const makeUser = ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});

const getMutualFriends = (user1, user2) => {
  const friensd1Ids = user1.getFriends().map(f => f.id);
  const friensd2 = user2.getFriends();
  return friensd2.filter(f => friensd1Ids.includes(f.id));
};



const user1 = makeUser({
  friends: [
    makeUser({ id: 1 }),
    makeUser({ id: 2 }), // общий друг
  ],
});
const user2 = makeUser({
  friends: [
    makeUser({ id: 2 }), // общий друг
    makeUser({ id: 3 }),
  ],
});
 
console.log(getMutualFriends(user1, user2)); 
// [ { friends: [], id: 2, getFriends: [Function: getFriends] } ]