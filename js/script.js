$('span.name').attr({
  'data-0'  : 'height:2em;',
  'data-10' : 'height:0.01em;'
});
$('main .block').attr({
  'data-menu-offset':'-60'
});
$('#carousel').attr({
  'data-top':'margin-bottom:0em',
  'data--300-top':'margin-bottom:-20em'
});
$('#article').attr({
  'data-top':'margin-top:0%'
});
var scroll = skrollr.init({
  smoothScrolling: true,
  mobileDeceleration: 0.004,
  forceHeight: false,
});
skrollr.menu.init(scroll,{
  animate:true,
});

$('.carousel').owlCarousel({
  slideSpeed : 300,
  paginationSpeed : 400,
  itemsScaleUp:true,
  singleItem:true,
  lazyLoad : true,
  center:true,
  dots:true,
  autoPlay:true,
  autoplayTimeout:300,
  merge:true,
  loop:true,
  autoplaySpeed: true,
});

$(document).foundation();
