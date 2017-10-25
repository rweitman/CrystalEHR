var axios = require("axios");

var Helper = {

  loginAuth: function (request, callback) {
    return axios.post("/login", request).then((res) => {
      callback(res);

    });
  },

  signUp: function (request, callback) {
      return axios.post("/signup", request).then((res) => {
        // var response = JSON.stringify(res);
        callback(res);
        // console.log(res);
        // console.log("Success");
      });

  },

  newPatient: function (request, callback) {
    console.log("From Helper" + JSON.stringify(request));
    return axios.post("/newPatient", request).then((res) => {
      callback(res);
    });
  }


}; // END HELPER CLASS

module.exports = Helper;
