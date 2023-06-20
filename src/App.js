import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';
import ColorChoice from './components/ColorChoice';


const App = () => {
  const [chatData, setChatData] = useState(chatMessages)

  // Process message entries when like button is selected
  const fillHeart = (id) => {
    setChatData(chatData => chatData.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }))
  };

  // Count liked messages and tally total
  const countFilledHearts = (chatData) => {
    return chatData.reduce((total, entry) => {
      return entry.liked ? total + 1 : total;
    }, 0)
  };

  const totalLikedMessages = countFilledHearts(chatData);

  // Determine local and remote sender
  const localSender = chatMessages[0]['sender'];
  let remoteSender = '';
  for (const entry of chatMessages) {
    if (entry.sender !== localSender) {
      remoteSender = entry.sender;
    }
  };

  // Establish default sender colors
  const [color, setColor] = useState({ local: 'blue', remote: 'green'});

  // Change sender colors
  const changeSenderColor = (sender, newColor) => {
    setColor (oldColor => ({ ...oldColor, [sender]: newColor}));
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between <span className={color.local}>{localSender}</span> and <span className={color.remote}>{remoteSender}</span></h1>
        <section>
          <span className="widget">
            <h4 className={color.local}>{localSender}'s color</h4>
            <ColorChoice setColorCallback={newColor => changeSenderColor('local', newColor)} />
          </span>
          <h2 id="heartWidget">{totalLikedMessages} ❤️s</h2>
          <span className="widget">
            <h4 className={color.remote}>{remoteSender}'s color</h4>
            <ColorChoice setColorCallback={newColor => changeSenderColor('remote', newColor)} />
          </span>
        </section>
      </header>
      <main>
        <ChatLog 
          entries={chatData}
          localSender={localSender}
          localColor={color.local}
          remoteColor={color.remote}
          onHeartClick={fillHeart}
        />
      </main>
    </div>
  );
};

export default App;
