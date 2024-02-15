'use strict';

const fetchUser = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then(console.log);
