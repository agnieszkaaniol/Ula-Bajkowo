let sidebarNavStatus = false;

let sidebarNav = function () {
    let getSidebar = document.querySelector('.nav-sidebar');
    let getUl = document.querySelector('.nav-sidebar ul');
    let getA = document.querySelectorAll('.nav-sidebar a');

    if (sidebarNavStatus === false) {
        getUl.style.visibility = "visible";
        getSidebar.style.width = "200px";
        getSidebar.style.backgroundColor = "var(--white)";

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

window.addEventListener('scroll', (e) => {
    let getSidebar = document.querySelector('.nav-sidebar'),
        getBtn = document.querySelector('.btn-toggle');

    if (getBtn.style.position = "fixed") {
        getSidebar.style.visibility = "visible";
    }
})


/*() => { // naslych dla 1-wszego popupa
    a.p.eventOut[0] = e => {
        let area = a.r(a.p.popup[0]),
            x = e.clientX,
            y = e.clientY;
        // console.log('%c area:', 'background: #ffcc00; color: #003300', area, x, y)
        if (!(area.left < x && area.right > x && area.top < y && area.bottom > y)) {
            a.p.close(0)
            console.log('%cyou are outside of area:', 'background: red; color: #003300')
        } else {
            console.log('%cyou are on area:', 'background: green; color: #003300')
        }
    }
    document.body.addEventListener('click', a.p.eventOut[0])
    console.log('%c document.body:', 'background: #ffcc00; color: #003300', document.body)
},*/