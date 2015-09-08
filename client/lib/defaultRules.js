$.validator.setDefaults({
  rules: {
    email: {
      // required: true,
      email: true
    },
    password: {
      // required: true,
      minlength: 6
    }
  },
  messages: {
    email: {
      required: 'You must enter an email address.',
      email: "You've entered an invalid email address."
    },
    password: {
      required: 'You must enter a password.',
      minlength: 'Your password must be at least {0} characters.'
    }
  }
});