window.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById('date');
  
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
  
    const picker = flatpickr("#date", {
      dateFormat: "Y-m-d",
      defaultDate: currentDate,
      clickOpens: false
    });
  
    const icon = document.querySelector(".calendar-icon");
  
    if (icon) {
      icon.addEventListener("click", () => {
        picker.open(); 
      });
    }
  });
  
  window.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById('dateBtn');
  
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
  
    const picker = flatpickr("#dateBtn", {
      dateFormat: "Y-m-d",
      defaultDate: currentDate,
      clickOpens: false
    });
  
    const icon = document.querySelector(".date-icon");
  
    if (icon) {
      icon.addEventListener("click", () => {
        picker.open(); 
      });
    }
  });
  
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  
  // Gradient colors banane ka kaam
  const gradientPurple = ctx.createLinearGradient(0, 0, 0, 400);
  gradientPurple.addColorStop(0, 'rgba(239, 241, 254, 0.6)');
  gradientPurple.addColorStop(1, 'rgba(239, 241, 254, 0)');
  
  const gradientTeal = ctx.createLinearGradient(0, 0, 0, 400);
  gradientTeal.addColorStop(0, 'rgba(229, 242, 242, 0.6)');
  gradientTeal.addColorStop(1, 'rgba(229, 242, 242, 0)');
  
  const gradientBeige = ctx.createLinearGradient(0, 0, 0, 400);
  gradientBeige.addColorStop(0, 'rgba(245, 243, 236, 0.6)');
  gradientBeige.addColorStop(1, 'rgba(245, 243, 236, 0)');
  
  // Chart create karna
  const attendanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'On Time',
          data: [20, 30, 35, 40, 45, 50, 48, 52, 60, 85, 65, 50],
          backgroundColor: gradientPurple,
          borderColor: '#248CD8',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          borderWidth: 2 
        },
        {
          label: 'Late',
          data: [15, 20, 25, 22, 30, 28, 35, 32, 30, 25, 22, 20],
          backgroundColor: gradientTeal,
          borderColor: '#00B172',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          borderWidth: 2
        },
        {
          label: 'Absents',
          data: [10, 15, 12, 20, 18, 22, 15, 18, 16, 12, 10, 8],
          backgroundColor: gradientBeige,
          borderColor: '#09182B',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 100,
          grid: {
            drawBorder: true,   
            drawTicks: true,       
            color: '#ccc',        
            lineWidth: 1,
            borderDash: [5, 5]     
          },
          ticks: {
            stepSize: 20,
            color: '#000',
            callback: function(value) {
              return value + '%';
            }
          }
        },
        x: {
          grid: {
            drawBorder: true,
            drawTicks: true,
            display: false         // X axis vertical grid hide
          },
          ticks: {
            color: '#000'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
  
  
  const employeeCtx = document.getElementById('employeeChart').getContext('2d');
  
  const employeeChart = new Chart(employeeCtx, {
    type: 'line',
    data: {
      labels: ['Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025', 'May 2022', 'Jun 2022'],
      datasets: [
        {
          label: '7 Employee',
          data: [1, 3, 4, 2, 3, 1],
          borderColor: '#00b894',
          backgroundColor: '#00b894',
          borderWidth: 2,
          tension: 0.4,
          fill: false,
          pointRadius: 0, 
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#00b894',
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 4,
          pointStyle: 'circle'
        },
        {
          label: '2 Employee',
          data: [2, 4, 6, 3, 5, 4],
          borderColor: '#0984e3',
          backgroundColor: '#0984e3',
          borderWidth: 2,
          tension: 0.4,
          fill: false,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#0984e3',
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 4,
          pointStyle: 'circle'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'nearest',
          intersect: true,
          backgroundColor: '#fff',
          titleColor: '#000',
          bodyColor: '#000',
          borderColor: '#ccc',
          borderWidth: 1,
          cornerRadius: 10, 
          displayColors: true,
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true, 
          callbacks: {
            label: function(context) {
              const value = context.parsed.y;
              return `${value} Employee`;
            }
          }
        }
      },
      interaction: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            callback: function(value) {
              return value + "%";
            }
          }
        }
      }
    }
  });
  
  
  document.getElementById('employeeChart').addEventListener('mousemove', function (event) {
    const points = employeeChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    if (points.length) {
      this.style.cursor = 'pointer';
    } else {
      this.style.cursor = 'default';
    }
  });
  
  
  // Notification center + message center
  
  const notificationCenter = document.querySelector(".notification-center");
  const topSection = document.querySelector(".top-section");
  const topContainer = document.querySelector(".top-container");
  const backBtn = document.getElementById("back-dashboard");
  
  const msgBtn = document.querySelector(".message-center"); 
  const backButton = document.getElementById("back"); 
  
  const messageSection = document.querySelector(".message-section");
  
  document.addEventListener("DOMContentLoaded", () => {
    const lastView = localStorage.getItem("dashboardView");
  
    if (lastView === "notifications") {
      topContainer.classList.remove("hidden");
      topSection.classList.add("hidden");
      messageSection.classList.add("hidden");
    } else if (lastView === "messages") {
      messageSection.classList.remove("hidden");
      topSection.classList.add("hidden");
      topContainer.classList.add("hidden");
    } else {
      topSection.classList.remove("hidden");
      topContainer.classList.add("hidden");
      messageSection.classList.add("hidden");
    }
  });
  
  notificationCenter.addEventListener("click", () => {
    topContainer.classList.remove("hidden");
    topSection.classList.add("hidden");
    messageSection.classList.add("hidden");
    localStorage.setItem("dashboardView", "notifications");
  });
  
  msgBtn.addEventListener("click", () => {
    messageSection.classList.remove("hidden");
    topSection.classList.add("hidden");
    topContainer.classList.add("hidden");
    localStorage.setItem("dashboardView", "messages");
  });
  
  backBtn.addEventListener("click", () => {
    topSection.classList.remove("hidden");
    topContainer.classList.add("hidden");
    messageSection.classList.add("hidden");
    localStorage.setItem("dashboardView", "dashboard");
  });
  
  backButton.addEventListener("click", () => {
    topSection.classList.remove("hidden");
    messageSection.classList.add("hidden");
    topContainer.classList.add("hidden");
    localStorage.setItem("dashboardView", "dashboard");
  });
  