const form = document.querySelector('form')
const emailInput = document.querySelector('#email-input')
const errorDesktop = document.querySelector('#error-message-desktop')
const errorMobile = document.querySelector('#error-message-mobile')
const mobileScreen = window.matchMedia('(max-width: 640px)')
if (!mobileScreen.matches) {
    emailInput.addEventListener('invalid', (event) => {
        event.preventDefault()
        errorDesktop.hidden = false
    })
    emailInput.addEventListener('input', () => {
        if (emailInput.validity.valid) {
            errorDesktop.hidden = true
        }
    })
}
else {
    emailInput.addEventListener('invalid', (event) => {
        event.preventDefault()
        errorMobile.hidden = false
    })
    emailInput.addEventListener('input', () => {
        if (emailInput.validity.valid) {
            errorMobile.hidden = true
        }
    })
}