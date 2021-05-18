import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Messages from '@components/Messages';
import MessageInput from '@components/MessageInput';

// заглушка. Потом здесь будем получать уже какие-то сообщения с сервера
const messages = [
  {
    id: 1,
    author: 'Miguel',
    text: 'Ola!',
  },
  {
    id: 2,
    author: 'Bjorn',
    text: 'Hi!',
  },
  {
    id: 3,
    author: 'Stitch',
    text: 'Aloha!',
  },
  {
    id: 4,
    author: 'Иван',
    text: 'Привет!',
  },
];

const MessagePage = (props) => {
  const {
    user: { name },
  } = props;
  const [messageList, setMessageList] = useState(messages);

  const handleMessageSend = (messageText) => {
    // Берём максимальный айдишник из массива и прибавляем 1. Потом будем получать айдишник сообщения с сервера
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
