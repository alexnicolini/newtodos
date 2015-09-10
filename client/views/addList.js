Template.addList.events({
  'submit form': function (event) {
    
    // Prevent default form behavior
    event.preventDefault();

    var listName = $('[name=listName]').val();

    // Get the current user ID
    var currentUser = Meteor.userId();

    // Trigger the code from the web browser
    Meteor.call('createNewList', listName, function(error, results) {
        if (error) {
            console.log(error.reason);
        } else {
            // Redirect users to the individual page of the created list
            Router.go('listPage', { _id: results });

            $('[name=listName]').val('');
        }
    });
  }
});