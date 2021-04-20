const submitButton = document.getElementById("submit-button")
const popUpModal = new bootstrap.Modal(document.getElementById('pop-up'))
const alertMessage = document.getElementById("alert-message")

submitButton.addEventListener('click', function(){
    const userName = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (userName === "") {
        alertMessage.innerText = "Username is required"
        popUpModal.show()
    }
})