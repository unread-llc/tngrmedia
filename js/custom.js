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

$(document).ready(function () {
    $(".progress-container").delay(500).fadeOut(400);
});


var currentX = '';
var currentY = '';
var movementConstant = .010;

$(document).mousemove(function (e) {
    if (currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
    if (currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;

    $('.parallax .city-container').each(function (i, el) {
        var movement = (i + 1) * (xdiff * movementConstant);
        var movementy = (i + 1) * (ydiff * movementConstant);
        var newX = $(el).position().left - movement;
        var newY = $(el).position().top - movementy;
        var cssObj = {
            'left': newX + 'px',
            'top': newY + 'px'
        };

        // $(el).css('left', newX + 'px');
        // $(el).css('top', newY + 'px');
        $(el).css({
            "transform": "translate(" + newX + "px, " + newY + "px)"
        });

        $(".dot-txt").css({
            "transform": "translate(" + newX + 10 + "px, " + newY + "px)"
        });

        $(".dot-container").css({
            "transform": "translate(" + newX + 20 + "px, " + newY + "px)"
        });

    });


    $('.goyoback').each(function (i, el) {
        var movement = (i + 1) * (xdiff * movementConstant);
        var movementy = (i + 1) * (ydiff * movementConstant);
        var newX = $(el).position().left - movement;
        var newY = $(el).position().top - movementy;
        var cssObj = {
            'left': newX + 'px',
            'top': newY + 'px'
        };

        $(el).css({
            "transform": "translate3d(" + newX + "px, " + newY + "px, 700px)"
        });

    });



});




$(function () {
    // var obj;
    // $.get('', function (result) {
    //     obj = $(result).find('#trade_chart ul li b');
    //     // var page1X = $(result).find('div.myData').data('x');
    //     // var page1Y = $(result).find('div.myData').data('y');

    // });


    // $.get('https://web.archive.org/web/20220124053935/http://mse.mn/mn/company/408', null, function (text) {
    //     alert($(text).find('#trade_chart ul li b'));
    // });


    // $.ajax({
    //     url: 'https://web.archive.org/web/20220124053935/http://mse.mn/mn/company/408',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     type: "POST", /* or type:"GET" or type:"PUT" */
    //     dataType: "json",
    //     data: {
    //     },
    //     success: function (result) {
    //         console.log(result);
    //     },
    //     error: function () {
    //         console.log("error");
    //     }
    // });

    // $.ajax({
    //     url: "https://web.archive.org/web/20220124053935/http://mse.mn/mn/company/408", success: function (result) {
    //         alert(result);
    //     }
    // });


    // var options = {

    //     strings: [
    //         '',
    //         'Монголын анхны <br class= "uk-hidden@s"><span class= "txt-gradient" > олон нийтийн</span > <br class=""><span class="txt-gradient">нээлттэй хувьцаат</span><br class="uk-hidden@s"> медиа холдинг<br class="uk-visible@s">компани'],
    //     typeSpeed: 20
    // };

    // var typed = new Typed('.home-title', options);

});

}
/*
     FILE ARCHIVED ON 05:39:35 Jan 24, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:10:35 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.536
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.018
  esindex: 0.01
  cdx.remote: 10.297
  LoadShardBlock: 241.587 (3)
  PetaboxLoader3.datanode: 136.587 (5)
  PetaboxLoader3.resolve: 304.573 (2)
  load_resource: 230.497
  loaddict: 29.531
*/