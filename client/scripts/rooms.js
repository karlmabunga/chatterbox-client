var Rooms = {

  create: function(newRoomName, successCb) {

    Parse.create(newRoomName, successCb);
  }
};
