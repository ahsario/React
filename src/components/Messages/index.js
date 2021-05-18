import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Messages = (props) => {
  const { messages } = props;

  const renderMessages = () =>
    messages.map(({ author, id, text }) => (
      <div key={id}>
        <span>{author}: </span>
        <span>{text}</span>
      </div>
    ));

  return <div>{renderMessages()}</div>;
};

Messages.propTypes = {
  messages: PropTypes.array,
};

Messages.defaultProps = {
  messages: [],
};

export default memo(Messages);
