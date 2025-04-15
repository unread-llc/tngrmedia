var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// var colors = ['#FFB800', '#57B8FF', '#1F4EFE', '#FF223F', '#21D59B', '#F99600', '#D909E2', '#7600FF', '#4BC400', '#C758F8', '#1CD3D3'];
var colors = ['#66B7DC', '#6795DC', '#6771DC', '#7F67DC', '#A367DC', '#C767DC', '#DC67CE', '#DB68AB', '#DB6788', '#DB6967', '#DC8D67'];
// var arrayLength = myStringArray.length;


var t = 0;

$('.bar-item').each(function (i, obj) {
    var percent = $(this).data("percent");

    $(this).css("width", percent + "%");
    $(this).css("background", colors[t]);

    t++;
});

var s = 0;
$('.bar-value-dot').each(function (i, obj) {
    $(this).css("background", colors[s]);
    s++;
});



$(".bar-value").mouseover(function () {
    var i = $(this).index();
    if (i == 11) {
        i = 10;
    }

    $(".bar-item").removeClass("hover");
    $(".bar-item").removeClass("active");

    $(".bar-item").addClass("hover");
    $(".bar-item").eq(i).addClass("active");
});

$(".share-bar-table").mouseleave(function () {
    $(".bar-item").removeClass("hover");
    $(".bar-item").removeClass("active");
});



}
/*
     FILE ARCHIVED ON 05:51:03 Jan 24, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:10:59 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.474
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.015
  esindex: 0.008
  cdx.remote: 12.217
  LoadShardBlock: 118.191 (3)
  PetaboxLoader3.datanode: 105.327 (5)
  PetaboxLoader3.resolve: 153.633 (2)
  load_resource: 160.092
  loaddict: 30.858
*/