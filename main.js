$(function() {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 9000);
  };

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
  });

  var flip = document.querySelector('.flipme');
  var menutitle = document.querySelector('.menutitle');
  var menuwrap = document.querySelector('.menuhide');
  var menuitems = document.querySelector('.menuitems');
  var chevron = document.querySelector('.chevron');

  menutitle.onclick = slideMenu;

  function slideMenu() {
    menuitems.classList.toggle('showmenuitems');
    menuwrap.classList.toggle('menushow');
    flip.classList.toggle('flipped');
    chevron.classList.toggle('openchevron');
  };

  window.onscroll = function() {
    showBar()
    activeLink()
  };

  function showBar() {
    var barswitch = document.querySelector('.barswitch');
    var smbar = document.querySelector('.socialmediabar');

    var show = barswitch.offsetTop;

    if (window.pageYOffset >= show) {
      smbar.classList.add('showbar')
    } else {
      smbar.classList.remove('showbar')
    }
  };

  function activeLink() {
    var lbmenu = document.querySelector('.linkbarmenu');
    var lbgal = document.querySelector('.linkbargal');
    var lbinf = document.querySelector('.linkbarinf');
    var lbcont = document.querySelector('.linkbarcont');

    var menus = document.querySelector('#menu');
    var menuoff = document.querySelector('#menuoff');
    var gals = document.querySelector('#gallery');
    var infs = document.querySelector('#info');
    var conts = document.querySelector('#contact');

    var m = menus.offsetTop;
    var mo = menuoff.offsetTop;
    var g = gals.offsetTop;
    var i = infs.offsetTop;
    var c = conts.offsetTop;

    if (window.pageYOffset >= m && window.pageYOffset < mo) {
      lbmenu.classList.add('activebar')
      lbgal.classList.remove('activebar')
    } else if (window.pageYOffset >= g && window.pageYOffset < i ) {
      lbmenu.classList.remove('activebar')
      lbinf.classList.remove('activebar')
      lbcont.classList.remove('activebar')
      lbgal.classList.add('activebar')
    } else if (window.pageYOffset >= i && window.pageYOffset < c) {
      lbgal.classList.remove('activebar')
      lbcont.classList.remove('activebar')
      lbinf.classList.add('activebar')
    } else if (window.pageYOffset >= c) {
      lbgal.classList.remove('activebar')
      lbinf.classList.remove('activebar')
      lbcont.classList.add('activebar')
    } else {
      lbmenu.classList.remove('activebar')
    }
  };
});
