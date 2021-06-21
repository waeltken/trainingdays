(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{310:function(e,t,a){e.exports=a.p+"assets/img/architecture_day2.697228e8.png"},475:function(e,t,a){e.exports=a.p+"assets/img/day2_goal1.6952712e.png"},476:function(e,t,a){e.exports=a.p+"assets/img/day2_goal2.5021536d.png"},477:function(e,t,a){e.exports=a.p+"assets/img/day2_goal3.894475f0.png"},795:function(e,t,a){"use strict";a.r(t);var i=a(44),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"day-2-azure-development"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#day-2-azure-development"}},[e._v("#")]),e._v(" Day 2 Azure Development")]),e._v(" "),i("h2",{attrs:{id:"welcome"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#welcome"}},[e._v("#")]),e._v(" Welcome")]),e._v(" "),i("p",[e._v("This day is about getting your hands dirty with application development in Azure. We will dig into the topics")]),e._v(" "),i("ul",[i("li",[e._v("Azure Web Application")]),e._v(" "),i("li",[e._v("Serverless")]),e._v(" "),i("li",[e._v("Storage")]),e._v(" "),i("li",[e._v("Messaging")])]),e._v(" "),i("h2",{attrs:{id:"challenges"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[e._v("#")]),e._v(" Challenges")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/day2/challenges/00-challenge-setup.html"}},[e._v("Challenge 0:  Setup your system")]),e._v(" "),i("em",[e._v("(45 min.)")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/day2/challenges/01-challenge-appservice.html"}},[e._v("Challenge 1: Azure Web Applications")]),e._v(" "),i("em",[e._v("(45 min.)")])],1),e._v(" "),i("li",[e._v("💎 "),i("em",[i("RouterLink",{attrs:{to:"/day2/challenges/02-challenge-bo-1.html"}},[e._v("Breakout 1: Deploy the Azure Dev College sample application to Azure")])],1),e._v(" 💎 "),i("em",[e._v("(30 min.)")])]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/day2/challenges/03-challenge-serverless.html"}},[e._v("Challenge 2: Serverless")]),e._v(" "),i("em",[e._v("(45 min.)")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/day2/challenges/04-challenge-messaging.html"}},[e._v("Challenge 3 (optional): Messaging")]),e._v(" "),i("em",[e._v("(45 min.)")])],1),e._v(" "),i("li",[e._v("💎 "),i("em",[i("RouterLink",{attrs:{to:"/day2/challenges/05-challenge-bo-2.html"}},[e._v("Breakout 2: Add a serverless microservice to our sample app and include messaging")])],1),e._v(" 💎 "),i("em",[e._v("(45 min.)")])]),e._v(" "),i("li",[e._v("💎 "),i("em",[i("RouterLink",{attrs:{to:"/day2/challenges/06-challenge-bo-3.html"}},[e._v("Breakout 3 (optional): Use a Content Delivery Network for the SPA")])],1),e._v(" 💎 "),i("em",[e._v("(30 min.)")])]),e._v(" "),i("li",[e._v("💎 "),i("em",[i("RouterLink",{attrs:{to:"/day2/challenges/07-challenge-bo-4.html"}},[e._v("Breakout 4 (optional): Create an Azure Web App and Storage Account with ARM templates")])],1),e._v(" 💎 "),i("em",[e._v("(60 min.)")])])]),e._v(" "),i("h2",{attrs:{id:"day-2-goal"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#day-2-goal"}},[e._v("#")]),e._v(" Day 2 - Goal")]),e._v(" "),i("p",[e._v("Today is the starting point for the application that we will build and refine during this week. To give you more context on what we will be building, here is the description of our sample application and the resulting architecture for "),i("em",[e._v("Day 2")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"application"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[e._v("#")]),e._v(" Application")]),e._v(" "),i("p",[e._v("We are going to use the sample application to get to know all the Azure services throughout the workshop. The application is a "),i("strong",[e._v("Simple Contacts Management")]),e._v(" (SCM). You can - surprisingly - create, read, update and delete contacts with it. Currently, we will be storing the contacts in an in-memory database. On "),i("em",[e._v("Day 3")]),e._v(" we will learn about the various database services of Azure and add proper persistance to our services.")]),e._v(" "),i("p",[e._v("Later that day, we will add a second service to add contact images, which will be stored in an "),i("em",[e._v("Azure Storage Account")]),e._v(" (Blob). We will also create thumbnails of the images in background via an "),i("em",[e._v("Azure Function")]),e._v(" which will automatically be triggered through an "),i("em",[e._v("Azure Storage Queue")]),e._v(".")]),e._v(" "),i("p",[e._v("The frontend for the application is a small, responsive Single Page Application written in "),i("em",[e._v("Vue.js")]),e._v(" (which is one of the popular frameworks at the moment). We will be using the cheapest option to host a static website like that namely "),i("em",[e._v("Azure Blob storage")]),e._v(".")]),e._v(" "),i("p",[e._v("To make things more tangible, here are some screenshots of the application:")]),e._v(" "),i("ul",[i("li",[e._v("Welcome page of the app\n"),i("img",{attrs:{src:a(475),alt:"day2_1",title:"day2_1"}})]),e._v(" "),i("li",[e._v("List of contacts\n"),i("img",{attrs:{src:a(476),alt:"day2_2",title:"day2_2"}})]),e._v(" "),i("li",[e._v("Detail view of a contact\n"),i("img",{attrs:{src:a(477),alt:"day2_3",title:"day2_3"}})])]),e._v(" "),i("h3",{attrs:{id:"architecture"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),i("p",[e._v("At the end of the day, you will have the following architecture up and running in your own Azure subscription:")]),e._v(" "),i("p",[i("img",{attrs:{src:a(310),alt:"architecture",title:"architecture"}})]),e._v(" "),i("h3",{attrs:{id:"remarks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),i("p",[e._v('The challenges marked with the "💎" are the ones that focus on the sample application and represent the adoption of what you have learned in the challenges before. They results of the "💎" challenges will be reused in the upcoming days.')]),e._v(" "),i("p",[e._v("But "),i("em",[e._v("do not panic")]),e._v(" in case you cannot finish them in time today: we got you covered tomorrow by a baseline deployment of today's results.")]),e._v(" "),i("p",[e._v("😎 Enjoy your day! 😎")])])}),[],!1,null,null,null);t.default=o.exports}}]);