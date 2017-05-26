var apiKey = require('./../.env').apiKey;

 function Doctor(bio, first, last, title){
  this.bio = bio;
  this.first = first;
  this.last = last;
  this.title = title;
}

Doctor.prototype.getDoctor = function(medicalIssue, doctorInfo){
  var doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
    console.log(result);

      for (var i=0; i < 20; i++) {
      var bio = result.data[i].profile.bio;
      var first = result.data[i].profile.first_name;
      var last = result.data[i].profile.last_name;
      var title = result.data[i].profile.title;

      newDoctor = new Doctor(bio, first, last, title);
      doctors.push(newDoctor);
    }
    doctorInfo(doctors);
  }) .fail(function(error) {
    $('.output').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
