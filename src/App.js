import React from 'react';

import './global.css';
import './App.css';

function App() {
  return (
  <div id="app">
    <aside>
      <strong>Add</strong>
      <form>
        <label htmlFor="github_username_label">Github user</label>
        <input name="github_username" id="github_username_label"/>
      </form>
    </aside>
    <main></main>
  </div>
  )
}

export default App;
