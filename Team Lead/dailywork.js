const calendar = flatpickr("#show-date", {
    mode: "range",
    dateFormat: "M j", 
    clickOpens: false,  
    locale: {
      rangeSeparator: " - " 
    },
    defaultDate: [
      new Date(new Date().getFullYear(), new Date().getMonth(), 1), // start of current month
      new Date() 
    ],
  });

  
  document.getElementById("date").addEventListener("click", function() {
    calendar.open();
  });