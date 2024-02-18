'use strict';

const users = 'https://jsonplaceholder.typicode.com/users/';

const getUsers = async () => {
  const response = await fetch(users);
  return response.json();
};

const renderUsers = async () => {
  const usersList = document.querySelector('.users__list');
  const users = await getUsers();
  for (let user of users) {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    listItem.innerHTML = user.name;
    usersList.appendChild(listItem);
  }
};

const filteredUsers = (e) => {
  const usersListItems = document.getElementsByClassName('list__item');
  const searchItemChar = e.target.value.toLowerCase();
  if (searchItemChar.length === 0) {
    [...document.getElementsByClassName('hidden')].forEach((item) => {
      item.classList.remove('hidden');
    });
    return;
  }
  for (let searchItem of usersListItems) {
    if (!searchItem.innerHTML.toLowerCase().startsWith(searchItemChar)) {
      searchItem.classList.add('hidden');
    } else {
      searchItem.classList.remove('hidden');
    }
  }
};

renderUsers();

document.querySelector('#field').addEventListener('keyup', filteredUsers);
