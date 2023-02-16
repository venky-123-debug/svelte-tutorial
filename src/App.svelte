<script>
  import User from "./components/users.svelte"
</script>

<!-- <div class="relative"> -->
<div class="flex min-h-screen flex-col overflow-hidden bg-primaryBlack">
  <User />
</div>

<!-- </div> -->
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  h1 {
    @apply mt-10 text-center text-2xl font-bold text-white;
  }
  p {
    @apply mx-4 w-20 text-white;
  }
</style>
