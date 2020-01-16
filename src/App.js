import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude)
        setLongitude(longitude)
      },
      err => console.log(err),
      {
        timeout: 30000
      }
    )
  }, []);


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
          <input type="number" name="latitude" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} required/>
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input type="number" name="longitude" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} required/>
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
