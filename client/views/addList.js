Template.addList.events({
  'submit form': function (event) {
    
    event.preventDefault();

    var listName = $('[name=listName]').val();

    // Get the current user ID
    var currentUser = Meteor.userId();

    Lists.insert({
      name: listName,
      createdBy: currentUser
    }, function(error, results) {
          Router.go('listPage', { _id: results });
    });

    $('[name=listName]').val('');
  }
});