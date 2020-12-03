function scrollPaging() {
  var page = {
    current: 1,
    total: 2
  };

  $(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      console.log('aa');

      if (page.current < page.total) {

        $.ajax({
          url: url,
          type: "GET",
        }).done(function(data) {
          console.log('data');
        });

      }

    }
  });

}

$(document).ready(function(){

  //스크롤시 모듈고정 플러그인
  $('.sticky').fixer({
      gap: 10
  });

  scrollPaging();
});
