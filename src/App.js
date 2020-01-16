import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
  <div id="app">
    <aside>
      <strong>Add</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Github user</label>
          <input name="github_username" id="username_github" required/>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologies</label>
          <input name="techs" id="techs" required/>
        </div>

        <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required/>
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" required/>
        </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </aside>
    <main></main>
  </div>
  )
}

export default App;
