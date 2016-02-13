$(function() {
	//CLEAR DATA
	localStorage.removeItem("category");
	localStorage.removeItem("tags");
	localStorage.removeItem("title");
	localStorage.removeItem("time");
	localStorage.removeItem("content");
	localStorage.removeItem("user_name");

	//INSERT DATE
	var today = new Date();
	var dd = today.getDate();
  var MM = today.getMonth()+1; //January is 0!
  if(dd < 10) dd = '0' + dd;
  if(MM < 10) MM = '0' + MM; 
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var mm = today.getMinutes();
  if(hh < 10) hh = '0' + hh;
  if(mm < 10) mm = '0' + mm; 
  today = dd + "." + MM + "." + yyyy + " / " + hh + ":" + mm;
	$("#now").text(today);

	//INSERT USERNAME
	var userName = "Marko Crnkovič";
	$("#user_name").html(userName);	

	//FUNCTIONS FOR TEXTAREA COUNTDOWN
	$("#title").keyup(function () {
		var max = $(this).attr("maxlength");
	  var left = max - $(this).val().length;
	  if (left < 0) left = 0;
	  $('#title_counter').text(left);
	});

	$("#content").keyup(function () {
		var max = $(this).attr("maxlength");
	  var left = max - $(this).val().length;
	  if (left < 0) left = 0;
	  $('#content_counter').text(left);
	});

	$("#form").submit(function(e){
	  if(!$("#form")[0].checkValidity()) return;
		if (!checkForm()) {
			$("#tags").after("<span style='color:red'>Please insert a tag with a #.</span>");
			e.preventDefault();
		}
		var category = $("#category").val();
		var tags = $("#tags").val();
		var title = $("#title").val();
		var time = $("#now").html();
		var content = $("#content").val();
		var user_name = $("#user_name").html();
		localStorage.setItem("category", category);
		localStorage.setItem("tags", tags);
		localStorage.setItem("title", title);
		localStorage.setItem("time", time);
		localStorage.setItem("content", content);
		localStorage.setItem("user_name", user_name);
	});
});

function checkForm() {
	var tags = $("#tags").val();
	var regex = /(^|\s)(#[a-z\d-]+)/;
	if (tags.match(regex)) return true;
	else return false;
}