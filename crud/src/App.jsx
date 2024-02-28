import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TabButton from './components/TabButton';
import Completed from './components/Completed';
import './App.css';

const TODO = {
  LIST: 'To-Do List',
  COMPLETED: 'Complete',
}

function App() {
  const [tab, setTab] = useState(TODO.LIST);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <ul className="tab">
        <TabButton
          tabName={TODO.LIST}
          tab={tab}
          setTab={setTab}
        />
        <TabButton
          tabName={TODO.COMPLETED}
          tab={tab}
          setTab={setTab}
        />
      </ul>
      {tab === TODO.LIST && (
        <TodoList/>
      )}
      {tab === TODO.COMPLETED && (
        <Completed/>
      )}
    </div>
  );
}

export default App;
