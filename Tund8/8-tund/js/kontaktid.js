$('#contact').validate({
    errorPlacement: function(error, element) {         
        element.before(error);
    },
    rules: {
        firstName: {
            required: true,
            minlength: 3,
        },
        lastName: {
            required: true,
            minlength: 3,
        },
        email: {
            required: true,
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

        },
        phoneNumber: {
            required: true,
            pattern: /^\+3725\d{6,7}$/
        },
        lisaInfo: {
            required: true,
        }
    }
});
