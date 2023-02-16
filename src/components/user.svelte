<script>
  let users = [
    { id: 1, name: "John", image: "assets/images/user3.png", mail: "john@email.com" },
    {
      id: 2,
      name: "John",
      image: "assets/images/user2.png",
      mail: "john@email.com",
    },
    {
      id: 3,
      name: "John",
      image: "assets/images/user1-1.png",
      mail: "john@email.com",
    },
  ]

  const getUser = () => {
    return users
  }
</script>

<h1>List Of Users</h1>
{#each getUser() as { image, name, mail, id }, i (id)}
  <div>
    <p>{i + 1}</p>
    <img src={image} alt={name} />
    <p>{name}</p>
    <p>{mail}</p>
  </div>
{:else}
  <p>No users found</p>
{/each}

<style>
</style>
