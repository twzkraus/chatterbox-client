var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    MessagesView.$chats.html('');
    console.log('rendering messages', Messages.storedMessages);
    for (let i = 0; i < Messages.storedMessages.length; i++) {
      let thisMessage = Messages.storedMessages[i];

      if (thisMessage.roomname) {
        if (thisMessage.roomname.split(' ').join('-') === $('#rooms select option:selected')[0].value) {
          MessagesView.$chats.append(MessageView.render(thisMessage));
        }
      }
    }
  }
};
