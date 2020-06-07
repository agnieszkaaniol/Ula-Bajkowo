//fixed menu code starts here

window.onload = () => {
  
  const menu = document.querySelectorAll('.navv')[0],
      backgroundPic = document.querySelectorAll('.main-background')[0],
      text = document.querySelectorAll('.main-title')[0],
      heroPic = document.querySelector('.main-angel');

  var imgHeight = document.querySelector('.main-background').getBoundingClientRect().height,
      menuFixed = false;
      console.log(imgHeight);

  // changing src code
  var imgWidth = document.querySelector('.main-background').getBoundingClientRect().width;
      console.log(imgWidth);

      function changeSrc(imgWidth) {
        if (imgWidth < 769) {
          document.getElementById("main-mountains").src = "img/BGMobilez.png";
          document.getElementById("main-angel").src = "img/HeroMobilez.png";
        } else {
          document.getElementById("main-mountains-desktop").src = "img/mainBg.png";
          document.getElementById("main-angel-desktop").src = "img/AngelHeroNew.png";
        }
      };

      changeSrc(imgWidth;)
   
      
  window.addEventListener("resize", () => {
      imgHeight = document.querySelector('.main-background').getBoundingClientRect().height;
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
