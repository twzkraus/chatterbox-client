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
      // check roomname against currently selected roomname
      if (thisMessage.roomname) {
        if (thisMessage.roomname.split(' ').join('-') === $('#rooms select option:selected')[0].value) {
          MessagesView.$chats.append(MessageView.render(thisMessage));
        }
      }
    }
  }

    // inputs: Messages array

    // key pieces: iterate over messages, selectively add them to the chats box, check roomname,

    // outputs: room messages displayed on the DOM

    // justification:
    // explanation: Iterate over the messages, check each roomname against the currently selected roomname, and add to chats if there's a match


};


// doesn't look at messageView yet

// all messages will go inside chat div
