Template.register.events({
  'submit form': function (event) {
    
    event.preventDefault();

    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    // Use account-password methods to register the user
    Accounts.createUser({
      email: email,
      password: password
    }, function(error) {
          if (error) {
            console.log(error.reason);
          } else {
            // Redirect user if registration succeeds
            Router.go('home'); 
          }                   
    });

    // Redirect to Home page
    Router.go('home');
  }
});