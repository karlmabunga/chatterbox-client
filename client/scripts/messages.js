var Messages = {

  data: [],

  // Puts our messages in the server with Parse.create
  // also stores our messages in an array
  create: function(message) {
    Parse.create(message);
    Messages.data.push(message);
  }

};

