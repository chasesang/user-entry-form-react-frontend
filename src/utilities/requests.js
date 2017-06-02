const DOMAIN ='http://localhost:3000/api/v1/users'

function getUsers() {
  return fetch(`${DOMAIN}`).then(res => res.json());
}

function addUser(userParams) {
  return fetch(`${DOMAIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: userParams })
  });
}

export { getUsers, addUser };
