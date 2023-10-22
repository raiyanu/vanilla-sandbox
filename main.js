function login() {
    let username = document.getElementById("name");
    let password = document.getElementById("password");
    User = username.value;
    Password = password.value;
    username.value = "";
    password.value = "";
    if(!(User==''|| Password==''))alert(`hey mr/ms. ${User}, shhh your password is:${Password}`);
}