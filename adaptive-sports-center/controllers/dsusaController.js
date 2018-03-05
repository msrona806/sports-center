// const axios = require("axios");
// const db = require("../models");

// require("../server.js")

// app.get("/scrape", function (req, res) {
//   // get the body of the html
//   axios.get("http://www.disabledsportsusa.org/events/").then(function (response) {
//     //load response into cheerio
//     var $ = cheerio.load(response.data);
//     // console.log(response.data);

//     $(".event-info").each(function (i, body) {
//       var result = {};
//       result.title = $(this).find("h3").text();
//       result.link = "http://www.disabledsportsusa.org/events/" + $(this).find("a").attr("href");		
//     console.log(result.title);	
//     console.log(result.link);	});
//     }),
//     axios.get("https://www.nationalmssociety.org/").then(function (response) {
//       //load response into cheerio
//       var $ = cheerio.load(response.data);
//       // console.log(response.data);
  
//       $(".article-item").each(function (i, body) {
//         var result = {};
//         result.title = $(this).find("h3").text();
//         // result.link = "http://www.disabledsportsusa.org/events/" + $(this).find("a").attr("href");		
//       console.log(result.title);	
//       // console.log(result.link);	
//     });
//       });

//     // If we were able to successfully scrape and save an Article, send a message to the client
//     res.send("Scraper Complete");
//   });