async function getData() {

  try {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return users;
  }
  catch (error) {
    console.log(error.message);
  }
}
getData().then((data) => {
  // console.log(data[0].login);
  let tabledata = "";
  data.map((value) => {
    tabledata +=
      `<tr>
    <td>${value.login}</td>
    <td>${value.id}</td>
    <td><a href='${value.html_url}'>${value.html_url}</a></td>
    <td><img src='${value.avatar_url}'/></td>
  </tr>`
  });
  document.getElementById("table_body").innerHTML = tabledata;
})
