const scriptURL = 'https://script.google.com/macros/s/AKfycbxD92qpqHki0a7C8IWDFsXA4Yc0rL1G5WY7OZiRE2nUbjlKHPsLTxx7NxvCjS3PBkx5bA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})