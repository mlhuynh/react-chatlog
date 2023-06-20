import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages)

  const fillHeart = (id) => {
    setChatData(chatData => chatData.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }))
  };

  const countFilledHearts = (chatData) => {
    return chatData.reduce((total, entry) => {
      return entry.liked ? total + 1 : total;
    }, 0)
  };

  const totalLikedMessages = countFilledHearts(chatData);

  const localSender = chatMessages[0]['sender'];
  let remoteSender = '';
  for (const entry of chatMessages) {
    if (entry.sender !== localSender) {
      remoteSender = entry.sender;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between {localSender} and {remoteSender}</h1>
        <section>
          <h2>{totalLikedMessages} ❤️s</h2>
        </section>
      </header>
      <main>

        <ChatLog 
          entries={chatData} 
          onHeartClick={fillHeart}
        />
      </main>
    </div>
  );
};

export default App;
