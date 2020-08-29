var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // render all the messages from server
    // Use setTimeout to render page
    setTimeout(MessagesView.render(), 5000);
  },

  render: function() {

    // Need to take in all messages from the server and append it to the page
    // Takes in a callback function and executes it with the server data
    const successCb = function(data) {
      console.log("data is ", data)
      for (const message of data) {
        MessagesView.$chats.append(MessageView.render(message));
      }
    };

    Parse.readAll(successCb);
  }
};