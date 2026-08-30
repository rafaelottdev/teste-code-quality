const user = {
  name: 'Rafael',
  age: 25,
  email: 'email@email.com',
};

const users = [
  { name: 'Rafael', age: 25 },
  { name: 'João', age: 30 },
  { name: 'Maria', age: 28 },
];

const handleUserClick = (user: { name: string; age: number, email: string }, users: {name:string, age:number}[]) => {
  console.log(user, users);
};

handleUserClick(user, users)

// fazer o lint-staged e colocar o prettier no ci (praticar) depois fazer o arquivo da conversa
// utilizar as duas formas do eslint + prettier (evitar conflitos ja usado e mesclar eslint com prettier)