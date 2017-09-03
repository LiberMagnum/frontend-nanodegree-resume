/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs": [
		{
			"employer": "MCCS",
			"title": "Fast Food Worker",
			"location": "Okinawa, Japan",
			"dates": "July 2017 - August 2017",
			"description": "lorem ipsum dolor sit amet etc. etc. etc."
		}
	],

	"display": function() {
		for (var job = 0; job < work.jobs.length; job++) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "My Project",
			"dates": "2019-2024", 
			"description": "lorem ipsum dolor sit amet etc. etc. etc.",
			"images": ["images/DSCF0654 (2).JPG", "images/DSCF0663 (2).JPG"]
		}
	],

	"display": function() {
		for (var i = 0; i < projects.projects.length; i++) {
			var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(title);
			$(".project-entry:last").append(dates);
			$(".project-entry:last").append(description);

			if (projects.projects[i].images.length > 0) {
				for (var k = 0; k < projects.projects[i].images.length; k++) {
					var image = HTMLprojectImage.replace("%data%", projects.projects[i].images[k]);
					$(".project-entry:last").append(image);
				}

			}
		}

	}
};

var bio = {
	"name": "Abigail Price",
	"role": "Front-End Web Developer",
	"contacts": {
		"email": "verbum.dictum@gmail.com",
		"mobile": "080-9999-9999",
		"github": "LiberMagnum",
		"location": "Gallifrey", 
		"twitter": "loremIpsum"
	},

	"bioPic": "images/DSCF0652.JPG",
	"welcomeMessage": "Welcome to my website!",
	"skills": ["website creation", "math", "flute performance"],

	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic); 

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#bio_image").append(formattedImage);

		//skeleton code from https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object

		Object.keys(bio.contacts).forEach(function(contact) {
    		var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
    		$("#topContacts").append(formattedContact);
    		$("#footerContacts").append(formattedContact);
		});

		var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#bio_image").append(formattedMsg);

		if (bio.skills.length > 0) {
			$("#bio_image").append(HTMLskillsStart);
			
			for (var i = 0; i < bio.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").prepend(formattedSkill);
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Monsters U",
			"location": "Jupiter, Milky Way",
			"degree": "Masters", 
			"dates": "2018-2030",
			"majors": ["Nuclear Physics"],
			"url": "www.college.com"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-End Web Development Nanodegree",
			"school": "Udacity",
			"dates": "July 2017 - ?",
			"url": "www.udacity.com"
		}
	],

	"display": function() {

		for (var h = 0; h < education.schools.length; h++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[h].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[h].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[h].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[h].location);

			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);

			for (var major = 0; major < education.schools[h].majors.length; major++) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[h].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}


		for (var m = 0; m < education.onlineCourses.length; m++) {
			if (m === 0) {
				$("#education").append(HTMLonlineClasses);
			}

			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[m].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[m].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[m].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[m].url);

			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(formattedSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);
		}
	}
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

