const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
const firstNameError = document.getElementById('first-name-error')
const lastNameError = document.getElementById('last-name-error')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')
const emailEmptyError = document.getElementById('email-empty')
const container = document.querySelector('.container')

const regularExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

let first_name = ''
let last_name = ''
let inputEmail = ''
let inputPassword = ''

firstName.addEventListener('input', (e) => {
  first_name = e.target.value
})

lastName.addEventListener('input', (e) => {
  last_name = e.target.value
})

email.addEventListener('input', (e) => {
  inputEmail = e.target.value
})

password.addEventListener('input', (e) => {
  inputPassword = e.target.value
})

btn.addEventListener('click', () => {
  remove()
  validation()
  isEmptyFirstName()
  isEmptyLastName()
  isEmptyEmail()
  isEmptyPassword()
  if (
    validation() &&
    isEmptyFirstName() &&
    isEmptyLastName() &&
    isEmptyEmail() &&
    isEmptyPassword()
  ) {
    container.innerHTML = `
      <div class="activated">
          <h1>Free Trial Activated</h1>
          <p>Hey! ${
            first_name + ' ' + last_name
          } Your free trial has been activated and a confirmation email has been sent to ${inputEmail}. </p>
          <a href="/index.html"><button id="close-btn">Close</button></a>
        </div>
    `
  }
})

function validation() {
  if (!inputEmail.match(regularExp) && inputEmail !== '') {
    emailError.classList.add('active')
    email.classList.add('active')
    return false
  } else return true
}

function isEmptyFirstName() {
  if (first_name === '') {
    firstName.classList.add('active')
    firstNameError.classList.add('active')
    return false
  } else return true
}

function isEmptyLastName() {
  if (last_name === '') {
    lastName.classList.add('active')
    lastNameError.classList.add('active')
    return false
  } else return true
}

function isEmptyEmail() {
  if (inputEmail === '') {
    email.classList.add('active')
    emailEmptyError.classList.add('active')
    return false
  } else return true
}

function isEmptyPassword() {
  if (inputPassword === '') {
    password.classList.add('active')
    passwordError.classList.add('active')
    return false
  } else return true
}

function remove() {
  emailError.classList.remove('active')
  email.classList.remove('active')
  emailEmptyError.classList.remove('active')

  firstName.classList.remove('active')
  firstNameError.classList.remove('active')

  password.classList.remove('active')
  passwordError.classList.remove('active')

  lastName.classList.remove('active')
  lastNameError.classList.remove('active')
}
