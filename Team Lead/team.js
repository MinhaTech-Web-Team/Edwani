const dotBtns = document.querySelectorAll(".dot");

dotBtns.forEach(dot => {
    const dropdown = dot.querySelector(".drop-down");

    dot.addEventListener("click", (e) => {
        e.stopPropagation();

        document.querySelectorAll(".drop-down").forEach(menu => {
            if (menu !== dropdown) menu.style.display = "none";
        });
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    });
});


const popupShows = document.querySelectorAll(".popupShow");

popupShows.forEach((btn) => {
    btn.addEventListener("click", () => {
        const moreWrapper = btn.closest(".more");
        const popup = moreWrapper.querySelector(".more-popup");
        const backBtn = popup.querySelector(".backBtn");

        popup.style.display = "block";

        backBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    });
});



// Toggle 
function toggleSection(hideSection, showSection) {
    hideSection.classList.add("hidden");
    showSection.classList.remove("hidden");
}

// Sections
const leadSection = document.querySelector(".Lead-section");
const assignSection = document.querySelector(".assign-section");
const assignContainer = document.querySelector(".assign-container");
const performanceContainer = document.querySelector(".performance-container");

// Buttons
const viewAssign = document.querySelectorAll(".view-assign");
const cancelBtn = document.querySelector(".Cancel-btn");
const assignBtn = document.querySelector(".assign-view");
const backAssign = document.getElementById("back-Assign");

const performanceView = document.querySelector(".performance-view");
const backView = document.getElementById("back-view");


assignSection.classList.add("hidden");
assignContainer.classList.add("hidden");
performanceContainer.classList.add("hidden");

// View Assign  show assign section
viewAssign.forEach((view) => {
    view.addEventListener("click", () => {
        toggleSection(leadSection, assignSection);
    });
});

// Cancel  back to lead section
cancelBtn.addEventListener("click", () => {
    toggleSection(assignSection, leadSection);
});

// Assign Btn  show assign container
assignBtn.addEventListener("click", () => {
    toggleSection(leadSection, assignContainer);
});

// Back Assign → back to lead section
backAssign.addEventListener("click", () => {
    toggleSection(assignContainer, leadSection);
});

// Performance View → show performance container
performanceView.addEventListener("click", () => {
    toggleSection(leadSection, performanceContainer);
});

// Back View → back to lead section
backView.addEventListener("click", () => {
    toggleSection(performanceContainer, leadSection);
});


const reportbtn = document.querySelectorAll(".reportbtn");
const generateSection = document.querySelector(".Edit-genarate");
const backGenerate = document.getElementById("back-genarate");

generateSection.classList.add("hidden");

reportbtn.forEach((report) =>{
    report.addEventListener("click", ()=>{
        generateSection.classList.remove("hidden");
        performanceContainer.classList.add("hidden");
    });
});

backGenerate.addEventListener("click", ()=>{
    generateSection.classList.add("hidden");
    performanceContainer.classList.remove("hidden");
})