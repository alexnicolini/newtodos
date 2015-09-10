Meteor.methods({
  'changeItemStatus': function(documentId, status) {

    check(status, Boolean);

    // Get the current user ID
    var currentUser = Meteor.userId();

    var data = {
      _id: documentId,
      createdBy: currentUser
    }

    // Determine if the user triggering the method 
    // is currently logged-in.
    if (!currentUser) {
      throw new Meteor.Error('not-logged-in', "You're not logged-in.");
    }

    Todos.update(data, { $set: { completed: status } });
  }
});