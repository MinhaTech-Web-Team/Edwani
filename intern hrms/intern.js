const internSection = document.querySelector(".intern-section");
const certificateSection = document.querySelector(".certificate-section");
const viewCertificate = document.querySelector(".view-certificate");
const backIntern = document.getElementById("back-Intern");

document.addEventListener("DOMContentLoaded", ()=>{
    const pageState = localStorage.getItem("pageState");

    if(pageState === "intern"){
        certificateSection.classList.add("hidden");
        internSection.classList.remove("hidden");
    } else{
        certificateSection.classList.remove("hidden");
        internSection.classList.add("hidden");
    }
});

viewCertificate.addEventListener("click", function (){
    certificateSection.classList.remove("hidden");
    internSection.classList.add("hidden");
    localStorage.setItem("pageState", "certificate");    
});

backIntern.addEventListener("click", () =>{
    certificateSection.classList.add("hidden");
    internSection.classList.remove("hidden");
    localStorage.setItem("pageState", "intern");  
});