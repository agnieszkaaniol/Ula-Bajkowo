// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navv");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

//fixed menu code starts here

window.onload = () => {
  const menu = document.querySelectorAll('.navv')[0],
      backgroundPic = document.querySelectorAll('.main-background')[0],
      text = document.querySelectorAll('.main-title')[0],
      heroPic = document.querySelector('.main-angel');

  var imgHeight = document.querySelector('.main-background').getBoundingClientRect().height,
      menuFixed = false;
      console.log(imgHeight);

  // teraz kod do src 
  var imgWidth = document.querySelector('.main-background').getBoundingClientRect().width;
  console.log(imgWidth);
  function changeSrc(imgWidth) {
    if (imgWidth < 769) {
      document.getElementsByClassName("main-mountains").src = "img/BGMobilez.png";
      document.getElementsByClassName("main-angel").src = "img/HeroMobilez.png";
    } else {
      document.getElementsByClassName("main-mountains").src = "img/mainBg.png";
      document.getElementsByClassName("main-angel").src = "img/AngelHeroNew.png";
    }
  }
      

//   text.style.fontSize = (window.innerWidth / 24) + 'px';
  window.addEventListener("resize", () => {
    //   text.style.fontSize = (window.innerWidth / 26) + 'px';
      imgHeight = document.querySelector('.main-background').getBoundingClientRect().height;
    //   text.style.top = ((imgH + window.scrollY) / 2) + 'px';
  });

  window.addEventListener('scroll', (e) => {
      if (window.scrollY > imgHeight) {
          if (!menuFixed) {
              menu.style.position = 'fixed';
              menu.style.top = '0';
              menuFixed = true;
          }
      } else {
          if (menuFixed) {
              menu.style.position = 'relative';
              menu.style.top = 'auto';
              menuFixed = false;
          }
         backgroundPic.style.top = (window.scrollY / 2.8) + 'px';
        //  heroPic.style.top = (window.scrollY / 1.5) + 'px';
        //  text.style.top = ((imgHeight + window.scrollY) / 3.5) + 'px';
      }
  })

  //parallax code starts here
  window.addEventListener('scroll', (e) => {
      
      var scrolled = window.pageYOffset;
      var ratePic = scrolled * (-0.3);
      var rateText = scrolled * (0.55);

      heroPic.style.transform = 'translate3d(0px, '+ratePic+'px, 0px)';
      text.style.transform = 'translate3d(0px, '+rateText+'px, 0px)';  

  });
}
