var Doctor = require('./../js/doctor.js').doctorModule;

var doctorInfo = function(doctors) {

  doctors.forEach(function(doctor){
    $('.output').append("<li>This is the name of a doctor that can help " + doctor.first + " " + doctor.last + " " + doctor.title  +  ", now quick bit of information about " + doctor.bio +  ".</li>");
  });
};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $ ("#submit").click(function(){
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    currentDoctorObject.getDoctor(medicalIssue, doctorInfo);
  });
});
