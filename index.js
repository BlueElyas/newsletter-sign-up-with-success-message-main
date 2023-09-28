const subsrcibeBtn = document.getElementById("subsrcibe-btn")
const emailInput = document.getElementById("email-input")
const gratitudeSection = document.getElementById("gratitude")
const subscribeSection = document.getElementById("subscribe-section")
const heroSection = document.getElementById("hero")
const invalidEmail = document.getElementById("invalid-email")
const gridContainer = document.getElementById("grid")
const heroImageDesktop = document.getElementById("hero-image-desktop")

subsrcibeBtn.addEventListener ('click', function() {
    const email = emailInput.value.trim()
    if (isValidEmail(email)) {
        gratitudeSection.style.display = 'flex'
        subscribeSection.style.display = 'none'
        heroSection.style.display = 'none'
        gridContainer.style.display = 'none'
    }
        emailInput.classList.add('false-email-input')
        invalidEmail.style.display = 'block'

})

const dismissButton = document.getElementById("dismiss-button")

dismissButton.addEventListener('click', function() {
        gratitudeSection.style.display = 'none'
        subscribeSection.style.display = 'block'
        heroSection.style.display = 'block'
        gridContainer.style.display = 'grid'
        emailInput.classList.remove('false-email-input')
        invalidEmail.style.display = 'none'
})

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
