<script>
  import User from "../modules/user.svelte"
  import FilterUser from "./filterUser.svelte"
  import NewUser from "./newUser.svelte"

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

  $: filteredUsers = users

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

  const deleteUser = ({ detail }) => {
    users = users.filter((user) => user.id !== detail)
  }
</script>

<h1>List Of Users</h1>
<div class="mx-4 flex items-center justify-between">
  <FilterUser on:filter={filterUser} />
  <NewUser />
</div>
{#each filteredUsers as user, i (user.id)}
  <User on:remove={deleteUser} {user} {i} />
{:else}
  <p>No users found</p>
{/each}

<style>
</style>
