import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {

  //Assign class name for CSS styling based on whether sender is local or remote.
  let entryClass = 'chat-entry remote';
  if (props.sender === props.localSender) {
    entryClass = 'chat-entry local';
  }

  return (
    <div className={entryClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={props.sender === props.localSender ? props.localColor : props.remoteColor}>
          {props.body}
        </p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={() => props.onHeartClick(props.id)}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onHeartClick: PropTypes.func
};

export default ChatEntry;
