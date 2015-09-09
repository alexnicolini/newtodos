Template.login.events({
  'submit form': function (event) {
    
    event.preventDefault();

  }
});

Template.login.onCreated(function() {
  // console.log('The "login" template was just created.');
});

Template.login.onRendered(function() {
  var validator = $('.login').validate({
    submitHandler: function(event) {
      var email = $('[name=email]').val();
      var password = $('[name=password').val();

      // Use account-password methods to log in the user
      Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
          if (error.reason == 'User not found') {
            validator.showErrors({
              email: "That email doesn't belong to a registered user."
              // email: error.reason
            });
          }
          if (error.reason == 'Incorrect password') {
            validator.showErrors({
              password: 'You entered an incorrect password.'
              // password: error.reason
            });
          }
        } else {
          var currentRoute = Router.current().route.getName();

          if (currentRoute == 'login') {
            Router.go('home');
          }
        }
      });
    }
  });
  // console.log('The "login" template was just rendered.');
});

Template.login.onDestroyed(function() {
  // console.log('The "login" template was just destroyed.');
});