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
  },

  'keyup [name=todoItem]': function(event) {

    if (event.which == 13 || event.which == 27) {
      $(event.target).blur();
    } else {
      // Get document ID
      var documentId = this._id;

      // Get value of the input field
      var todoItem = $(event.target).val();
      // Another way
      // var todoItem = $('[name=todoItem]').val() // jQuery
      // var todoItem = event.target.value;

      // Update document
      Todos.update({ _id: documentId }, { $set: { name: todoItem }});
    }
  }
});