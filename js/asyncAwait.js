'use strict';

const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();
  return user;
};

const userSayHello = async () => {
  const user = await fetchUser();
  console.log(user.name);
  console.log('2');
};

userSayHello();

const hello = async () => {
  try {
    return console.log('hello');
  } catch (err) {
    console.log(err.message);
  }
};

hello();

const f = async () => 1;

f().then(console.log);

async function func() {
  return Promise.resolve(2).then(console.log);
}

func();

const func = async () => {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('done!');
    }, 1500);
  });
  let result = await promise;
  return console.info(result);
};

func();

(async () => {
  const getUser = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const showUserConsole = await getUser.json();
  console.log(showUserConsole);
})();

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

const url = 'https://jsonplaceholder.typicode.com/users/';

const fetchTodo = async () => {
  console.log('Loading...');
  await delay(2000);
  return fetch(url).then((response) => response.json());
};

fetchTodo()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

const usersUrl = 'https://jsonplaceholder.typicode.com/users/1';

const showUserName = async () => {
  try {
    const fetchingUsers = await fetch(usersUrl);
    const users = await fetchingUsers.json();
    return users;
  } catch (error) {
    console.log(error.message);
  }
};

setTimeout(() => showUserName().then((data) => console.log(data.name)), 2000);

const myProfile = 'https://api.github.com/users/Chaban29';

const showMyName = async () => {
  const fetchingUrl = await fetch(myProfile);
  const toJsonResult = await fetchingUrl.json();
  console.log(toJsonResult);
  const showUserName = toJsonResult.name;
  return console.log(showUserName);
};

showMyName();

fetch(myProfile)
  .then((response) => response.json())
  .then(console.log);
