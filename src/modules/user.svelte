<script>
  export let user, i
</script>

<div class="userCard">
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
