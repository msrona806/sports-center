const axios = require("axios");
const db = require("../models");
const cheerio = require("cheerio");

var url = "https://www.indeed.com/cmp/24-DATA-Inc./jobs/Front-End-Developer-f0c17e17372e48cf?sjdu=QwrRXKrqZ3CNX5W-O9jEvRfQ2IAUyuwhAgxPW4jiRzW8dQ5pAX42R9wDtUZPHZO3vo1KEgPZuWUEhAmkAgSgKQ&tk=1c5hv4g7v4o0vb1c&vjs=3"

request(url, function(err, resp, body) {
  var $ = cheerio.load(body);
  var companyName = $('.company').text();
  // var companyNameText = companyName.text();

  var jobTitle = $('.jobtitle').text();
  // var jobTitleText

  var location = $('.location').text();
  // var locationTextt

  var summary = $('#job_summary').text();
  // var summaryText = 

  var job = {
    jobTitle: jobTitle,
    location: location,
    companyName: companyName,
    summary: summary
  };

  console.log(job);

})


// app.get("/usa", function (req, res) {
// 	//get the body of the html
// 	axios.get("http://www.disabledsportsusa.org/events/").then(function (response) {
// 		//load response into cheerio
// 		var $ = cheerio.load(response.data);
//     console.log(response.data);
 

// 		$(".article-item").each(function (i, body) {
// 			var result = {};
//       result.title = $(this).find("a").text();
//       // result.link = "http://www.disabledsportsusa.org/events/" + $(this).find("a").attr("href");
//     });
//   // });
//   res.send("Scraper Ran"); 
// });
// }