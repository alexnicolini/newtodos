// "Catch" the selection of data from the Meteor.publish function
// Meteor.subscribe('todos');

Template.todos.helpers({
  'todo': function () {

    var currentList = this._id;
    var currentUser = Meteor.userId();

    return Todos.find({ listId: currentList, createdBy: currentUser }, { sort: { createdAt: - 1 } });
  }
});