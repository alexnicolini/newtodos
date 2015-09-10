Meteor.methods({
  'createListItem': function(todoName, currentList) {

    check(todoName, String);
    check(currentList, String);

    // Get the current user ID
    var currentUser = Meteor.userId();

    var data = {
      name: todoName,
      completed: false,
      createdAt: new Date(),
      createdBy: currentUser,
      listId: currentList
    }
    
    // Determine if the user triggering the method 
    // is currently logged-in.
    if (!currentUser) {
      throw new Meteor.Error('not-logged-in', "You're not logged-in.");
    }

    // Retrieve the document for the current list
    var currentList = Lists.findOne(currentList);

    if (currentList.createdBy != currentUser) {
      throw new Meteor.Error('invalid-user', "You don't own that list.");
    }

    return Todos.insert(data);
  }
});