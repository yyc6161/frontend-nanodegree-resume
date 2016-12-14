
var bio = {
	name: "Anita",
	role: "Web Devoloper",
	contacts: {
 		mobile: "28282330",
 		email: "872654136@qq.com",
 		twitter: "yinyuchen61",
 		github: "yyc6161",
 		location: "Shenzhen, Guangdong"
 	},
	welcomeMessage: "Hi there! Welcome~!",
	skills: ["Coding","Singing","funny"],
	biopic: "images/fry.jpg",
	display: function(){
    	$('#header').prepend( HTMLheaderName.replace('%data%',this.name) + HTMLheaderRole.replace('%data%',this.role));
    	$('#topContacts').append( HTMLmobile.replace('%data%',this.contacts.mobile) );
    	$('#topContacts').append( HTMLemail.replace('%data%',this.contacts.email) );
    	$('#topContacts').append( HTMLtwitter.replace('%data%',this.contacts.twitter) );
    	$('#topContacts').append( HTMLgithub.replace('%data%',this.contacts.github) );
    	$('#topContacts').append( HTMLlocation.replace('%data%',this.contacts.location) );
    	$('#header').append( HTMLbioPic.replace('%data%',this.biopic) );
    	$('#header').append( HTMLwelcomeMsg.replace('%data%',this.welcomeMessage) );
    	$('#header').append( HTMLskillsStart);
    	this.skills.forEach(function(ele){
        	$('#skills').append( HTMLskills.replace('%data%',ele) );
    	});
    }
};

var education = {
    schools: {
    	name: "ShaoGuan University",
        location: "LianHuaLu,ShenZhen,Guangdong",
        degree: "BA",
        majors: "Electronic and Information Engineering",
        dates: "2013-2017",
        url: "http://www.sgu.edu.cn"
    },
    onlineCourses: {
        title: "FrontEnd-Nanodegree",
        school: "Udacity",
        dates: "2016",
        url: "http://www.udacity.com"
    },
    display: function(){
    	$('#education').append(HTMLschoolStart);
    	$('.education-entry').addClass("schools");
    	$('.education-entry').append( HTMLschoolName.replace('%data%',this.schools.name) 
    		                        + HTMLschoolDegree.replace('%data%',this.schools.degree));
    	$('.education-entry').append(HTMLschoolDates.replace('%data%',this.schools.dates));
    	$('.education-entry').append(HTMLschoolLocation.replace('%data%',this.schools.location));
    	$('.education-entry').append(HTMLschoolMajor.replace('%data%',this.schools.majors));
    	$('.education-entry').find('a').first().attr('href',this.schools.url);
    	//Online Courses
    	$('#education').append(HTMLonlineClasses);
    	$('#education').append(HTMLschoolStart);
    	$('.education-entry:eq(1)').append( HTMLonlineTitle.replace('%data%',this.onlineCourses.title) 
    		                              + HTMLonlineSchool.replace('%data%',this.onlineCourses.school));
    	$('.education-entry:eq(1)').append(HTMLonlineDates.replace('%data%',this.onlineCourses.dates));
    	$('.education-entry:eq(1)').append(HTMLonlineURL.replace('%data%',this.onlineCourses.url));
    	$('.education-entry:eq(1)').find('a').attr('href',this.onlineCourses.url);
    },
};

var work = {
	jobs: [
		{
		employer: "L.H. Hotel",
        title: "Cleaner",
        location: "BuJi,ShenZhen,Guangdong",
        dates: "2015",
        description: "My English is not good enough to descript that, so I just skip it..."
        },
        {
		employer: "Residential Areas",
        title: "Monitor Watcher",
        location: "NanShan,ShenZhen,Guangdong",
        dates: "2013",
        description: "My English is not good enough to descript that, so I just skip it..."
        }
	],
    display: function(){
    	$('#workExperience').append(HTMLworkStart);
    	this.jobs.forEach(function(ele,index){
    		$('.work-entry').append( HTMLworkEmployer.replace('%data%',ele.employer) 
    		                       + HTMLworkTitle.replace('%data%',ele.title));
    		$('.work-entry').append(HTMLworkDates.replace('%data%',ele.dates));
    		$('.work-entry').append(HTMLworkLocation.replace('%data%',ele.location));
    		$('.work-entry').append(HTMLworkDescription.replace('%data%',ele.description));
        });
    }
};

var projects = {
	projects: {
		title: "LinkUp Game", 
        dates: "9-2016",
        description: "It is a Game, I don't know how to descript it with my poor English, Sorry about it.",
        images: "images/game.jpg"
	},
    display: function(){
    	$('#projects').append(HTMLprojectStart);
		$('.project-entry').append(HTMLprojectTitle.replace('%data%',this.projects.title));
		$('.project-entry').append(HTMLprojectDates.replace('%data%',this.projects.dates));
		$('.project-entry').append(HTMLprojectDescription.replace('%data%',this.projects.description));
		$('.project-entry').append(HTMLprojectImage.replace('%data%',this.projects.images))
    }
};

var map = {
	display: function(){
    	$('#mapDiv').append(googleMap);
    }
};

var addFooterContacts = function(){
	$('#footerContacts').append( HTMLmobile.replace('%data%',bio.contacts.mobile) );
    $('#footerContacts').append( HTMLemail.replace('%data%',bio.contacts.email) );
    $('#footerContacts').append( HTMLtwitter.replace('%data%',bio.contacts.twitter) );
    $('#footerContacts').append( HTMLgithub.replace('%data%',bio.contacts.github) );
    $('#footerContacts').append( HTMLlocation.replace('%data%',bio.contacts.location) );
}

bio.display();
work.display();
projects.display();
education.display();
map.display();
addFooterContacts();
