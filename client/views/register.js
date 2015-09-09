Template.register.events({
  'submit form': function (event) {
    
    event.preventDefault();

  }
});

Template.register.onRendered(function() {
  var validator = $('.register').validate({
    submitHandler: function(event) {
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();

      // Use account-password methods to register the user
      Accounts.createUser({
        email: email,
        password: password
      }, function(error) {
            if (error) {
              if (error.reason == 'Email already exists.') {
                validator.showErrors({
                  email: 'That email already belongs to a registered user.'
                });
              }
            } else {
              // Redirect user if registration succeeds
              Router.go('home'); 
            }                   
      });

      } 
  });
});