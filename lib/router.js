Router.configure({
  layoutTemplate: 'main' 
});


Router.route('/register');

Router.route('/login');

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/list/:_id', {
  name: 'listPage',
  template: 'listPage',
  data: function() {
    var currentList = this.params._id;
    var currentUser = Meteor.userId();

    return Lists.findOne({ _id: currentList, createdBy: currentUser  });
  },

  // onRun: function() {
  //   console.log('You triggered "onRun" for "listPage" route.')
  //   this.next();
  // },

  // onRerun: function() {
  //   console.log('You triggered "onRerun" for "listPage" route.')
  // },

  onBeforeAction: function() {
    // console.log('You triggered "onBeforeAction" for "listPage" route.')
    var currentUser = Meteor.userId();

    if (currentUser) { // logged-in
      this.next();
    } else { // not logged-in
      this.render('login'); 
    }
  },

  // onAfterAction: function() {
  //   console.log('You triggered "onAfterAction" for "listPage" route.')
  // },

  // onStop: function() {
  //   console.log('You triggered "onStop" for "listPage" route.')
  // },
});