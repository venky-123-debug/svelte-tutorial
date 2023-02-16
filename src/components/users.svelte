<script>
  import User from "../modules/user.svelte"

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
  const filterUser = (e) => {
    let active = e.target.value === "true"
    if (e.target.value === "null") {
      filteredUsers = users
      return filteredUsers
    }
    filteredUsers = users.filter((user) => user.active === active)
  }
</script>

<h1>List Of Users</h1>
<div class="ml-4 mt-4 ">
  <label for="UserFilter" class="text-lg font-bold text-primaryBlue">UserFilter</label>
  <select on:change={filterUser} name="userfilter" class="ml-4 rounded-md border border-primaryBlue bg-primaryBlack px-2 py-2 text-textGray focus:outline-none">
    <option value={null}>All</option>
    <option value={true}>Active</option>
    <option value={false}>InActive</option>
  </select>
</div>
{#each filteredUsers as user, i (user.id)}
  <User {user} {i} />
{:else}
  <p>No users found</p>
{/each}

<style>
</style>
