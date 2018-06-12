'use strict';

$.getJSON("prayer-times.json", function(prayer) {
    var date = getDate();
    $(".fajr-begins").append(prayer[date]["Fajr Begins"]);
    $(".fajr-jamah").append(prayer[date]["Fajr Jama‘ah"]);
    $(".zuhr-begins").append(prayer[date]["Zuhr Begins"]);
    $(".zuhr-jamah").append(prayer[date]["Zuhr Jama‘ah"]);
    $(".asr-begins").append(prayer[date]["Asr Mithl 2"]);
    $(".asr-jamah").append(prayer[date]["Asr Jama‘ah"]);
    $(".maghrib-begins").append(prayer[date]["Maghrib Begins"]);
    $(".maghrib-jamah").append(prayer[date]["Maghrib Jama‘ah"]);
    $(".isha-begins").append(prayer[date]["Isha Begins"]);
    $(".isha-jamah").append(prayer[date]["Isha Jama‘ah"]);
});

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    return today = dd+'/'+mm+'/'+yyyy;
}
