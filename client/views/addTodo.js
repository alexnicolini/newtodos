Template.addTodo.events({
  'submit form': function (event) {
    event.preventDefault();

    var todoName = $('[name="todoName"]').val();

    Todos.insert({
      name: todoName,
      completed: false,
      createdAt: new Date()
    });

    $('[name="todoName"]').val('');
  }
});