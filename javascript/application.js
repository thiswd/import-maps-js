import Swal from 'sweetalert2';

const url = "https://reqres.in/api/register"

const signUp = (event) => {
  event.preventDefault()

  const requestDetails = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(Object.fromEntries(new FormData(form)))
  }

  fetch(url, requestDetails)
    .then((response) => {
      if (response.status === 200) {
        Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
      } else {
        Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
      }
    })
    .then(data => console.log(data));
}

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)
