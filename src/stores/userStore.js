import { writable } from "svelte/store"

export const userStore = writable([
  {
    id: 1,
    name: "John",
    image: "assets/images/user3.png",
    mail: "john@email.com",
    active: true,
  },
  {
    id: 2,
    name: "John",
    image: "assets/images/user2.png",
    mail: "john@email.com",
    active: false,
  },
  {
    id: 3,
    name: "John",
    image: "assets/images/user1-1.png",
    mail: "john@email.com",
    active: false,
  },
])

export const deleteUser = ({ detail }) => {
  userStore.update((_users) => _users.filter((user) => user.id !== detail))
}

export const addUser = ({ detail }) => {
  userStore.update((_users) => [
    {
      id: _users.length + 1,
      image: "/assets/images/user2.png",
      ...detail,
    },
    ..._users,
  ])
}
