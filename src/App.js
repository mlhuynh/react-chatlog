import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Ada Chat Log</h1>
      </header>
      <main>
        <ChatEntry>
          entries={chatData}
        </ChatEntry>
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
