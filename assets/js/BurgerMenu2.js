const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const links = document.querySelectorAll('.dropdown_menu a');

// Store the original icon class
const originalIconClass = toggleBtnIcon.className;

// Function to open or close the menu
function toggleMenu() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark fa-xl' : originalIconClass;
}

// Click event listener for the toggle button
toggleBtn.onclick = function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    toggleMenu();
};

// Click event listener for links within the dropdown menu
links.forEach(link => {
    link.addEventListener('click', function () {
        toggleMenu();
    });
});

// Click event listener for the document (to close the menu)
document.addEventListener('click', function () {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.className = originalIconClass; // Revert to the original icon class
});

// Scroll event listener for the document (to close the menu)
document.addEventListener('scroll', function () {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.className = originalIconClass; // Revert to the original icon class
});
