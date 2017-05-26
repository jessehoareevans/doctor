var apiKey = require('./../.env').apiKey;

function Doctor(symptom){
  this.symptom = symptom;
}

Doctor.prototype.getDoctor = function(medicalIssue, doctorInfo){
  var doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
    for (var i=0; i < 20; i++) {
      var name = result.practices[i].name;
      var street = result.visit_address[i].street;
      var zip = result.visit_address[i].zip;
      newDoctor = new Doctor(name, street, zip);
      doctors.push(newDoctor);
    }
    doctorInfo(doctors);
};

exports.doctorModule = Doctor;
