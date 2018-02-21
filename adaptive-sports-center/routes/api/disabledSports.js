app.get("/usa", function (req, res) {
	//get the body of the html
	axios.get("http://www.disabledsportsusa.org/events/").then(function (response) {
		//load response into cheerio
		var $ = cheerio.load(response.data);
    console.log(response.data);
  });

		$(".article-item").each(function (i, body) {
			var result = {};
			result.title = $(this).find("h3").text();
      result.link = "https://www.nationalmssociety.org" + $(this).find("a").attr("href");
    });
  });