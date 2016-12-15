

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
    	$('#topContacts,#footerContacts').append( HTMLmobile.replace('%data%',this.contacts.mobile),
    		                                      HTMLemail.replace('%data%',this.contacts.email),
    		                                      HTMLtwitter.replace('%data%',this.contacts.twitter),
    		                                      HTMLgithub.replace('%data%',this.contacts.github),
    		                                      HTMLlocation.replace('%data%',this.contacts.location) );
    	$('#header').append( HTMLbioPic.replace('%data%',this.biopic),
    						 HTMLwelcomeMsg.replace('%data%',this.welcomeMessage),
    						 HTMLskillsStart);
    	this.skills.forEach(function(ele){
        	$('#skills').append( HTMLskills.replace('%data%',ele) );
    	});
    }
};

var education = {
    schools: [
    {
    	name: "ShaoGuan University",
        location: "LianHuaLu,ShenZhen,Guangdong",
        degree: "BA",
        majors: ["CLASS A","CLASS B","CLASS C"],
        dates: "2013-2017",
        url: "http://www.sgu.edu.cn"
    }
    ],
    onlineCourses: [
    {
        title: "FrontEnd-Nanodegree",
        school: "Udacity",
        dates: "2016",
        url: "http://www.udacity.com"
    }
    ],
    display: function(){
    	$('#education').append(HTMLschoolStart);
    	$('.education-entry').addClass("schools");
    	this.schools.forEach(function(ele){
    		$('.education-entry').append( HTMLschoolName.replace('%data%',ele.name).replace('#',ele.url) 
    		                            + HTMLschoolDegree.replace('%data%',ele.degree),
    		                              HTMLschoolDates.replace('%data%',ele.dates),
    									  HTMLschoolLocation.replace('%data%',ele.location),
    									  HTMLschoolMajor.replace('%data%',ele.majors));
    	});
    	
    	//Online Courses
    	$('#education').append(HTMLonlineClasses);
    	$('#education').append(HTMLschoolStart);
    	this.onlineCourses.forEach(function(ele){
			$('.education-entry:eq(1)').append( HTMLonlineTitle.replace('%data%',ele.title).replace('#',ele.url) 
    		                              	  + HTMLonlineSchool.replace('%data%',ele.school),
    											HTMLonlineDates.replace('%data%',ele.dates),
    											HTMLonlineURL.replace('%data%',ele.url).replace('#',ele.url) );
    	});
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
    		                       + HTMLworkTitle.replace('%data%',ele.title),
    								 HTMLworkDates.replace('%data%',ele.dates),
    								 HTMLworkLocation.replace('%data%',ele.location),
    								 HTMLworkDescription.replace('%data%',ele.description));
        });
    }
};

var projects = {
	projects: [
	{
		title: "LinkUp Game", 
        dates: "9-2016",
        description: "It is a Game, I don't know how to descript it with my poor English, Sorry about it.",
        images: ["images/game.jpg","images/game.jpg"]
	}
	],
    display: function(){
    	$('#projects').append(HTMLprojectStart);
    	this.projects.forEach(function(ele){
			$('.project-entry').append(HTMLprojectTitle.replace('%data%',ele.title),
									   HTMLprojectDates.replace('%data%',ele.dates),
									   HTMLprojectDescription.replace('%data%',ele.description));
			ele.images.forEach(function(e){
				$('.project-entry').append(HTMLprojectImage.replace('%data%',e));
			});
    	});
    }
};

var map = {
	display: function(){
    	$('#mapDiv').append(googleMap);
    }
};


bio.display();
work.display();
projects.display();
education.display();
map.display();
