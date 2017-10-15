$(document).ready(function() {
    var nightsPattern = /\b[0-9]+\b/;
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var phonePattern = /\b[0-9]{3}-[0-9]{3}-[0-9]{4}\b/;

	$("arrival_date").focus();

	$("#reservation_form").submit(function (event) {
		var isValid = true;

		var $arrival_date = $("#arrival_date");
		var $nights = $("#nights");
		var $name = $("#name");
		var $email = $("#email");
		var $phone = $("#phone");

		var arrival_date = $arrival_date.val().trim();
		var nights = $nights.val().trim();
		var name = $name.val().trim();
        var email = $email.val().trim();
		var phone = $phone.val().trim();

		if (arrival_date == "") {
		    $arrival_date.next().text("This field is required.");
		    isValid = false;
        } else {
		    $arrival_date.val(arrival_date);
            $arrival_date.next().text("");
        }

        if (nights == "") {
		    $nights.next().text("This field is required.");
		    isValid = false;
        } else if (!nightsPattern.test(nights)) {
		    $nights.next().text("Number of nights must be numeric.");
		    isValid = false;
        } else {
		    $nights.val(nights);
		    $nights.next().text("");
        }

        if (name == "") {
		    $name.next().text("This field is required.");
		    isValid = false;
        } else {
		    $name.val(name);
		    $name.next().text("");
        }

		if (email == "") {
			$email.next().text("This field is required.");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$email.next().text("Must be a valid email address");
			isValid = false;
		} else {
		    $email.val(email);
			$email.next().text("");
		}

		if (phone == "") {
		    $phone.next().text("This field is required.");
		    isValid = false;
        } else if (!phonePattern.test(phone)) {
		    $phone.next().text("Must be in format 999-999-9999");
		    isValid = false;
        } else {
            $phone.val(phone);
		    $phone.next().text("");
        }

        if (isValid == false) {
            event.preventDefault();
        }
    });

}); // end ready