// Function to handle subscription button click
function subscribe(plan) {
    alert("You have subscribed to the " + plan);
    // Later enhance this to handle payment or redirection
}

// Function to toggle the drawer menu
function toggleMenu() {
    var drawer = document.getElementById("drawer");
    if (drawer.style.left === "0px") {
        drawer.style.left = "-250px"; // Hide the drawer
    } else {
        drawer.style.left = "0"; // Show the drawer
    }
}

// Function to show specific page content (for navigation menu)
function showPage(page) {
    var pages = document.querySelectorAll('.page-section');
    pages.forEach(function (p) {
        p.style.display = 'none'; // Hide all pages
    });
    document.getElementById(page).style.display = 'block'; // Show selected page
}

// Initialize with home page shown
document.addEventListener('DOMContentLoaded', function () {
    showPage('home');
});