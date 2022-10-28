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

});