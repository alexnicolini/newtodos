Template.addTodo.events({
  'submit form': function (event) {

    // Prevent default form behavior
    event.preventDefault();

    var todoName = $('[name="todoName"]').val();

    // Get the current user ID
    var currentUser = Meteor.userId();

    // Get the current list ID
    var currentList = this._id;

    // Trigger the code from the web browser
    Meteor.call('createListItem', todoName, currentList, function(error) {
      if (error) {
        console.log(error.reason);
      } else {
        $('[name="todoName"]').val('');
      }
    });
  }
});