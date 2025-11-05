document.addEventListener("DOMContentLoaded", () => {
    // flatpickr initialize
    const dateInput = document.querySelector(".date");
    const fp = flatpickr(dateInput, {
        dateFormat: "d-m-Y",   // aap apni format rakh sakte ho
        allowInput: true,
        defaultDate: "today",
        clickOpens: false
    });

    // image click -> calendar open
    document.querySelector(".select-date").addEventListener("click", () => {
        fp.open();  // Flatpickr calendar open karega
    });
});

// Task Status

const taskStatus = document.querySelectorAll(".task-status");
const mainSection = document.querySelector(".main-section");
const taskContainer = document.querySelector(".task-container");
const backBtn = document.getElementById("back-task");

document.addEventListener("DOMContentLoaded", ()=>{
  const pageState = localStorage.getItem("pageState");

  if(pageState === "task"){
    mainSection.classList.add("hidden");
    taskContainer.classList.remove("hidden");
  } else{
    mainSection.classList.remove("hidden");
    taskContainer.classList.add("hidden");
  }
});

taskStatus.forEach((open) =>{
  open.addEventListener("click", () =>{
    mainSection.classList.add("hidden");
    taskContainer.classList.remove("hidden");
    localStorage.setItem("pageState", "task");
  });
});

backBtn.addEventListener("click", ()=>{
  mainSection.classList.remove("hidden");
  taskContainer.classList.add("hidden");
  localStorage.setItem("pageState", "main");
})

// more popup filter

document.addEventListener("DOMContentLoaded", () => {
    const cardBtns = document.querySelectorAll(".card-open");
  
    function closeAllPopups() {
      document.querySelectorAll(".popup-card").forEach(p => {
        p.style.display = "none";
      });
    }
  
    cardBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".more-card");
        const popup  = parent.querySelector(".popup-card");
        const close  = popup.querySelector(".close-card");
  
        // pehle sab close 
        closeAllPopups();
  
        // phir sirf ye wala open 
        popup.style.display = "block";
  
        // close button
        close.addEventListener("click", () => {
          popup.style.display = "none";
        });
      });
    });
  });
  

// Plus popup
const popupShow = document.getElementById("popup-show");
const PopupPlus = document.querySelector(".plus-popup");
const cancelBtn = document.querySelector(".Cancel-btn");

popupShow.addEventListener("click", ()=>{
  PopupPlus.style.display = "block";
});

cancelBtn.addEventListener("click", ()=>{
  PopupPlus.style.display = "none";
})

// Dots popup

document.addEventListener("DOMContentLoaded", () => {
  const showPopupBtns = document.querySelectorAll(".show-popup");

  function closeAllPopups() {
    document.querySelectorAll(".dots-popup").forEach(popup => {
      popup.style.display = "none";
    });
  }

  showPopupBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); 

      closeAllPopups();

 
      const popup = btn.closest(".dots").querySelector(".dots-popup");
      popup.style.display = "block";
    });
  });


  document.addEventListener("click", () => {
    closeAllPopups();
  });
});

