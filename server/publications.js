// Transmit a selection of data into the ether
Meteor.publish('lists', function() {

  // Get de current user ID
  var currentUser = this.userId;

  // Only publish data that belongs to the current user
  return Lists.find({ createdBy: currentUser });
});

Meteor.publish('todos', function(currentList) {

  var currentUser = this.userId;

  return Todos.find({ createdBy: currentUser, listId:currentList });
});