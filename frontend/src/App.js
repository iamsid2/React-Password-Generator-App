import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SocialImages from './components/SocialImages'

class App extends Component {
        // Initialize state
      state = { passwords: [] }

      // Fetch passwords after first mount
      componentDidMount() {
      this.getPasswords();
      }

      getPasswords = () => {
      // Get the passwords and store them in state
      fetch('/api/passwords')
        .then(res => res.json())
        .then(passwords => this.setState({ passwords }));
      }

    render() {
      const { passwords } = this.state;
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Password Generator</h1>
            </header>
            <SocialImages />

        {passwords.length ? (
          <div>
            <h1>We try to make you secure</h1>
            <br />
            <h3>These Passwords will never get you hacked!!!</h3>
            <ul className="passwords">
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
        <br />
        <br />
        <br />
          </div>

    );
  }
}

export default App;
