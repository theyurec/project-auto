$(function () {

  $(".rateYo").rateYo({
    rating: 4.5,
    readOnly: true
    })

  $(".reviews__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    draggable: false,
    appendArrows: $('.reviews__slider-arrows'),
    appendDots: $('.reviews__slider-dots'),
    responsive:
    [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          draggable: true,
        }
      }
    
    ]
  });
  

  $('.reviews__slider-prev').on('click', function(e){
    e.preventDefault()
      $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__slider-next').on('click', function(e){
    e.preventDefault()
      $('.reviews__slider').slick('slickNext')
  })

  $('.questions__link').on('click', function(e){
    e.preventDefault()
    if($(this).hasClass('questions__link--active')) {
      $(this).removeClass('questions__link--active')
      $(this).children('.questions__item-text').slideUp()
    } else {
      $('.questions__link').removeClass('questions__link--active')
      $('.questions__item-text').slideUp()
      $(this).addClass('questions__link--active')
      $(this).children('.questions__item-text').slideDown()
    }
  })

  $('.burger, .overlay').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--close')
  })

  setInterval(() => {
    if($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }  
  }, 0)

});