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


// Edit Assign Section 
// All Section 
const mainSection = document.querySelector(".Main-section");
const editAssign = document.querySelector(".assign-section");


// All Buttons
const assignBtn = document.querySelectorAll(".view-assign");
const arrowBtn = document.querySelector(".arrow");
const cancelBtn = document.querySelector(".Cancel-btn");


// Current Hidden
editAssign.classList.add("hidden");

assignBtn.forEach((view) => {
    view.addEventListener("click", () => {
        mainSection.classList.add("hidden");
        editAssign.classList.remove("hidden");
        arrowBtn.classList.add("hidden");
        Buttons.classList.remove("hidden");
         heading.innerHTML = "Assign Task"
    });
});

cancelBtn.addEventListener("click", () => {
    editAssign.classList.add("hidden");
    mainSection.classList.remove("hidden");
});


// Assign View click Section
// Section 

const assignSection = document.querySelector(".assign-container");



// buttons

const assignButton = document.querySelector(".assign-view");
const backMain = document.getElementById("back-Main");

// current hide
assignSection.classList.add("hidden");

assignButton.addEventListener("click", () => {
    assignSection.classList.remove("hidden");
    mainSection.classList.add("hidden");
});

backMain.addEventListener("click", () => {
    assignSection.classList.add("hidden");
    mainSection.classList.remove("hidden");
});


// Check Performance Section 
// Section

const performanceSection = document.querySelector(".performance-container");


// buttons
const performanceButton = document.querySelector(".performance-button");
const backButton = document.getElementById("back-view");

// current hide
performanceSection.classList.add("hidden");

performanceButton.addEventListener("click", () => {
    performanceSection.classList.remove("hidden");
    mainSection.classList.add("hidden");
});

backButton.addEventListener("click", () => {
    mainSection.classList.remove("hidden");
    performanceSection.classList.add("hidden");
});

// Generate Report Section
// Section
const generateSection = document.querySelector(".genarate");

// buttons
const reportBtn = document.querySelectorAll(".reportbtn");
const backPerformance = document.getElementById("back-performance");

// Current hide

generateSection.classList.add("hidden");

reportBtn.forEach((view) => {
    view.addEventListener("click", () => {
        generateSection.classList.remove("hidden");
        performanceSection.classList.add("hidden");
    });
});

backPerformance.addEventListener("click", () => {
    performanceSection.classList.remove("hidden");
    generateSection.classList.add("hidden");
});

// View Report Section
// Section

const reportSection = document.querySelector(".Report-container");

// Buttons

const reportButton = document.querySelector(".view");
const backView = document.getElementById("back-button");

// current hide
reportSection.classList.add("hidden");

reportButton.addEventListener("click", () =>{
    reportSection.classList.remove("hidden");
    performanceSection.classList.add("hidden");
});

backView.addEventListener("click", () =>{
    reportSection.classList.add("hidden");
    performanceSection.classList.remove("hidden");
});

// Edit Report Section
// Section
const editGenerate = document.querySelector(".Edit-genarate");

// button
const editReport = document.querySelectorAll(".Edit-report");
const backReport = document.getElementById("back-report");


editGenerate.classList.add("hidden");

editReport.forEach((show) =>{
    show.addEventListener("click" , () =>{
        editGenerate.classList.remove("hidden");
        reportSection.classList.add("hidden");
    });
});

backReport.addEventListener("click", () =>{
    editGenerate.classList.add("hidden");
    reportSection.classList.remove("hidden");
});

// View Report 
// button
const showReport = document.querySelectorAll(".show-report");
const Buttons = document.querySelector(".save-btn");
const backreportSection = document.getElementById("back-reportSection");
const heading = document.querySelector(".Assign-heading h1");

showReport.forEach((show) =>{
    show.addEventListener("click", () =>{
        editAssign.classList.remove("hidden");
        reportSection.classList.add("hidden");
        arrowBtn.classList.remove("hidden");
        Buttons.classList.add("hidden");
        heading.innerHTML = "View Report"

    });
});

backreportSection.addEventListener("click", () =>{
    editAssign.classList.add("hidden");
    reportSection.classList.remove("hidden");
});

// View Task + Edit Task
// Section
const taskSection = document.querySelector(".Task-section");

// button
const backviewTask = document.getElementById("back-ViewTask");
const viewTask = document.querySelectorAll(".view-task");
const editTask = document.querySelectorAll(".edit-task");
const saveChange = document.querySelector(".save-change");

// Heading
const taskHeading = document.querySelector(".Task-heading h1");

// current
taskSection.classList.add("hidden");

viewTask.forEach((view) =>{
    view.addEventListener("click", () =>{
        taskSection.classList.remove("hidden");
        assignSection.classList.add("hidden");
       taskHeading.innerHTML = "View Task";
        saveChange.classList.add("hidden");
    });
});

editTask.forEach((edit) =>{
    edit.addEventListener("click", () =>{
        taskSection.classList.remove("hidden");
        assignSection.classList.add("hidden");
        saveChange.classList.remove("hidden");
        taskHeading.innerHTML = "Edit Task";
    });
});


backviewTask.addEventListener("click", () =>{
    taskSection.classList.add("hidden");
    assignSection.classList.remove("hidden");
});