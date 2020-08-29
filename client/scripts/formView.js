var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let message = {
      roomname: $('#rooms select option:selected')[0].value,
      username: App.username,
      text: $('#message')[0].value
    };
    console.log($('#message')[0].value);
    Parse.create(message);
    // console.log(event.text());
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};