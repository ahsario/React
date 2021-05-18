import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

const MessageInput = (props) => {
  const { onSend } = props;

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSend(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

MessageInput.propTypes = {
  onSend: PropTypes.func,
};
MessageInput.defaultProps = {
  onSend: () => {},
};

export default memo(MessageInput);
