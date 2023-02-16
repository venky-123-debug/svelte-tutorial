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

  const getUser = () => {
    return users
  }
</script>

<h1>List Of Users</h1>
{#each getUser() as user, i (user.id)}
  <User {user} {i} />
{:else}
  <p>No users found</p>
{/each}

<style>
</style>
