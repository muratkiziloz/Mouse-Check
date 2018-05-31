import './modules'
import $ from 'jquery';


console.log(`app.js has loaded!`)

$(document).ready(function() {

  $('.massage-content').css('display','none');

  function allEvents(select) {
    $(select).addClass('ok');
    $(select).find('.box-content').html('<i class="fas fa-check"></i>')

    var box = $('.box').length;
    var ok = $('.ok').length;

     if (box === ok) {
      $('.massage-content').fadeIn();
      setTimeout(function () {
        location.reload()
      },3000)
     }
  }

  $('.boxHover').hover(function () {
    allEvents(this)
  });
  $('.boxClick').click(function () {
    allEvents(this)
  })
  $('.boxDoubleClick').dblclick(function () {
    allEvents(this)
  })
  $('.boxRightClick').contextmenu(function () {
    allEvents(this)
  })
  $('.boxScroll').scroll(function () {
    allEvents(this)
  })
  $('.scrollClick').mousedown(function (e) {

    if (e.which === 2) {
      $('.scrollClick .box-content').text('').append('<i class="fas fa-check"></i>\n' +
        '\n');
      allEvents(this)
    }
  })
});

