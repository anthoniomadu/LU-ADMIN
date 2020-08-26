

fetch("http://localhost:1337/restaurants", {
  method: "GET",
  headers: {
     'Content-Type': 'application/json'
  },
}).then(response => response.json())
  .then(data => console.log(data));