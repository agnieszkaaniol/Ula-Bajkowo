
window.onload = () => {
  
  const menu = document.querySelectorAll('.navv')[0],
      backgroundPic = document.querySelectorAll('.main-background')[0],
      text = document.querySelectorAll('.main-title')[0],
      heroPic = document.querySelector('.main-angel');

  var imgHeight = document.querySelector('.main-background').getBoundingClientRect().height,
      mountainsPic = document.querySelector('.main-mountains'),
      imgWidth = document.querySelector('.main-mountains').getBoundingClientRect().width,
      menuFixed = false;

       // changing src code

      if (imgWidth < 769) {
        mountainsPic.src = "img/BGMobilez.png",
        heroPic.src = "img/HeroMobilez.png";
      } else {
        mountainsPic.src = "img/BGobciete.png",
        heroPic.src = "img/AngelHeroNew.png";
      }

      window.addEventListener("resize", () => {

      imgHeight = document.querySelector('.main-background').getBoundingClientRect().height;
      imgWidth = document.querySelector('.main-mountains').getBoundingClientRect().width;

        if (imgWidth < 769) {
          mountainsPic.src = "img/BGMobilez.png",
          heroPic.src = "img/HeroMobilez.png";
        } else {
          mountainsPic.src = "img/BGobciete.png",
          heroPic.src = "img/AngelHeroNew.png";
        }
      });
   

  // fixed menu code

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
      }
  })

  //parallax code

  window.addEventListener('scroll', (e) => {
      
      var scrolled = window.pageYOffset;
      var ratePic = scrolled * (-0.3);
      var rateText = scrolled * (0.55);

      heroPic.style.transform = 'translate3d(0px, '+ratePic+'px, 0px)';
      text.style.transform = 'translate3d(0px, '+rateText+'px, 0px)';  

  });

  // var langHover = document.getElementsByClassName('lang-hov');

  langHover = document.querySelector('.languages li');

  // langHover.addEventListener('mouseenter', (event) => {
  //   let target = event.target;
  //   event.target.style.color = "green";
  //   setTimeout(function() {
  //     event.target.style.color = "";
  //   }, 500);
  // }, false);

  langHover.addEventListener('mouseover', (event) => {
    let target = event.target;
    event.target.style.color = "white";
    // setTimeout(function() {
    //   event.target.style.color = "";
    // }, 500);
  }, false);

  langHover.addEventListener('mouseout', (event) => {
    let target = event.target;
    event.target.style.color = "black";
    // setTimeout(function() {
    //   event.target.style.color = "";
    // }, 500);
  }, false);

//   var langHover = document.getElementsById('.languages');

//   function myHover() {
//     langHover.style.color = 'white';
//   }

//   if (langHover.addEventListener) { //addEventListener is the standard method to add events to objects.
//     langHover.addEventListener('mouseover', myHover, false);
//   }

//   else if (langHover.attachEvent) { //For Internet Explorer
//     langHover.attachEvent('onmouseover', myHover);
//   }

// else { //For other browsers
//   langHover.onmouseover = myHover;
// }
}
