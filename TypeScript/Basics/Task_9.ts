type User = { name: string, age: number };

function getOlderUser(user1: User, user2: User): User | null {
  if (user1.age === user2.age) return null;
  return (user1.age > user2.age) ? user1 : user2;
}
