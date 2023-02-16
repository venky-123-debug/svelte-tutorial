<script>
  import NewUserModal from "../modules/newUserModal.svelte"
  let showModal = false
</script>

<div class="mt-4">
  <button
    on:click={() => {
      showModal = true
    }}
    class="rounded-md bg-primaryBlue px-8 py-2 text-sm text-white  focus:outline-none active:bg-blue-800 "
  >
    New User
  </button>

  {#if showModal}
    <NewUserModal on:close={() => (showModal = false)} />
  {/if}
</div>
