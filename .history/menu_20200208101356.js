//fixed menu code starts here

window.onload = () => {
  
  const menu = document.querySelectorAll('.navv')[0],
      backgroundPic = document.querySelectorAll('.main-background')[0],
      text = document.querySelectorAll('.main-title')[0],
      heroPic = document.querySelector('.main-angel');

  var imgHeight = document.querySelector('.main-background').getBoundingClientRect().height,
      menuFixed = false;
      mountainsPic = document.querySelectorAll('.main-mountains'); //nowa próba
      console.log(imgHeight);

  // changing src code

  var imgWidth = document.querySelector('.main-mountains').getBoundingClientRect().width; //zmiana na mountains
      console.log(imgWidth);

      // function changeSrc(imgWidth) {
      //   if (imgWidth < 769) {
      //     document.getElementById("main-mountains").src = "img/BGMobilez.png";
      //     document.getElementById("main-angel").src = "img/HeroMobilez.png";
      //   } else {
      //     document.getElementById("main-mountains-desktop").src = "img/mainBg.png";
      //     document.getElementById("main-angel-desktop").src = "img/AngelHeroNew.png";
      //   }
      //   console.log()
      // };

      // changeSrc(imgWidth);

      // function change() {
      //   var imageBg = document.getElementsByClassName('.main-mountains');
      //   var imageHero = document.getElementsByClassName('.main-angel');

      //   imageBg.addEventListener(imgWidth);
      //   imageHero.addEventListener(imgWidth);

      //   if (imgWidth < 769) {
      //     imageBg.src = "img/BGMobilez.png";
      //     imageHero.src = "img/HeroMobilez.png";
      //   } else {
      //     imageBg.src = "img/mainBg.png";
      //     imageHero.src = "img/AngelHeroNew.png";
      //   }
      //   console.log(imageHero.src);
      // };

      window.addEventListener("resize", () => {
        if (imgWidth < 769) {
          mountainsPic.src = "img/BGMobilez.png";
          heroPic.src = "img/HeroMobilez.png";
        } else {
          mountainsPic = "img/mainBg.png";
          heroPic.src = "img/AngelHeroNew.png";
        }
        console.log(heroPic.src);
        console.log(mountainsPic.src);
    
      });
   
      
  window.addEventListener("resize", () => {
      imgHeight = document.querySelector('.main-background').getBoundingClientRect().height;
      imgWidth = document.querySelector('.main-background').getBoundingClientRect().width;
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
