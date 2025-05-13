(function ($) {
    "use strict";

    const accounts = {
        "shahriar@example.com": { password: "123", redirect: "../../user.html" },
        "admin@example.com":    { password: "456", redirect: "../../admin.html" }
    };

    $(document).ready(function() {
        $('#loginForm').on('submit', function(e) {
            e.preventDefault();

            const email = $(this).find('input[name="email"]').val().trim();
            const pass  = $(this).find('input[name="pass"]').val().trim();
            const user  = accounts[email];

            if (user && user.password === pass) {
                window.location.href = user.redirect;
            } else {
                $('#errorBox')
                    .addClass('show')
                    .show();
            }
        });

        $('.input100').on('focus', function() {
            $('#errorBox')
                .removeClass('show')
                .hide();
        });
    });

})(jQuery);
