import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  return(
  <ul>
    {props.entries.map((entry) => (
      <ChatEntry key={entry.id}
        id = {entry.id}
        sender = {entry.sender}
        body = {entry.body}
        timeStamp = {entry.timeStamp}
        liked = {entry.liked}
      />
    ))}
  </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired
};

export default ChatLog;