// let user_data=new Array();
let user_data = {};
function myFunction(e) {
    e.preventDefault();
    console.log("hello");
    let username = document.getElementById('username').value;
    let password = document.getElementById('pasw').value;

    console.log(username, password);
    user_data = {
        "name": username,
        "psw": password
    }
    // data=JSON.stringify(user_data);
    // user_data= '{"name":"hardgfrglry347485945","password":"123"}'
    // console.log(JSON.stringify(user_data));
    postData();
}
function postData() {
    url = "https://reqres.in/api/users";
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(user_data)
        // body: data
    }

    fetch(url, params).then(response => response.json())
        .then(data => console.log(data)
        )
}
//   console.log("hello");
const form = document.getElementById('form');
form.addEventListener('submit', myFunction);