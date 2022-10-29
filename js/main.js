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
    variableWidth: true,
    appendArrows: $('.reviews__slider-arrows'),
    appendDots: $('.reviews__slider-dots')
  })

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

});