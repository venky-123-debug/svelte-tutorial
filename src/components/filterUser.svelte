<script>
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  const filterUser = (e) => {
    dispatch("filter", e.target.value)
  }
</script>

<div>
  <label for="UserFilter" class="text-lg font-bold text-primaryBlue">UserFilter</label>
  <select on:change={filterUser} name="userfilter" class="ml-4 rounded-md border border-primaryBlue bg-primaryBlack px-2 py-2 text-textGray focus:outline-none">
    <option value={null}>All</option>
    <option value={true}>Active</option>
    <option value={false}>InActive</option>
  </select>
</div>
