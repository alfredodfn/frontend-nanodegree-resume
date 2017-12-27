/* General information */
var bio = {
    "name": "Alfredo Del Fabro Neto",
    "role": "Desenvolvedor Web",
    "contacts": {
        "mobile": "+55 55 991 234 544",
        "email": "alfredodfn@gmail.com",
        "github": "alfredodfn",
        "twitter": "alfredodfn",
        "location": "Novo Hamburgo, RS, Brasil",
    },
    "welcomeMessage": "Graduado em Tecnologia em Redes de Computadores pela UFSM. " +
        "Possuo experiência com Redes de Computadores, mas recentemente interessei-me " +
        "por desenvolvimento Web e Móvel, tendo focado meus esforços nesta área de atuação.",
    "skills": ["Programação", "Android", "Python", "CSS", "HTML", "Ruby On Rails"],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formatedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formatedWelcMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#topContacts").append(formatedMobile)
        .append(formatedEmail)
        .append(formatedGithub)
        .append(formatedTwitter)
        .append(formatedLocation);
    $("#footerContacts").append(formatedMobile)
        .append(formatedEmail)
        .append(formatedGithub)
        .append(formatedTwitter)
        .append(formatedLocation);
    $('#header').append(formatedBioPic);
    $('#header').append(formatedWelcMsg);
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formatedSkill = HTMLskills.replace("%data%", skill);
        $('#skills').append(formatedSkill);
    });
};

/* Education */
var education = {
    "schools": [{
            "name": "Universidade Federal de Santa Maria",
            "location": "Santa Maria, RS",
            "degree": "Mestrado",
            "majors": ["Ciência da Computação"],
            "dates": 2015,
            "url": "http://www.ufsm.br"
        },
        {
            "name": "Universidade Federal de Santa Maria",
            "location": "Santa Maria, RS",
            "degree": "Tecnólogo",
            "majors": ["Redes de Computadores"],
            "dates": 2013,
            "url": "http://www.ufsm.br"
        }
    ],
    "onlineCourses": [{
        "title": "Introdução à Programação",
        "school": "Udacity",
        "dates": 2017,
        "url": "https://br.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        var formatedName = HTMLschoolName.replace("%data%", school.name);
        var formatedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formatedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formatedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formatedMajors = HTMLschoolMajor.replace("%data%", school.majors);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formatedName + formatedDegree);
        $('.education-entry:last').append(formatedLocation);
        $('.education-entry:last').append(formatedDates);
        $('.education-entry:last').append(formatedMajors);

    });

    education.onlineCourses.forEach(function(onlineCourse) {
        var formatedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formatedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formatedDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formatedTitle + formatedSchool);
        $('.education-entry:last').append(formatedDates);
        $('.education-entry:last').append(formattedUrl);
    });
};

/* Work Experience */
var work = {
    "jobs": [{
            "employer": "Universidade Federal de Santa Maria",
            "title": "Professor Substituto",
            "location": "Santa Maria, RS",
            "dates": "10/2013 - 07/2015",
            "description": "Lecionar aulas sobre Redes de Computadores com foco em " +
                "roteamento e encaminhamento de pacotes, protocolos de roteamento " +
                "dinâmico, serviços de rede e segurança de redes."
        },
        {
            "employer": "SouthTech Telecom",
            "title": "Analista de Operação de Redes",
            "location": "Porto Alegre, RS",
            "dates": "07/2015 - 11/2015",
            "description": "Configuraçao de rede MPLS, BGP, OSPF, " +
                "roteamento e encaminhamento em geral e troubleshooting em geral."
        },
        {
            "employer": "Ksoslegal",
            "title": "Desenvolvedor de Software",
            "location": "Novo Hamburgo, RS",
            "dates": "12/2015 - Presente",
            "description": "Desenvolvimento de um sistema web em Ruby On Rails para " +
                "cadastro de prestadores de serviços de reparos automotivos. Desenvolvimento " +
                "de aplicativos Android para clientes e prestadores de serviços se " +
                "comunicarem (estilo Uber), e um backend em Java com troca de mensagens via MQTT."
        }
    ]
};

/* Display work experience section */
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

/* Projects made */
var projects = {
    "projects": [{
        "title": "Ksoslegal App",
        "dates": "2015",
        "description": "Aplicativo para empresa Ksoslegal, que permite cadastrar " +
            "empresas que prestam serviços de socorro automotivo. O projeto compreende " +
            "aplicativos móveis para fazer a comunicação entre cliente e prestador " +
            "de serviços.",
        "images": [
            "https://www.ksoslegal.com.br/assets/n5-ksoslegal-ab39c81c90806e0a2b7a0d1a25b2c52343871f85db23ba4036bd577974eda5d4.png"
        ]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

/* Receives two names and returns internationalized version of a name */
function inName(name) {
    names = name.split(" ");
    names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names.join(" ");
}

/* Main Section */
bio.display();
work.display();
projects.display();
education.display();


/* Google Maps locations */
$("#mapDiv").append(googleMap);

/* Set button internationalizeButton */
$("#main").append(internationalizeButton);
