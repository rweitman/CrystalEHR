// Dependencies
var express = require("express");
var expressValidator = require("express-validator");
var react = require("react");
var mongo = require('mongodb');
var mongoose = require("mongoose");
var mongojs = require("mongojs");
var passport = require("passport");
var flash = require('connect-flash');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var User = require('./models/User');

// Initialize Express
var app = express();
var bodyParser = require("body-parser");

// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/politiscraper");
// mongoose.connect("mongodb://localhost/login");
// var db = mongoose.connection;

// Set up a static folder (public) for our web app
app.use(express.static("public"));
// app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "Med_DB";

// var Doctors = ["doctors"];
var Patients = ["patients"];
var Notes = ["notes"];


// Use mongojs to hook the databases to the db variable
// var doctorDb = mongojs(databaseUrl, Doctors);
var noteDb = mongojs(databaseUrl, Notes);
var patientDb = mongojs(databaseUrl, Patients);


// This makes sure that any errors are logged if mongodb runs into an issue
// doctorDb.on("error", function(error) {
//   console.log("Database Error:", error);
// });

noteDb.on("error", function(error) {
  console.log("Database Error:", error);
});

patientDb.on("error", function(error) {
  console.log("Database Error:", error);
});





// Routes **** DEFAULT PLACES FOR NOW ****
// 1. At the root path, send a simple hello world message to the browser
// app.get("/", function(req, res) {
//   res.send("Hello world");
// });

// app.get('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.username);
//     });
//   })(req, res, next);
// });


app.post('/login', passport.authenticate('local', {successFlash: "Welcome",failureFlash: "Invalid username or password"}), (req, res) => {
              console.log(res);
              res.json({message: "Login Successful"});
          });


// ROBERT & PHILS  ROUTES

app.post("/signup", (req,res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
	var email = req.body.email;
	var password = req.body.password;
	var password2 = req.body.password2;
  var profession = req.body.profession;
  var doctorId = req.body.doctorId;
  var hospitalId = req.body.hospitalId;


	// Validation
	req.checkBody('firstName', 'First name is required').notEmpty();
  req.checkBody('lastName', 'Last name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  req.checkBody('profession', 'Profession is required').notEmpty();
  req.checkBody('doctorId', 'Doctor ID is required').notEmpty();
  req.checkBody('hospitalId', 'Hospital ID is required').notEmpty();


	var errors = req.validationErrors();
  if(errors){
		console.log(errors);
    res.json(errors);
	} else {
		var newUser = new User({
       "firstName":req.body.firstName,
       "lastName": req.body.lastName,
       "email": req.body.email,
       "password": req.body.password,
       "profession": req.body.profession,
       "doctorId": req.body.doctorId,
       "hospitalId": req.body.hospitalId
		});

		User.createUser(newUser, (err, user) => {
			if(err) throw err;
			console.log(user);

		});

		req.flash('success_msg', 'You are registered and can now login');

    res.status(200).send({message: "Signup Success"});

	}

}); // END APP.POST FOR SIGNUP ROUTES

passport.use(new LocalStrategy(
  function(email, password, done) {
   User.getUserByEmail(email, function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// 2. At the "/all" path, display every entry in the Doctors collection
app.get("/all", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything
  doctorDb.doctors.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});

// 3. At the "/name" path, display every entry in the doctors collection, sorted by name
app.get("/name", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  doctorDb.doctors.find().sort({ Name: 1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});








app.post("/newPatient",function(req,res){

  console.log(req.body);

  patientDb.patients.insert({ firstName: req.body.firstName,
                              lastName: req.body.lastName,
                              height: req.body.height,
                              weight: req.body.weight,
                              dob: req.body.dob,
                              age: req.body.age,
                              gender: req.body.gender,
                              city: req.body.city,
                              state: req.body.state,
                              zipCode: req.body.zipCode,
                              phone: req.body.phone,
                              email: req.body.email,
                              maritalStatus: req.body.maritalStatus,
                              education: req.body.education,
                              occupation: req.body.occupation,
                              income: req.body.income,
                              referralInfo: req.body.referralInfo,
                              visitReason: req.body.visitReason,
                              medHist: req.body.medHist,
                              allergies: req.body.allergies,
                              immunizations: req.body.immunizations,
                              heartDisease: req.body.heartDisease,
                              heartAttack: req.body.heartAttack,
                              cancer: req.body.cancer,
                              diabetes: req.body.diabetes,
                              highBloodPressure: req.body.highBloodPressure,
                              temperature: req.body.temperature,
                              heartRate: req.body.heartRate,
                              systolicBloodPressure: req.body.systolicBloodPressure,
                              diastolicBloodPressure: req.body.diastolicBloodPressure,
                              respiratoryRate: req.body.respiratoryRate,
                              bmi: req.body.bmi,
                              alcohol: req.body.alcohol,
                              smoking: req.body.smoking,
                              dailyExercise: req.body.dailyExercise,
                              foreignTravel: req.body.foreignTravel,
                              otherComments: req.body.otherComments,
                              note: req.body.note,
                              calendar: 'This patient has an appointment with you today.'},
    function(error,found){
    if(error){
      console.log(error);
    }
    else{
      console.log("New Patient added");
    }
  });
});



// 2. At the "/all" path, display every entry in the Patients collection
app.get("/allPatients", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything
  patientDb.patients.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});



app.get("/allPatients/sort", function(req, res) {
  // Query: In our database, go to the doctors collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  patientDb.patients.find().sort({ Name: 1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      console.log(found);
      res.json(found);
    }
  });
});





// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
