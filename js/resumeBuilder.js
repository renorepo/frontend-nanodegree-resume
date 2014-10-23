// $("#main").append("Shawn Bateman");
//[string].replace([old], [new])



var bio = {
    "name": "John Snow",
    "role": "Lord Commander of the Night's Watch",
    "welcomeMessage": "Winter is coming.",
    "contacts": {
        "mobile": "(800) 867-5309",
        "email": "jsnow@nightswatch.com",
        "github": "lord_of_castle_black",
        "twitter": "Lord_Snow",
        "location": "The Wall"
    },
    "skills": [
        "wolf training",
        "swordsmanship",
        "diplomacy"
    ],
    "pictureURL": "http://static.comicvine.com/uploads/original/12/125032/2945116-jon_snow.jpg"
}



var education ={
    "schools": [
        {
            "name": "Castle Black",
            "location": "The Wall",
            "degree": "Stewardship",
            "majors": [
                "diplomacy",
                "humility"
            ],
            "dates": 2013,
            "url": "http://www.gameofthrones.com"
        },
        {
            "name": "Winterfell",
            "location": "The North",
            "degree": "Welp",
            "majors": [
                "Liberal Arts",
                "swordsmanship"
            ],
            "dates": 2012,
            "url": "http://www.gameofthrones.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.udacity.com"
        }
    ]
}
var projects =  {
    "projects" : [
        {
            "title" : "Crow Beyond the Wall",
            "dates" : [
                {
                    "start": "2014-10-18T15:00:00.000Z",
                    "end": "2014-10-18T17:00:00.000Z"
                }, 
                {
                    "start": "2014-10-19T19:00:00.000Z",
                    "end": "2014-10-19T19:00:00.000Z"
                }
            ],
            "description": "Infiltrate the wildlings camp and discover their plans.",
            "images": [
                "http://images6.fanpop.com/image/photos/34000000/got-game-of-thrones-34035914-500-230.gif",
                "http://img1.wikia.nocookie.net/__cb20130401030912/gameofthrones/images/9/99/Giant_Season_3_ep_1.png",
                "http://www.scifinow.co.uk/wp-content/uploads/2013/03/748660_GOT3_HS_1120_EP301_DSC0286-1359138809787-I.jpg"
            ]
        }
    ]
}
var work = {
    "jobs" : [
        {
            "employer" : "The Night's Watch",
            "title" : "Lord Commander",
            "dates" : "300 AL to Present",
            "description" : "Defending kneelers from threats beyond the wall"
        },
        {
            "employer" : "The Night's Watch",
            "title" : "Squire to Lord Moremont",
            "dates": "298 AL to 300 AL",
            "description" : "Fetching water, writing letters, and other duties as assigned."
        }

    ]
}

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(i = 0; i < bio.skills.length; i++){
        var skill = bio.skills[i];
        var formattedSkills = HTMLskills.replace("%data%", skill);
        console.log(formattedSkills);
        $("#header").append(formattedSkills);
    }
}