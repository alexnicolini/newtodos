Template.todoItem.helpers({
  'checked': function () {
    
    var isCompleted = this.completed;

    if (isCompleted) {
      return 'checked';
    } else {
      return '';
    }
  }
});

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
      Meteor.call('removeListItem', documentId);
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
      Meteor.call('updateListItem', documentId, todoItem);
    }
  },

  'change [type=checkbox]': function() {

    // Get document ID
    var documentId = this._id;

    // Get state of the task
    var isCompleted = this.completed;

    if (isCompleted) {
      Meteor.call('changeItemStatus', documentId, false);
    } else {
      Meteor.call('changeItemStatus', documentId, true);
    }
  }
});