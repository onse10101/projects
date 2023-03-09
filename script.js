var portfolioCollection = [

	{
		"name": "Music Player",
		"info": "Front-end: Javascript, CSS and HTML",
		"url": ""
	},

	{
		"name": "NASA APOD",
		"info": "Front-end: Javascript, CSS and HTML",
		"url": ""
	},
	{
		"name": "Blur Loading Animation",
		"info": "Front-end using vanilla Javascript, CSS and HTML",
		"url": ""
	},
		{
		"name": "Vynil Player",
		"info": "NASA picture of a day using javascript and NASA Api",
		"url": ""
	},
	{
		"name": "Kanban Board",
		"info": "Front-end using vanilla Javascript, CSS and HTML",
		"url": ""
	},
	{
		"name": "Kanban Board",
		"info": "Front-end using vanilla Javascript, CSS and HTML",
		"url": ""
	}

	
];


var vmPortfolio = new Vue({
	el: "#vue-portfolio",
	data: {
		portfolios: portfolioCollection
	}
});