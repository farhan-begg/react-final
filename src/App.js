import React from 'react';
import './App.css';
import PageHeader from './Heading'
import Content from './band'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PageHeader />
        <Content />

      </header>
    </div>
  );
}

export default App;
