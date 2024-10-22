
const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
const formMessage = document.querySelector(".txtarea");
const formEmail = document.querySelector(".email")


const localData = JSON.parse(localStorage.getItem("feedback-form-state"))


if (localStorage.getItem('feedback-form-state') !== null) {
    formMessage.value = localData.message
    formEmail.value = localData.email
}



form.addEventListener("input", (event) => {
    formData.email = event.currentTarget.email.value;
    formData.message = event.currentTarget.message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
})

form.addEventListener("submit", (event) => {
    if (event.currentTarget.email.value == "" || event.currentTarget.message.value == "") {
        alert("Fill please all fields")
        return
    }
    else {
        event.preventDefault();
        localStorage.removeItem("feedback-form-state")
        if (typeof event.currentTarget.email.value == "string" && typeof event.currentTarget.message.value == "string") {
            console.log(formData);
        }
        localStorage.removeItem("feedback-form-state")
        formData.email = "";
        formData.message = "";
        form.reset()
    }
})

