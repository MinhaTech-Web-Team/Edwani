document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".heading-section .heading-name");

    const holidaySection = document.querySelector(".holiday-section");
    const meetingSection = document.querySelector(".meeting-section");
    const eventSection   = document.querySelector(".event-section");

    function hideAll() {
        holidaySection.classList.add("hidden");
        meetingSection.classList.add("hidden");
        eventSection.classList.add("hidden");
    }

    // last active tab ka index get karo
    let activeIndex = localStorage.getItem("activeTab") || 0;

    function showSection(index) {
        hideAll();
        headings.forEach(h => h.classList.remove("Active"));

        if (index == 0) {
            holidaySection.classList.remove("hidden");
        } else if (index == 1) {
            meetingSection.classList.remove("hidden");
        } else if (index == 2) {
            eventSection.classList.remove("hidden");
        }

        headings[index].classList.add("Active");
        localStorage.setItem("activeTab", index); //  store karo
    }

    // Page load pe last section show karo
    showSection(activeIndex);

    // Click handler
    headings.forEach((heading, index) => {
        heading.addEventListener("click", () => {
            showSection(index);
        });
    });
});
