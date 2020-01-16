import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

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

    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/1500873?s=460&v=4" alt="Mhayk Whandson" />
            <div className="user-info">
              <strong>Mhayk Whandson</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Passionate about JavaScript, ReactJS, React Native, NodeJS and the entire ecosystem around these technologies.</p>
          <a href="https://github.com/mhayk">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/1500873?s=460&v=4" alt="Mhayk Whandson" />
            <div className="user-info">
              <strong>Mhayk Whandson</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Passionate about JavaScript, ReactJS, React Native, NodeJS and the entire ecosystem around these technologies.</p>
          <a href="https://github.com/mhayk">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/1500873?s=460&v=4" alt="Mhayk Whandson" />
            <div className="user-info">
              <strong>Mhayk Whandson</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Passionate about JavaScript, ReactJS, React Native, NodeJS and the entire ecosystem around these technologies.</p>
          <a href="https://github.com/mhayk">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/1500873?s=460&v=4" alt="Mhayk Whandson" />
            <div className="user-info">
              <strong>Mhayk Whandson</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Passionate about JavaScript, ReactJS, React Native, NodeJS and the entire ecosystem around these technologies.</p>
          <a href="https://github.com/mhayk">Acessar perfil no Github</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/1500873?s=460&v=4" alt="Mhayk Whandson" />
            <div className="user-info">
              <strong>Mhayk Whandson</strong>
              <span>ReactJS, React Native, Node.js</span>
            </div>
          </header>
          <p>Passionate about JavaScript, ReactJS, React Native, NodeJS and the entire ecosystem around these technologies.</p>
          <a href="https://github.com/mhayk">Acessar perfil no Github</a>
        </li>
      </ul>
    </main>
  </div>
  )
}

export default App;
