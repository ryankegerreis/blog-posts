import React from 'react';
import './App.css';

// Props In React
import Title from "./Posts/Props In React/Title"
import List from "./Posts/Props In React/List"

function App() {
  return (
    <div className="center">
      <Title title={"Name List"} />
      <List />
    </div>
  );
}

export default App;
