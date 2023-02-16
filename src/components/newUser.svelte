<script>
  import NewUserModal from "../modules/newUserModal.svelte"
  let showModal = true
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
    <NewUserModal on:close={() => (showModal = false)}>
      <h1>Create New User</h1>
      <div class="space-y-2 py-1 px-2">
        <label for="" class="text-primaryBlue">Name</label>
        <input type="text" class="w-full rounded border bg-transparent px-2 py-1 text-white" />
      </div>

      <div class="space-y-2 py-1 px-2">
        <label for="" class="text-primaryBlue">Email</label>
        <input type="email" class="w-full rounded border bg-transparent px-2 py-1 text-white" />
      </div>

      <div class="my-4 flex justify-between py-1 px-2">
        <label for="true" class="text-primaryBlue">Active:</label>
        <div class="flex">
          <label for="true" class="text-primaryBlue">Yes</label>
          <input type="radio" value={true} id="true" name="active" class="mx-5 w-full rounded border px-2 py-1" />
          <label for="false" class="text-primaryBlue">No</label>
          <input type="radio" value={false} id="false" name="active" class="mx-5 w-full rounded border px-2 py-1" />
        </div>
      </div>

      <button type="submit" id="submit-button" slot="right-button" class="rounded bg-blue-800 px-2 py-1 text-white">Create</button>
    </NewUserModal>
  {/if}
</div>
