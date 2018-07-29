var awardsContainer=document.getElementsByClassName("awardRowContainer")[0],awardsRow=document.getElementsByClassName("awardRow")[0],triangle='<div class="lowerTriangle"></div>',numberOfAwardsRow=1;function sendAwards(e){for(var t=0;t<e.length;t++)t%5==0&&0!=t&&addNewRow(),addAward(e[t])}function addNewRow(){awardsContainer.innerHTML+='<div class="awardRow"></div>',awardsRow=document.getElementsByClassName("awardRow")[numberOfAwardsRow]}function addAward(e){awardsRow.innerHTML+='<div class="award">'+triangle+addAwardDescriptions(e)+"</div>"}function addAwardDescriptions(e){for(var t="",o=0;o<e.length;o++)t+='<p class="awardDiscription">'+e[o]+"</p>";return t}var hobbieImgs,hobbieRowImgs,hobbieImgContainer=document.getElementsByClassName("hobbieContainer")[0],hobbieImgRowContainers=document.getElementsByClassName("hobbieRowContainer"),hobbies=document.getElementsByClassName("hobbieImg"),rowImageIndex=-1,indicesOfCurrentImages=[],numberOfImages=1,numberOfImagesPerRow=getNumberOfImagesPerRow(),recursiveCount=0,continueRecursing=[!0],relevantContinueRecursingIndex=0;function sendHobbieImg(e){this.hobbieImgs=e,makeHobbieImgs()}function sendHobbieImgRow(e){this.hobbieRowImgs=e}function makeHobbieImgs(){for(var e=1,t=0;t<hobbieImgRowContainers.length;t++){for(var o=e;o<numberOfImagesPerRow;o++)hobbieImgRowContainers[t].innerHTML+=makeHobbieImg(),numberOfImages++;e=0}}function onResize(){var e,o=getNumberOfImagesPerRow();o!=numberOfImagesPerRow&&(continueRecursing.push(!1),e=++relevantContinueRecursingIndex,numberOfImagesPerRow=o,setTimeout(function(){for(var e=0;e<hobbieImgRowContainers.length;e++){hobbieImgRowContainers[e].innerHTML="";for(var t=0;t<o;t++)hobbieImgRowContainers[e].innerHTML+=makeHobbieImg()}},2e3),numberOfImages=3*numberOfImagesPerRow,setTimeout(function(){flopImages(continueRecursing[e]=!0)},3e3))}function flopImages(e){hobbies=document.getElementsByClassName("hobbieImg"),500<=recursiveCount++||!continueRecursing[relevantContinueRecursingIndex]||(e?flopRandomImagesToARowImage():flopRandomImage())}function flopRandomImagesToARowImage(){var e=getIndexToStartReplacingWithRowImage();setTimeout(function(){replaceWithRowImage(e),rowImageIndex=e,flopImages(!1)},1e3)}function flopRandomImage(e){var o=e||getRandomIndex();this.rowImageIndex==o?setTimeout(function(){hobbies[o].style.visibility="hidden",hobbies[o].outerHTML=makeHobbieImagesToReplaceRowImage();for(var t=getImagesThatReplacedTheRowImage(),e=0;e<t.length;e++)t[e].classList.toggle("flopAnimation"),t[e].style.visibility="visible",t[e].id="",setTimeout(function(){for(var e=0;0==e||e%t.length!=0;)t[e++].classList.toggle("flopAnimation")},500);3<=numberOfImagesPerRow?numberOfImages+=2:numberOfImages++,flopImages(!0)},1e3):setTimeout(function(){flopNewImage(o),flopImages(!1)},1e3)}function replaceWithRowImage(e){hobbies[e].style.visibility="hidden",2==numberOfImagesPerRow?(hobbies[e+1].outerHTML="",hobbies[e].outerHTML=makeHobbieRowImg(),numberOfImages--):(hobbies[e+1].outerHTML="",hobbies[e+1].outerHTML="",hobbies[e].outerHTML=makeHobbieRowImg(),numberOfImages-=2),hobbies[e].classList.toggle("flopAnimation"),hobbies[e].style.visibility="visible",takeOffFlopAnimation(hobbies[e])}function getIndexToStartReplacingWithRowImage(){var e=getRandomIndex(),t=1;if(2==numberOfImagesPerRow)for(;t++<=3&&e%numberOfImagesPerRow!=0;)e=getRandomIndex();else for(;t++<=3&&!((e+3)%numberOfImagesPerRow==0||e%numberOfImagesPerRow<(e+3)%numberOfImagesPerRow);)e=getRandomIndex();return 3<=t&&(e=0),e}function getRandomIndex(){return Math.floor(Math.random()*numberOfImages)}function getImagesThatReplacedTheRowImage(){return 3<=numberOfImagesPerRow?[document.getElementById("1"),document.getElementById("2"),document.getElementById("3")]:[document.getElementById("1"),document.getElementById("2")]}function flopNewImage(e){hobbies[e].style.visibility="hidden",hobbies[e].style.backgroundImage=makeHobbieUrl(hobbieImgs[Math.floor(Math.random()*hobbieImgs.length)]),hobbies[e].classList.toggle("flopAnimation"),takeOffFlopAnimation(hobbies[e]),hobbies[e].style.visibility="visible"}function takeOffFlopAnimation(e){setTimeout(function(){e.classList.toggle("flopAnimation")},500)}function getNumberOfImagesPerRow(){var e=window.innerWidth;return e<580?2:e<1100?3:4}function makeHobbieImagesToReplaceRowImage(e){if(3<=numberOfImagesPerRow){var t=Math.abs(Math.floor(Math.random()*hobbieImgs.length)-2);return'<div class="hobbieImg" id="1" style="background-image: '+makeHobbieUrl(hobbieImgs[t++])+';"></div><div class="hobbieImg" id="2" style="background-image: '+makeHobbieUrl(hobbieImgs[t++])+';"></div><div class="hobbieImg" id="3" style="background-image: '+makeHobbieUrl(hobbieImgs[t])+';"></div>'}t=Math.abs(Math.floor(Math.random()*hobbieImgs.length)-1);return'<div class="hobbieImg" id="1" style="background-image: '+makeHobbieUrl(hobbieImgs[t++])+';"></div><div class="hobbieImg" id="2" style="background-image: '+makeHobbieUrl(hobbieImgs[t])+';"></div>'}function makeHobbieUrl(e){return"url('img/"+e+"')"}function makeHobbieRowImg(){var e=Math.floor(Math.random()*hobbieRowImgs.length);return'<div class="hobbieImg" id="row" style="background-image: '+makeHobbieUrl(hobbieRowImgs[e])+';"></div>'}function makeHobbieImg(){var e=Math.floor(Math.random()*hobbieImgs.length);return'<div class="hobbieImg" style="background-image: '+makeHobbieUrl(hobbieImgs[e])+';"></div>'}var introductionScript,quoteScript,whySoftwareScript,shortQuotes=[],oldQuoteList=[],upperBar=document.getElementById("upperBar"),lowerBar=document.getElementById("lowerBar"),quotes=document.getElementsByClassName("quote"),upperQuote=quotes[0],lowerQuote=quotes[1],titleText=document.getElementsByClassName("titleText")[0],arrowWrapper=document.getElementsByClassName("arrowWrapper"),leftArrow=document.getElementById("leftArrow"),rightArrow=document.getElementById("rightArrow"),titleTextIsOrange=!0,i=0,j=0,mobileOnly=!1,leftArrowShown=!1,rightArrowShown=!1,canShowQuotes=!1;function rightArrowClicked(){j++,++i+1>quoteScript.length-1&&(i=quoteScript.length-2),j>whySoftwareScript.length-1&&(j=whySoftwareScript.length-1),setNewQuotes(i,++i),changeTitleTextTo(whySoftwareScript[j]),1==j?(fadeIn(getArrowWrapper(0)),leftArrowShown=!0):j==whySoftwareScript.length-1&&(fadeOut(getArrowWrapper(1)),rightArrowShown=!1)}function leftArrowClicked(){(i-=3)<0&&(i=0),--j<0&&(j=0),setNewQuotes(i,++i),changeTitleTextTo(whySoftwareScript[j]),0==j?(fadeOut(getArrowWrapper(0)),leftArrowShown=!1):j==whySoftwareScript.length-2&&(fadeIn(getArrowWrapper(1)),rightArrowShown=!0)}function setNewQuotes(e,t){fadeOut(upperQuote),fadeOut(lowerQuote),setTimeout(function(){upperQuote.innerHTML=quoteScript[e],fadeIn(upperQuote),lowerQuote.innerHTML=quoteScript[t],fadeIn(lowerQuote)},1e3)}function changeTitleTextTo(e){fadeOut(titleText),setTimeout(function(){titleText.innerHTML=e,titleText.classList.contains("titleText")&&switchTextColors(),fadeIn(titleText)},500)}function refreshWidth(){!mobileOnly&&window.innerWidth<=640?(mobileOnly=!0,showRightArrows()):mobileOnly&&640<=window.innerWidth&&(mobileOnly=!1,showRightArrows());var e=window.getComputedStyle(document.querySelector("body"),":before").getPropertyValue("content").replace(/\"/g,"");"true"==e&&0==oldQuoteList.length?(i=0,oldQuoteList=quoteScript,quoteScript=shortQuotes,canShowQuotes&&setNewQuotes(i,++i)):"true"!=e&&0!=oldQuoteList.length&&(quoteScript=oldQuoteList,oldQuoteList=[],i=0,canShowQuotes&&setNewQuotes(i,++i))}function getArrowWrapper(e){return mobileOnly?arrowWrapper[e+2]:arrowWrapper[e]}function showRightArrows(){leftArrowShown&&fadeIn(getArrowWrapper(0)),rightArrowShown&&fadeIn(getArrowWrapper(1))}function fadeOut(e){e.classList.contains("fadeOutAnimaiton")||(e.classList.contains("fadeInAnimaiton")&&e.classList.toggle("fadeInAnimaiton"),e.classList.toggle("fadeOutAnimaiton"))}function fadeIn(e){e.classList.contains("fadeInAnimaiton")||(e.classList.contains("fadeOutAnimaiton")&&e.classList.toggle("fadeOutAnimaiton"),e.classList.toggle("fadeInAnimaiton"))}function switchTextColors(){titleTextIsOrange?(titleText.style.color="#522D80",titleTextIsOrange=!1):(titleText.style.color="#F66733",titleTextIsOrange=!0)}function moveUpperBarDown(){upperBar.classList.toggle("moveDown")}function moveBarsUp(){upperBar.classList.toggle("moveDown"),lowerBar.classList.toggle("moveUp")}function moveBottomBarDown(){lowerBar.classList.toggle("moveUp")}function sendIntroductionList(e){this.introductionScript=e}function sendQuoteList(e){this.quoteScript=e;for(var t=0,o=0;o<e.length;o++)e[o].length<=160&&(shortQuotes[t++]=e[o])}function sendWhySoftwareList(e){this.whySoftwareScript=e}fadeIn(titleText),setTimeout(function(){moveUpperBarDown(),changeTitleTextTo(introductionScript[0])},1600),setTimeout(function(){moveBarsUp(),changeTitleTextTo(introductionScript[1])},3200),setTimeout(function(){moveBottomBarDown(),changeTitleTextTo(introductionScript[2])},4800),setTimeout(function(){upperBar.classList.toggle("widen"),upperBar.classList.toggle("moveToTop"),lowerBar.classList.toggle("widen"),lowerBar.classList.toggle("moveToBottom"),fadeOut(titleText),setTimeout(function(){titleText.classList.toggle("titleText"),titleText.classList.toggle("whySoftwareExplination"),titleText.innerHTML=whySoftwareScript[j],titleText.style.color="black",fadeIn(titleText)},500),setTimeout(function(){upperQuote.innerHTML=quoteScript[i],fadeIn(upperQuote),lowerQuote.innerHTML=quoteScript[++i],fadeIn(lowerQuote),canShowQuotes=!0,fadeIn(getArrowWrapper(1)),rightArrowShown=!0},1e3)},6400),sendIntroductionList(["Why Software?","Well it's kind of a long story...","So let's get started"]),sendQuoteList(['"One of the ways I believe people express their appreciations to the rest of humanity is to make something wonderful and put it out there" - Steve Jobs','"The problem, often not discovered until late in life, is that when you look for things in life like love, meaning, motivation, it implies they are sitting behind a tree or under a rock. The most successful people in life recognize, that in life they create their own love, they manufacture their own meaning, they generate their own motivation." - Neil deGrasse Tyson','"I will do what I can when I can so that when I cannot I will not wish that I would have when I could have" - Dabo Swinney','"Strength. Mastery. But weakness, folly, failure also. Yes, failure most of all. The greatest teacher, failure is." - Yoda','"Just smack it" - Dan Mace','"What you aim at is what you see" - Jordan B Peterson','"There\'s lots of ways to be, as a person." - Steve Jobs','"Don\'t nourish your fears more than you nourish your hopes"','"I am not what I think I am, I am not what you think I am, I am what I think you think I am" - Most people','"I consider that our present sufferings are not worth comparing with the glory that will be revealed in us." - Romans 8:18 (NIV)','"The biggest risk is not taking any risk. In a world that’s changing really quickly, the only strategy that is guaranteed to fail is not taking risks." — Mark Zuckerberg','"The great thing in this world is not so much where you stand, as in what direction you are moving." — Oliver Wendell Holmes',"\"The people that say, 'your dreams are impossible' have already quit on theirs.\" — Grant Cardone",'"Do the best you can until you know better. Then, when you know better, do better" - Maya Angelou']),sendWhySoftwareList(["This is how I express my deep appreciation. I believe that there is nothing more amazing in this world than a true smile, and seeing someone truly smile at my work or because of my work makes me reflect on how much I love what I do. So I chose to start there, figuring out how to make people smile.","Clearly, there is a connection between the outcome of working hard and making others happy. The activity that taught me how to work hard was playing the trumpet. It taught me that being apart of a group of people with the same interest can make a bigger impact. This is the first area that I got a lot of people to smile, as well as respect because they knew I worked hard to play the trumpet well.","Through many hours of practicing and many auditions, I was accepted into a handful of superior bands, which is where I met a true group of A-players which excited and amazed me. Everyone was passionate about what they were doing, which in turn made everyone who came to hear us smile.","So why did I transition over to a life of software development? Well, I see myself, among other things, to be a very logical and analytical thinker that is always thinking about how things work under the hood. I also believe there are far more passionate people in software development than any other field. Therefore, one could make truly amazing software and distribute it to the world.","While I know I am only highlighting the ending I must also say that life is not only about the finished product but also the journey. Along my journey, I have met some amazing people as well as had some unforgettable experiences, not only working on making a finished product better but also having fun with whoever worked with me outside of the product.","So I am continuing to do what I know best: work hard and have fun doing it. This is how I stay true to myself and how I remind myself what is truly important to me."]),sendExperiences([{title:"TSA National Competition",location:"Dutch Fork High School @ Irmo, SC",startDate:"November 2015",endDate:"July 2016",color:"#28A028",description:"Designed and developed a web application for registration purposes at Camp Old Indian with 2 other students. Handled 1000s of scouts with 1000s of courses with advancement features and multiple user interfaces. Technology Students of America National Competition: National Finalist, 7th Place; State Competition: 1st Place. Inaugural software engineering competition for Dutch Fork High School.",tags:["PHP","MySQL","Laravel 5","HTML","Google Cloud"]},{title:"Tiger Band Website",location:"Clemson University Tiger Band @ Clemson, SC",startDate:"January 2017",endDate:"Present",color:"#F66733",description:"Designed and developed a completely new website for Tiger Band, Clemson University Drumline, and Clemson University Tiger Band Association. Completed the website with a team of 3 students.",tags:["HTML","CSS","JavaScript","PHP","AWS"]},{title:"BMW Digital and Mobile Co-op",location:"BMW Group @ Greenville, SC",startDate:"August 2017",endDate:"December 2017",color:"#0089FF",description:"Implemented a major feature to be added into the main BMW mobile application with a software engineering team comprised of 8 people. Developed this feature in Angular 4 with Test-Driven Development. Improved 3 different micro-services for the major feature using ExpressJS. Designed and developed the end-to-end automated testing library for the major feature. Pioneered and created an automated testing stack to run automated tests on both iOS and Android simultaneously using Protractor and Appium.",tags:["TypeScript","Angular 4+","NodeJS","Protractor","Appium","Jasmine","Selenium","PostgreSQL","ExpressJS","Docker"]},{title:"Virtual Reality Research",location:"Clemson University Tiger Band @ Clemson, SC",startDate:"January 2018",endDate:"May 2018",color:"#F66733",description:"Designed a way to sync data coming from bio-pack systems and the virtual reality experience in order to measure and hypothesize based on the data recorded. Coordinated with the project leads on which virtual reality experience will be most effective to relax the patient undergoing surgery.",tags:["OBS","Excel","BioPack"]},{title:"BMW Digital and Mobile Co-op",location:"BMW Group @ Greenville, SC",startDate:"May 2018",endDate:"Present",color:"#0089FF",description:"",tags:["Protractor","PostgreSQL","Cypress"]}]),sendSkillsLanguages([{name:"TypeScript",stars:5},{name:"JavaScript",stars:4.5},{name:"Java",stars:4},{name:"C++",stars:4},{name:"C",stars:4},{name:"HTML",stars:4},{name:"CSS",stars:4},{name:"PHP",stars:3.5},{name:"MySQL",stars:3.5},{name:"PostgreSQL",stars:3},{name:"ARM",stars:3}]),sendSkillsFramewors([{name:"Protractor",stars:5},{name:"Appium",stars:5},{name:"Jasmine",stars:5},{name:"Selenium",stars:4.5},{name:"Angular 4",stars:4},{name:"ExpressJS",stars:3.5},{name:"NodeJS",stars:3.5},{name:"Docker",stars:3}]),sendSkillsTools([{name:"Bash",stars:4.5},{name:"Git",stars:4.5},{name:"Adobe Xd",stars:4.5},{name:"Atlassian Suite",stars:4},{name:"Postman",stars:3.5},{name:"AWS",stars:2.5},{name:"Unity",stars:2.5}]),sendNotableCourses([{title:"CPSC 2120 Algorithms and Data Structures",description:"Study of data structures and algorithms fundamental to computer science; abstract data-type concepts; measures of program running time and time complexity; algorithm analysis and design techniques."},{title:"CPSC 3120 Introduction to Desgin and Analysis of Algorithms",description:"Topics include advanced data structures, amortized analysis, dynamic programming, graph algorithms, intractability and applications."},{title:"CPSC 2150 Software Development Foundations",description:"Intensive study of software development foundations. Advanced coverage of programming language primitives, function-level design principles, and standard development and debugging tools. Introductory coverage of module-level design principles, program specification and reasoning principles, and validation and verification techniques."},{title:"CPSC 3600 Networks and Network Programming",description:"Introduction to basic concepts of computer network technologies and network programming. Topics include network programming, layered protocol architectures, local and wide area networks, internetwork and intranetwork concepts, security. Socket level programming is introduced and used throughout the course."},{title:"CPSC 2310 Introduction to Computer Organization",description:"Study of the machine architectures on which algorithms are implemented and requirements of architectures that support high-level languages, programming environments, and applications."},{title:"CPSC 3720 Introduction Software Engineering",description:"Intensive introduction to software engineering. Focuses on each major phase of the software lifecycle. Introductory coverage of requirements analysis, requirements modeling, design modeling, and project management. Intermediate coverage of module-level design principles, program specification and reasoning principles, and program validation and verification techniques."}]),sendHobbieImgRow(["clemsonVsLousiville.jpg","nationalChampionship.jpg","moutains.jpg"]),sendHobbieImg(["cliff.jpg","repel.jpg","rockWay.jpg","lazer.jpg","eagleProject.jpg","sandiego.jpg","sandiegocliffs.jpg","riverbanks.jpg","trophies.jpg","crazyTrumpets.jpg","baldy.jpg"]),sendAwards([["Eagle Scout","Boy Souts of America","Troop 95","Irmo, SC","June 2015"],["President's List","Clemson University","Clemson, SC","Fall 2016"],["Dean's List","Clemson University","Clemson, SC","Fall 2016","Spring 2017","Spring 2018"],["Trumpet Section Leader","Clemson University Tiger Band","Fall 2018"],["Band Scholarships","CU Tiger Band Assoc Schol","CU Band(s) Grant-In-Aid","Brooks Center GIA","VO & AP Snelgrove GIA","J Helms Endowed CUTBA GIA"],["Employees of Duke Energy","Duke Energy","Spring 2018"],["Life Scholarship","State of South Carolina","Fall 2016","Spring 2017","Spring 2018 + Enchancement"],["Assistant Site Leader","Salkehatchie Summer Service","Summer 2017"],["First Student ever from Dutch Fork High School to be accepted in The Honor Band of America","Fall 2016"]]),$(window).resize(function(){refreshWidth(),onResize()}).resize();var notableCoursesTable=document.getElementById("notableCoursesTable");function sendNotableCourses(e){for(var t=0;t+1<e.length;t+=2)fillCourseTitle(e,t),fillCourseDescription(e,t);e.length%2!=0&&(notableCoursesTable.innerHTML+='<tr><th class="classTitle">'+e[t].title+'</th>/tr><tr><th class="classDescription">'+e[t].description+"</th></tr>")}function fillCourseTitle(e,t){notableCoursesTable.innerHTML+='<tr><th class="classTitle">'+e[t].title+'</th><th class="classTitle">'+e[++t].title+"</th></tr>"}function fillCourseDescription(e,t){notableCoursesTable.innerHTML+='<tr><th class="classDescription">'+e[t].description+'</th><th class="classDescription">'+e[++t].description+"</th></tr>"}var floppingImagesStarted=!1;$(window).on("load",function(){$(window).scroll(function(){var o=$(this).scrollTop()+$(this).innerHeight();$(".pageTitle").each(function(){var e=$(this).offset().top+$(this).outerHeight();0==$(this).css("opacity")&&e<o&&$(this).fadeTo(500,1)}),$(".experience").each(function(){$(this).offset().top+$(this).outerHeight()/4<o&&0==$(this).css("opacity")&&$(this).fadeTo(500,1)}),$(".experienceDurationBar").each(function(e){if($(this).offset().top+.3*$(".experienceDurationContainer").outerHeight()<o&&"0px"==$(this).css("height")){$(this).toggleClass("drawInAnimation"),e*=2;var t=document.getElementsByClassName("experienceDate");fadeIn(t[e]),setTimeout(function(){fadeIn(t[++e])},1e3)}}),$(".skillBar").each(function(){$(this).offset().top+.2*$(this).outerHeight()<o&&"0px"==$(this).css("height")&&($(this).toggleClass("drawInAnimationMainBar"),$(".skillType").fadeTo(500,1),$(".skills").fadeTo(500,1),$(".ratingsContainer").fadeTo(500,1))}),$(".award").each(function(e){$(this).offset().top+.2*$(this).outerHeight()<o&&0==$(this).css("opacity")&&$(this).fadeTo(500+500*e,1)}),$(".horizontalBar").each(function(){$(this).offset().top+2*$(this).outerHeight()<o&&"0px"==$(this).css("width")&&$(this).toggleClass("drawToRightAnimaiton")}),$(".majorContainer").each(function(){$(this).offset().top+.4*$(this).outerHeight()<o&&0==$(this).css("opacity")&&$(this).toggleClass("fadeInAndUp")}),$(".GPAContainer").each(function(){$(this).offset().top+.4*$(this).outerHeight()<o&&0==$(this).css("opacity")&&$(this).toggleClass("fadeInAndRight")}),$(".notableCoursesContainer").each(function(){$(this).offset().top+.2*$(this).outerHeight()<o&&0==$(this).css("opacity")&&$(this).toggleClass("fadeInAndUp")}),$(".hobbieContainer").each(function(){var e=$(this).offset().top;!floppingImagesStarted&&e<o&&(flopImages(!0),floppingImagesStarted=!0)})}).scroll()});var ratingToImageTable=["","","","","","img/2.5-stars.png","img/3-stars.png","img/3.5-stars.png","img/4-stars.png","img/4.5-stars.png","img/5-stars.jpeg"];function findRatingPath(e){return ratingToImageTable[2*e]}function makeSkill(e){return'<p class="skill">'+e.name+"</p>"}function makeRating(e){return'<img class="stars" hspace="20" src="'+findRatingPath(e.stars)+'">'}function sendSkillsLanguages(e){fillSkills(document.getElementById("languageSkills"),e),fillRatings(document.getElementById("languageRatings"),e)}function sendSkillsFramewors(e){fillSkills(document.getElementById("frameworkSkills"),e),fillRatings(document.getElementById("frameworkRatings"),e)}function sendSkillsTools(e){fillSkills(document.getElementById("toolSkills"),e),fillRatings(document.getElementById("toolRatings"),e)}function fillSkills(e,t){for(var o=0;o<t.length;o++)e.innerHTML+=makeSkill(t[o])}function fillRatings(e,t){for(var o=0;o<t.length;o++)e.innerHTML+=makeRating(t[o])}var resumeEmoji=document.getElementById("resumeEmoji"),mailEmoji=document.getElementById("mailEmoji"),resumeAnimationIsPlaying=!1,mailAnimationIsPlaying=!1;function shakeResumeEmoji(){resumeAnimationIsPlaying||(resumeAnimationIsPlaying=!0,resumeEmoji.classList.toggle("shakeAnimation"),setTimeout(function(){resumeEmoji.classList.toggle("shakeAnimation"),resumeAnimationIsPlaying=!1},900))}function shakeMailEmoji(){mailAnimationIsPlaying||(mailAnimationIsPlaying=!0,mailEmoji.classList.toggle("shakeAnimation"),setTimeout(function(){mailEmoji.classList.toggle("shakeAnimation"),mailAnimationIsPlaying=!1},900))}var timeline=document.getElementsByClassName("timeline")[0],isLeft=!0;function sendExperiences(e){for(var t=0;t<e.length;t++)isLeft=t%2==0,makeExperience(e[t])}function makeExperience(e){timeline.innerHTML+='<div class="experienceContainer '+getLeftOrRight()+'"><div class="experience" style="border-color: '+e.color+';">'+getExperienceDescriptionContainer(e)+getExperienceDurationContainer(e)+"</div></div>"}function getExperienceDescriptionContainer(e){return'<div class="experienceDescriptionContainer">'+makeExperienceTitle(e.title)+makeExperienceLocation(e.location)+makeExperienceDescription(e.description)+makeExperienceTags(e.tags,e.color)+"</div>"}function getExperienceDurationContainer(e){return'<div class="experienceDurationContainer">'+makeExperienceDate(e.startDate)+'<div class="experienceDurationBar" style="background-color: '+e.color+';"></div>'+makeExperienceDate(e.endDate)+"</div>"}function makeExperienceTitle(e){return'<h2 class="experienceTitle">'+e+"</h2>"}function makeExperienceLocation(e){return'<h3 class="experienceLocation">'+e+"</h3>"}function makeExperienceDescription(e){return'<p class="experienceDescription">'+e+"</p>"}function makeExperienceDate(e){return'<h3 class="experienceDate">'+e+"</h3>"}function makeExperienceTags(e,t){for(var o='<div class="experienceTagsContainer">',i=0;i<e.length;i++)o+='<div class="experienceTagContainer" style="border-color: '+t+'"><h3 class="tag">'+e[i]+"</h3></div>";return o+"</div>"}function getLeftOrRight(){return isLeft?"left":"right"}