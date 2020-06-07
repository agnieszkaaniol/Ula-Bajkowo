
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

 
  // language hover code

  const langHover = document.querySelectorAll('.languages li');

  for (let lh of langHover) {
    lh.addEventListener('mouseover', (event) => {
      event.target.style.color = "white";
    }, false);
  
    lh.addEventListener('mouseout', (event) => {
      // event.target.style.color = "black";
      setTimeout(() => {
        event.target.style.color = "black";
      }, 500);
    }, false);
  }



  
}
