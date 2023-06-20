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
        return {...entry, liked: !entry.liked}
      } else {
        return entry
      }
    }))
  };

  const countFilledHearts = (chatData) => {
    return chatData.reduce((total, entry) => {
      return total + (entry.liked ? 1 : 0)
    }, 0)
  };

  const totalLikedMessages = countFilledHearts(chatData);

  return (
    <div id="App">
      <header>
        <h1>Sapphire Chat Log</h1>
        <h2>{totalLikedMessages} ❤️s</h2>
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
