<script>
  let user = [
    {
      userName: "John",
      userImage: "assets/images/user3.png",
      emailId: "john@email.com",
    },
    {
      userName: "John",
      userImage: "assets/images/user2.png",
      emailId: "john@email.com",
    },
    {
      userName: "John",
      userImage: "assets/images/user1-1.png",
      emailId: "john@email.com",
    },
  ]
</script>

<h1>List Of Users</h1>
<div>
  <img src={user[0].userImage} alt={user[0].userName} />
  <p>{user[0].userName}</p>
  <p>{user[0].emailId}</p>
</div>
<div>
  <img src={user[1].userImage} alt={user[1].userName} />
  <p>{user[1].userName}</p>
  <p>{user[1].emailId}</p>
</div>
<div>
  <img src={user[0].userImage} alt={user[0].userName} />
  <p>{user[0].userName}</p>
  <p>{user[0].emailId}</p>
</div>

<style>
</style>
