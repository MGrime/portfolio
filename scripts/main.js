function toggleHamburgerMenu() {
    var links = document.getElementById("navbarLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}