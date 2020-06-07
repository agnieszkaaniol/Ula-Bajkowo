let sidebarNav = false;

let sidebarNav = function() {
    let getSidebar = document.querySelector('.nav-sidebar');
    let getUl = document.querySelector('.nav-sidebar ul');
    let getA = document.querySelectorAll('.nav-sidebar a');

    if (sidebarNav === false) {
        getUl.style.visibility = "visible";
        getSidebar.style.width = "200px";
        getSidebar.style.backgroundColor = "rgba(255, 255, 255, .6";
    }
}