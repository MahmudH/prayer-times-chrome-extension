'use strict';

// $.getJSON("prayer-times.json", function(prayer) {
//     $(".hadith-title").append(hadith[0].title);
//     $(".hadith-text").append(hadith[0].text);
//     $(".hadith-reference").append(hadith[0].reference);
//  });

function checkTime(i) {
    return (i < 10) ? "0" + i : i;
}
 
var dt = new Date();
var am_pm = dt.getHours() >= 12 ? "PM" : "AM";
var time = checkTime(dt.getHours()) + ":" + checkTime(dt.getMinutes()) + " " + am_pm;
$(".current-time").append(time);

