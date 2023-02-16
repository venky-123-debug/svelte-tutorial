<script>
  import { createEventDispatcher } from "svelte"
  import Delete from "../svgIcons/delete.svelte"

  export let user, i
  const dispatch = createEventDispatcher()

  const deleteUser = () => {
    dispatch("remove", user.id)
  }
</script>

<div class="userCard relative">
  <button on:click={deleteUser} class="absolute right-2 top-2 text-red-600 hover:text-red-700 ">
    <Delete />
  </button>
  <div class="w-10 text-white">{i + 1}</div>
  <img src={user.image} alt={user.name} class="image" />
  <p>{user.name}</p>
  <p>{user.mail}</p>
</div>

<style>
  .userCard {
    @apply m-4 flex cursor-pointer items-center rounded-md  bg-primaryGray p-5;
  }
  .image {
    @apply h-14 w-14 rounded-full;
  }
</style>
