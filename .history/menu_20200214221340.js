
window.onload = () => {

  const menu = document.querySelectorAll('.navv')[0],
    backgroundPic = document.querySelectorAll('.main-background')[0],
    text = document.querySelectorAll('.main-title')[0],
    heroPic = document.querySelector('.main-angel');

  let imgHeight = document.querySelector('.main-background').getBoundingClientRect().height,
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

  // {
  //   var scrolled = document.getBoundingClientRect().height;
  //   console.log('%c scrolled:', 'background: #ffcc00; color: #003300', scrolled)
  //   var ratePic = scrolled * (-0.3);
  //   var rateText = scrolled * (0.55);

  //   heroPic.style.transform = 'translate3d(0px, ' + ratePic + 'px, 0px)';
  //   text.style.transform = 'translate3d(0px, ' + rateText + 'px, 0px)';
  // }
  // fixed menu code
  window.addEventListener('scroll', (e) => {
    let menu = document.querySelectorAll('.navv')[0],
      imgHeight = document.querySelector('.main-background').getBoundingClientRect().height;
    if (window.scrollY > imgHeight * .76923) {
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
    console.log('%c scrolled:', 'background: #ffcc00; color: #003300', scrolled)
    var ratePic = scrolled * (-0.3);
    var rateText = scrolled * (0.55);

    // heroPic.style.transform = 'translate3d(0px, ' + ratePic + 'px, 0px)';
    // text.style.transform = 'translate3d(0px, ' + rateText + 'px, 0px)';

    heroPic.style.top = ratePic + 'px';
    text.style.top = rateText + 'px';

  });


  // language hover code

  const langHover = document.querySelectorAll('.languages li');

  for (let lh of langHover) {
    lh.addEventListener('mouseover', (event) => {
      setTimeout(() => {
        event.target.style.color = "white";
      }, 70);
    }, false);

    lh.addEventListener('click', (event) => {
      setTimeout(() => {
        event.target.style.color = "grey";
      }, 100);
    }, false);

    lh.addEventListener('mouseout', (event) => {
      setTimeout(() => {
        event.target.style.color = "black";
      }, 100);
    }, false);
  }

  // fixed menu code 

  window.addEventListener('scroll', (e) => {

    if (menu.style.position = "fixed") {
      menu.style.visibility = "visible";
    }
  })

  // checkbox code
  /*
    const checkbox = document.querySelector("input[name=checkbox]");
  
     checkbox.addEventListener( 'change', function() {
      if(this.checked) {
          // Checkbox is checked.. możesz kliknąć button i przejść do opcji "Dziękuję za subskrypcję newslettera! Sprawdź email i potwierdź swoje konto"
      } else {
          // Checkbox is not checked..zapoznaj się z regulaminem
      }
  });*/

  //regulamin onclick open popup z regulaminem
  //kliknięcie w submit bez zaznaczenia rubryki alert "Zapoznaj się z regulaminem", pod spodem ok
  //przejdź do maila i potwierdź 
  //przejdź na stronę - wiadomość "Twoja subskrypcja działa!" (czy cos takiego)
  //to był AcyMailing Joomla


}


