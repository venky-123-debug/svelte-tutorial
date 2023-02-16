<script>
  import User from "../modules/user.svelte"
  import FilterUser from "./filterUser.svelte"

  let users = [
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
  ]

  let filteredUsers = users

  /**
   *
   * @param e - event to find active status for the user
   * @returns filteredUsers
   */
  const filterUser = ({ detail }) => {
    if (detail === "null") {
      filteredUsers = users
      return
    }
    const active = detail === "true"
    filteredUsers = users.filter((user) => user.active === active)
  }
</script>

<h1>List Of Users</h1>
<FilterUser on:filter={filterUser} />
{#each filteredUsers as user, i (user.id)}
  <User {user} {i} />
{:else}
  <p>No users found</p>
{/each}

<style>
</style>
