<script>
  let user = {
    userName: "John",
    userImage: "assets/images/user3.png",
    emailId: "john@email.com",
  }
</script>

<h1>List Of Users</h1>
<div>
  <img src={user.userImage} class="h-24 w-24 rounded-md" alt="" />
  <p>{user.emailId}</p>
  <p>{user.userName}</p>
</div>

<style>
</style>
