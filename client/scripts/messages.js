var Messages = {

  // **** CHANGED ****
  // Took out data array cuz we dont need it here, but it will be created in the initialize function in messagesView.js

  // **********CHANGED**************
  // Added successCb to ensure message is created on server before we render the the DOM with the new info
  create: function(message, successCb) {

    Parse.create(message, successCb);
  }
};

