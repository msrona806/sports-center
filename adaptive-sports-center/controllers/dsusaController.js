const axios = require("axios");
const db = require("../models");


app.get("/usa", function (req, res) {
	//get the body of the html
	axios.get("http://www.disabledsportsusa.org/events/").then(function (response) {
		//load response into cheerio
		var $ = cheerio.load(response.data);
    console.log(response.data);
  });

		$(".article-item").each(function (i, body) {
			var result = {};
      result.title = $(this).find("a").text();
      // result.link = "http://www.disabledsportsusa.org/events/" + $(this).find("a").attr("href");
    });
  });
}