$(document).ready(function() {
  $('.js-display-fr').click(function(){
    $('.en').css('display', 'none');
    $('.fr').css('display', 'inherit');
  })
  $('.js-display-en').click(function(){
    $('.fr').css('display', 'none');
    $('.en').css('display', 'inherit');
  })
})
