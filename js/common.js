$(function () {
	// body...
	$(".header-nav__burger").click(function(){
		$('.header-nav__burger,.nav-list__items').toggleClass('active')
	});
	$(document).mouseup(function (e){ // событие клика по странице
        if (!$(".header-nav__burger,.nav-list__items").is(e.target) &&
        	$(".header-nav__burger,.nav-list__items").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".header-nav__burger,.nav-list__items").removeClass("active");
        }
   });
	$('.slider').slick({
		arrows: true,
		dots: true,
	});
})
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
function initMap() {
  // The location of Uluru
  var uluru = {lat: 52.2761516, lng: 104.3534826};
  var center = {lat: 52.2755703, lng: 104.3542733};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 15, center: center});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
	}