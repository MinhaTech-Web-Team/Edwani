document.addEventListener("DOMContentLoaded", function (){
    
    const dateInput = document.getElementById("date");
    const calendar = flatpickr(dateInput,{
        dateFormat: "Y-m-d",
        defaultDate: new Date(),
        clickOpens: false

    });
    document.querySelector(".date-img").addEventListener("click", function(){
        calendar.open();
    })
})