<script>
  import User from "../modules/user.svelte"
  import FilterUser from "./filterUser.svelte"
  import NewUser from "./newUser.svelte"
  import { userStore, deleteUser, addUser } from "../stores/userStore"
  import { tweened } from "svelte/motion"
  import { onMount } from "svelte"
  import { cubicIn, quintOut } from "svelte/easing"
  import { flip } from "svelte/animate"
  $: filteredUsers = $userStore

  /**
   *
   * @param e - event to find active status for the user
   * @returns filteredUsers
   */
  const filterUser = ({ detail }) => {
    if (detail === "null") {
      filteredUsers = $userStore
      return
    }
    const active = detail === "true"
    filteredUsers = $userStore.filter((user) => user.active === active)
  }

  const progress = tweened(0, { duration: 1000, easing: cubicIn })
  onMount(() => {
    progress.set(filteredUsers.length)
  })
</script>

<div class="w-4/6">
  <h1>List Of Users</h1>
  <div class="mx-4 flex items-center justify-between">
    <FilterUser on:filter={filterUser} />
    <NewUser on:newUser={addUser} />
  </div>
  <progress max="10" min="0" value={$progress} class="mt-4 w-full px-4" />
  {#each filteredUsers as user, i (user.id)}
    <div animate:flip={{ delay: 250, duration: 1000, easing: quintOut }}>
      <User on:remove={deleteUser} {user} {i} />
    </div>
  {:else}
    <p>No users found</p>
  {/each}
</div>

<style>
</style>
