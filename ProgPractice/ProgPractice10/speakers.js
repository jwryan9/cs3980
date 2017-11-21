$(document).ready(function() {
    var mainElement = document.getElementsByTagName("main")[0];
    document.addEventListener('click', function (event) {
        var clickedTitle = event.target.title;

        if(clickedTitle) {
            var jsonLink = "json_files/" + clickedTitle + ".json";

            $.getJSON(jsonLink, function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        mainElement.innerHTML = "";
                        mainElement.innerHTML += "<h1>" + value.title + "</h1>";
                        mainElement.innerHTML += "<img src=" + value.image + ">";
                        mainElement.innerHTML += "<h2>" + value.month + "<br>" + value.speaker + "</h2>";
                        mainElement.innerHTML += "<p>" + value.text + "</p>";
                    });
                });


            });
        }
    });
}); // end ready