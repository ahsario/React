import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Messages from '@components/Messages';
import MessageInput from '@components/MessageInput';

const messages = [
  {
    id: 1,
    author: 'Kuramagamed',
    text: 'Oleicum!',
  },
  {
    id: 2,
    author: 'Tor',
    text: 'Scoll!',
  },
  {
    id: 3,
    author: 'Barry',
    text: 'hello!',
  },
  {
    id: 4,
    author: 'Alan',
    text: 'Zdorova!',
  },
];

const MessagePage = (props) => {
  const {
    user: { name },
  } = props;
  const [messageList, setMessageList] = useState(messages);

  const handleMessageSend = (messageText) => {
    const id =
      [...messageList].sort(({ id: id1 }, { id: id2 }) => id2 - id1)[0].id + 1;

    setMessageList([
      ...messageList,
      {
        author: name,
        id,
        text: messageText,
      },
    ]);
  };

  return (
    <div>
      <Messages messages={messageList} />
      <MessageInput onSend={handleMessageSend} />
    </div>
  );
};

MessagePage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(MessagePage);