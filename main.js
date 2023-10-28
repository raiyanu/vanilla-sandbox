function login() {
    let username = document.getElementById("name");
    let password = document.getElementById("password");
    User = username.value;
    Password = password.value;
    username.value = "";
    password.value = "";
    if (!(User == '' || Password == '')) alert(`hey mr/ms. ${User}, shhh your password is:${Password}`);
}

function switch_entry() {
   let form1 = document.getElementById('form1');
   form1.classList.toggle("be-visible");
   let form2 = document.getElementById('form2');
   form2.classList.toggle("be-visible");
   console.log("clicked");
}