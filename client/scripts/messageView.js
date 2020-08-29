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

  render: function(message) {

    let messageTemplate = _.template(`
      <div class="chat">
        <div class="username"><%= a %></div>
        <div><%= b %></div>
      </div>
    `);

    let domMessageStr = messageTemplate({
      a: _.escape(message.username),
      b: _.escape(message.text)
    });

    return $(domMessageStr);
  }
};
