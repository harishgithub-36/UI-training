
async function getData() {
    // url = "https://api.github.com/users";
    // fetch(url).then((response) => {
    //     return response.json();
    // }).then((data) => {
    //     console.log(data);
    // })
    try {
        const response = await fetch("https://api.github.com/users");
        const users = await response.json();
      console.log(users);
    
    }
 catch (error) {
    console.log(error.message);
}
}
getData();