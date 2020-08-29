var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    // **** CHANGED ****
    // Reading the data in initialize rather than render so we don't delay the render function in writing to the DOM
    Parse.readAll(function(data) {
      Messages.data = data.results;
      MessagesView.render();
    });
  },

  render: function(filteredMessages) {
    // ***CHANGED
    // Removed the Parse.readAll function from the render since the tests assume that
    // the render function will immediately modify the DOM.
    // Also, we need to clear the page before re-rendering to not repeat tweets
    MessagesView.$chats.html('');
    for (const message of (filteredMessages || Messages.data)) {
      MessagesView.$chats.append(MessageView.render(message));
    }
  }
};