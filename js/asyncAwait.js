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

let userName = null;

const showMyName = async () => {
  const fetchingUrl = await fetch(myProfile);
  const toJsonResult = await fetchingUrl.json();
  const showUserName = toJsonResult.name;
  return (userName = String(showUserName));
};

console.log(showMyName(userName));

fetch(myProfile)
  .then((response) => response.json())
  .then(console.log)
  .catch((error) => console.log(error));

const isResolved = async () => {
  return Promise.resolve(100);
};

isResolved().then(console.log);

async function showNumberFromPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 2000);
  });
  let result = await promise;
  return console.log(result);
}

showNumberFromPromise();

(async () => {
  let response = await fetch(myProfile);
  let showGitHubProfile = await response.json();
  return console.log(showGitHubProfile);
})();

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => resolve(this.num * 2 + 6), 1000);
  }
}

const showNumber = async () => {
  let result = await new Thenable(2);
  console.log(result);
};

showNumber();

class Water {
  async wait() {
    return await Promise.resolve('User drink a water.');
  }
}

const result = new Water().wait().then(
  setTimeout(() => console.log),
  1500
);

async function f() {
  throw new Error('Error!');
}

f().catch((err) => console.log(err));

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status === 200) {
    let result = await response.json();
    return result;
  }
    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json').catch(alert); // Error: 404

const myProfile = 'https://api.github.com/users/Chaban29';

const showUser = async () => {
  try {
    const getUsersFromFetching = await fetch(`${users}/1`);
    const response = await getUsersFromFetching.json();
    setTimeout(() => {
      console.log(response.name);
    }, 1500);
  } catch (err) {
    console.log(err.message);
  }
};

showUser();

const users = 'https://jsonplaceholder.typicode.com/users';

const fetchUser_1 = (greet) => {
  try {
    console.log('Loading...');
    const fetchingUser = fetch(`${users}/2`);
    fetchingUser
      .then((response) => response.json())
      .then((result) =>
        setTimeout(() => console.log(`${greet} ${result.name}`), 1500)
      );
  } catch (err) {
    console.log(err.stack);
  }
};

const showUserGreeting = async () => {
  const result = await fetchUser('Hello');
  return result;
};

showUserGreeting();

const users_1 = 'https://jsonplaceholder.typicode.com/users';

const mainHeading = document.createElement('h1');
mainHeading.classList.add('list__title');
mainHeading.textContent = 'Filtered Users List from API';
document.body.prepend(mainHeading);

const getUsers = async () => {
  const result = await fetch(users);
  return result.json();
};

const renderUsers = async () => {
  const usersList = document.querySelector('.users__list');
  const users = await getUsers();
  for (let user of users) {
    const listItem = document.createElement('li');
    listItem.classList.add('user__list--item');
    listItem.innerHTML = user.name;
    usersList.appendChild(listItem);
  }
};

const filteredUsers = (e) => {
  const userListItems = document.getElementsByClassName('user__list--item');
  const searchItemChar = e.target.value.toLowerCase();
  if (searchItemChar.length === 0) {
    [...document.getElementsByClassName('hidden')].forEach((item) => {
      item.classList.remove('hidden');
    });
    return;
  }
  for (let i = 0; i < userListItems.length; i++) {
    if (!userListItems[i].innerHTML.toLowerCase().startsWith(searchItemChar)) {
      userListItems[i].classList.add('hidden');
    } else {
      userListItems[i].classList.remove('hidden');
    }
  }
};

renderUsers();

document.querySelector('#field').addEventListener('keyup', filteredUsers);

