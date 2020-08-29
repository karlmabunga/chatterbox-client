var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log('click!');

    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: FormView.$form.find('#message').val() || 'lobby',
    };

    Messages.create(message, function() {
      MessagesView.render();
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};