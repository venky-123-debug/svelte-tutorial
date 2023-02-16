<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  const close = () => {
    dispatch("close")
  }

  const handleForm = () => {
    dispatch("submit")
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-primaryBlack px-4 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
        <form class="mt-5 sm:mt-6" on:submit|preventDefault={handleForm}>
          <slot />

          <div class="flex justify-between">
            <button type="button" class="rounded px-2 py-1 text-textGray ring-1 ring-red-600 hover:bg-red-600 hover:text-white active:bg-red-300" on:click={close}>Close</button>
            <slot name="right-button" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
