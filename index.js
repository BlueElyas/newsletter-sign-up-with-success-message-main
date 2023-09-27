const subsrcibeBtn = document.getElementById("subsrcibe-btn")
const emailInput = document.getElementById("email-input")
const gratitudeSection = document.getElementById("gratitude")
const subscribeSection = document.getElementById("subscribe-section")
const heroSection = document.getElementById("hero")
const invalidEmail = document.getElementById("invalid-email")
const gridContainer = document.getElementById("grid")
const heroImageDesktop = document.getElementById("hero-image-desktop")

subsrcibeBtn.addEventListener ('click', function() {
    if (emailInput.value) {
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


function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}