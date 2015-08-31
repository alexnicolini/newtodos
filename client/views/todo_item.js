Template.todoItem.events({
  'click .delete-todo': function () {

    // Prevent default form behavior
    event.preventDefault();

    // Get document ID
    var documentId = this._id;

    // Confirm delete operation
    var confirm = window.confirm('Delete this task?');

    if (confirm) {

      // Remove task
      Todos.remove({ _id: documentId });
    }
  }
});