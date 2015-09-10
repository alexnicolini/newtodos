Meteor.methods({
  'createNewList': function(listName) {

    // Grab the ID of the currently logged-in user
    var currentUser = Meteor.userId();

    var data = {
      name: listName,
      createdBy: currentUser
    }

    Lists.insert(data);
  }
});