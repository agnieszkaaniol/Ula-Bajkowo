let sidebarNavStatus = false;

let sidebarNav = function() {
    let getSidebar = document.querySelector('.nav-sidebar');
    let getUl = document.querySelector('.nav-sidebar ul');
    let getA = document.querySelectorAll('.nav-sidebar a');

    if (sidebarNavStatus === false) {
        getUl.style.visibility = "visible";
        getSidebar.style.width = "200px";
        getSidebar.style.height = "100vh";
        getSidebar.style.backgroundColor = "white";

        let arrayLength = getA.length;
        for (let i = 0; i < arrayLength; i++) {
            getA[i].style.opacity = "1";
        }
        sidebarNavStatus = true;
    } 
    
    else if (sidebarNavStatus === true) {
      getUl.style.visibility = "hidden";
      getSidebar.style.width = "0px";
      getSidebar.style.backgroundColor = "rgba(255, 255, 255, .01";

      let arrayLength = getA.length;
      for (let i = 0; i < arrayLength; i++) {
          getA[i].style.opacity = "0";
      }

      sidebarNavStatus = false;
    }
}
