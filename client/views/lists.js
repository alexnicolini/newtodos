// "Catch" the selection of data from the Meteor.publish function
// Meteor.subscribe('lists');

// The code in this function will execute as soon as 
// the template is rendered in the interface (meaning, 
// when the template is inserted into the DOM)
Template.lists.onCreated(function() {
  // Template-level subscription
  this.subscribe('lists');
});

Template.lists.helpers({
  'list': function () {

    var currentUser = Meteor.userId();

    return Lists.find({ createdBy: currentUser  }, { sort: { name: 1 } });
  }
});