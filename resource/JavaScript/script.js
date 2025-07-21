AOS.init();

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                window.location.hash = hash;
            });
        }
    });
});

// boking Form
$(document).ready(function () {
    $('#bookingForm').submit(function (e) {
        e.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const meal = $('#service').val();
        const address = $('#address').val().trim();
        const termsChecked = $('#termsCheck').is(':checked');

        let errorMsg = '';
        let valid = true;

        // Email regex
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        // Phone must be 10 digits
        if (!/^\d{10}$/.test(phone)) {
            errorMsg = 'Please enter a valid 10-digit phone number.';
            valid = false;
        }

        // Validate email format
        else if (!emailRegex.test(email)) {
            errorMsg = 'Please enter a valid email address.';
            valid = false;
        }

        // All fields required
        else if (!name || !meal || !address) {
            errorMsg = 'All fields are required.';
            valid = false;
        }

        // Terms checkbox must be checked
        else if (!termsChecked) {
            errorMsg = 'You must agree to the terms and conditions.';
            valid = false;
        }

        // Show error
        if (!valid) {
            $('#formMsg').html(`<div class="alert alert-danger">${errorMsg}</div>`).fadeIn();
        } else {
            // Success message
            $('#formMsg').html(`<div class="alert alert-success">✅ Thank you, <strong>${name}</strong>! Your booking has been submitted successfully.</div>`).fadeIn();

            // Reset form after success
            $('#bookingForm')[0].reset();
        }

        // Auto-hide after 5 seconds
        setTimeout(() => {
            $('#formMsg').fadeOut();
        }, 5000);

        // Allow only numbers in phone field
        $('#phone').on('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });
});

// loading
$(window).on("load", function () {
    $("#preloader").fadeOut(500, function () {
        $(this).remove();
        $("body").css("overflow", "auto");
    });
});

$("body").css("overflow", "auto");