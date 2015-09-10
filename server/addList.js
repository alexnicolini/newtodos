Meteor.methods({
  'createNewList': function(listName) {

    // Grab the ID of the currently logged-in user
    var currentUser = Meteor.userId();

    if (listName == '') {
      listName = defaultName(currentUser);
    }

    var data = {
      name: listName,
      createdBy: currentUser
    }

    // Checks if the object type of listName
    // matches the object type String
    check(listName, String);

    // Determine if the user triggering the method 
    // is currently logged-in.
    if (!currentUser) {
      throw new Meteor.Error('not-logged-in', "You're not logged-in");
    } 

    return Lists.insert(data);
  }
});

function defaultName(currentUser) {
  var nextLetter = 'A', nextName = 'List' + nextLetter;

  while (Lists.findOne({ name: nextName, createdBy: currentUser })) {
    nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
    nextName = 'List ' + nextLetter;
  }

  return nextName;
}