import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';

// const entries = chatMessages;  

const App = () => {
  const [entries, setEntries] = useState(chatMessages)

  return (
    <div id="App">
      <header>
        <h1>Ada Chat Log</h1>
      </header>
      <main>
        <ChatLog entries={entries} />
      </main>
    </div>
  );
};

export default App;
