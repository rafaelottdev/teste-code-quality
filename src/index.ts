const user = {
  name: 'Rafael',
  age: 25,
  email: 'email@email.com',
};

const users = [{ name: 'Rafael', age: 25 },
  { name: 'João', age: 30 },
  { name: 'Maria', age: 28 },
];

const handleUserClick = (user: { name: string; age: number }, event: MouseEvent) => {
  console.log(user, event);
};
