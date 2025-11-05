document.addEventListener("DOMContentLoaded", function () {

    const dateInput = document.getElementById("date");
    const calendar = flatpickr(dateInput, {
        dateFormat: "Y-m-d",
        defaultDate: new Date(),
        clickOpens: false

    });
    document.querySelector(".date-img").addEventListener("click", function () {
        calendar.open();
    });
});


document.querySelectorAll(".date-select").forEach((input) => {
    flatpickr(input, {
        dateFormat: "Y-m-d",
        clickOpens: false
    });
});


document.querySelectorAll(".open-date").forEach((img) => {
    img.addEventListener("click", () => {
        let input = img.nextElementSibling;
        if (input && input._flatpickr) {
            input._flatpickr.open();
        }
    });
});


// Application page

const newbtn = document.querySelector(".new-leave")
const mainSection = document.querySelector(".main-section");
const ApplicationSection = document.querySelector(".Application-section");
const backBtn = document.getElementById("back-leave");

const lastState = localStorage.getItem("sectionState");

if (lastState === "application") {
    mainSection.classList.add("hidden");
    ApplicationSection.classList.remove("hidden");
} else {
    mainSection.classList.remove("hidden");
    ApplicationSection.classList.add("hidden");
}

newbtn.addEventListener("click", ()=>{
    mainSection.classList.add("hidden");
    ApplicationSection.classList.remove("hidden");
    localStorage.setItem("sectionState", "application")
})

backBtn.addEventListener("click", ()=>{
    mainSection.classList.remove("hidden");
    ApplicationSection.classList.add("hidden");
    localStorage.setItem("sectionState", "main");
})