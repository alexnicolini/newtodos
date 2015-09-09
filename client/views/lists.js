// "Catch" the selection of data from the Meteor.publish function
// Meteor.subscribe('lists');

Template.lists.helpers({
  'list': function () {

    var currentUser = Meteor.userId();

    return Lists.find({ createdBy: currentUser  }, { sort: { name: 1 } });
  }
});