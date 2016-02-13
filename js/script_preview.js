$(function() {
	var category = localStorage.getItem("category");
	var tags = localStorage.getItem("tags");
	var title = localStorage.getItem("title");
	var time = localStorage.getItem("time");
	var content = localStorage.getItem("content");
	var user_name = localStorage.getItem("user_name");

	if (category === null || tags === null || title === null || time === null || content === null || user_name === null) {
	  document.location.href = "index.html";
	}

	$("#category").html(category);
	$("#tags").html(tags);
	$("#title").html(title);
	$("#time").html(time);
	$("#content").html(content);
	$("#user_name").html(user_name);
});

function back() {
	document.location.href = "index.html";
}