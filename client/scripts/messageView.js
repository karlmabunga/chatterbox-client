// var MessageView = {

//   render: _.template(`
//       <!--
//       <div class="chat">
//         <div class="username"></div>
//         <div></div>
//       </div>
//       -->
//     `)

// };

var MessageView = {

  // Modify the render function to take in messageData object
  // Modify the template to take in all the message attributes
  render: function(message) {

    let messageTemplate = _.template(`
      <div class="chat">
        <div class="username"><%= a %></div>
        <div><%= b %></div>
      </div>
    `);

    let domMessageStr = messageTemplate({
      a: message.username,
      b: message.text
    });

    return $(domMessageStr);
  }
};
