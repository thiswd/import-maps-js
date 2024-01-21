const url = "https://reqres.in/api/register"

const signUp = (event) => {
  event.preventDefault()

  const requestDetails = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(Object.fromEntries(new FormData(form)))
  }

  fetch(url, requestDetails)
    .then(response => response.json())
    .then(data => console.log(data));
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)
