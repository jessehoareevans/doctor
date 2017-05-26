var Doctor = require('./../js/doctor.js').doctorModule;

var docInfo = function(doctors) {

  doctors.forEach(function(doctor){
    $('.output').append("<li>The title of the missing bike is " + bike.title + "the color is " + bike.color  + " the year of the bike is" + bike.year + ".</li>");
});
};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $ ("#submit").click(function(){
    var symptom = $('#symptom').val();
    $('#symptom').val("");
    currentDoctorObject.getDoctor();
  });
});
