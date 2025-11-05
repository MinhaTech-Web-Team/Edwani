document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html") // menu.html ka path
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;

            // Menu load hone ke baad menu items select karo
            const menuItems = document.querySelectorAll("#menu-placeholder .menu-item");

            // Current page find karo
            let currentPage = window.location.pathname.split("/").pop();

            menuItems.forEach(item => {
                // Jo link hai usko check karo
                const link = item.querySelector("a");
                if (link && link.getAttribute("href").includes(currentPage)) {
                    item.classList.add("active");
                }

                // Click event listener lagao
                item.addEventListener("click", () => {
                    menuItems.forEach(i => i.classList.remove("active"));
                    item.classList.add("active");
                });
            });
        })
        .catch(error => console.error("Menu load error:", error));
});


document.querySelector('.toggleMenuBtn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('closed');
});



  