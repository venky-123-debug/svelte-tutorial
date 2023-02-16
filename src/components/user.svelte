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

<h1 class="mt-10 text-center text-2xl font-bold text-white">List Of Users</h1>
{#each getUser() as { image, name, mail, id }, i (id)}
  <div class="m-4 flex items-center rounded-md bg-primaryGray p-5 shadow-box_Shadow">
    <p class="w-10 text-white">{i + 1}</p>
    <img src={image} alt={name} class=" h-14 w-14 rounded-full" />
    <p class=" mx-4 w-20 text-white">{name}</p>
    <p class=" mx-4 w-20 text-white">{mail}</p>
  </div>
{:else}
  <p>No users found</p>
{/each}

<style>
</style>
