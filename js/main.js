// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

    $('#postForm').on('click', function() {
      console.log('form click');
    MailApp.sendEmail("zoe.a.adelman@gmail.com", "New Submission", JSON.stringify(e.parameters));
    });

$('#ss-form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'entry.1212987837': {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            'entry.417719445': {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'Last Names can only consist of alphabetical characters'
                    },
                }
            },
            'entry.574729503': {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            },

        }
    })
});
