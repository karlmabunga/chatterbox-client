var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');

    // Have to put message here to have access to $form
    var message = {
      // Whatever we want it to show up as, no input that they gave to specify username
      username: 'pairPartnersKarlAndCatherine',
      // Get the input value using DOM
      text: FormView.$form.find('#message').val(),
      // Don't know yet, need to get it after it is created
      roomname: '???'
    };
    // puts message into an array and server using previously created functions
    Message.create(message);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};