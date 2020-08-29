var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', RoomsView.handleClickDropdown);

    Parse.readAll(function(data) {
      var messages = data.results;
      console.log('Messages', messages)

      var rooms = {};
      for (var i = 0; i < messages.length; i ++) {
        rooms[messages[i].roomname] = true;
      }

      var roomNames = Object.keys(rooms);

      console.log("Rooms", roomNames)
      RoomsView.render(roomNames);
    });
  },


  render: function(roomNames) {
    RoomsView.$select.html('');

    for (var room of roomNames) {
      var optionTemplate = _.template(`
        <option value="<%= a %>">
          <%= a %>
        </option>
      `);

      var renderedOptionTemplate = optionTemplate({
        a: room
      });

      console.log("rendered", renderedOptionTemplate);

      RoomsView.$select.append(renderedOptionTemplate);
    }
  },

  handleAddRoom: function () {
    console.log("executing handle add room")
    event.preventDefault();

    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: FormView.$form.find('#message').val(),
    };



    Parse.create(message, function() {
      console.log("Created successfully", message)
      Parse.readAll(function(data) {
        var messages = data.results;
        console.log('Messages', messages)

        var rooms = {};
        for (var i = 0; i < messages.length; i ++) {
          rooms[messages[i].roomname] = true;
        }

        var roomNames = Object.keys(rooms);

        console.log("Rooms", roomNames)
        RoomsView.render(roomNames);
      });
    });
  },

  //separate click function, name handleClick
  // if there is text in the box and then click add room,
  // then render rooms and messages
  handleClickDropdown: function (event) {

    console.log("HCD: event", event.target.value)

    Parse.readAll(function (data) {
      var messages = data.results;

      var filteredMessages = []
      for (var i = 0; i < messages.length; i++) {
        if (messages[i].roomname) {
          if (messages[i].roomname === event.target.value) {
            filteredMessages.push(messages[i]);
          }
        }
      }

      console.log("Filtered messages", filteredMessages)

      MessagesView.render(filteredMessages);
    });
  }
};

