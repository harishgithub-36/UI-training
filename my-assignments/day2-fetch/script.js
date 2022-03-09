async function getData() {

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