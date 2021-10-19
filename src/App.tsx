import React from 'react';
import logo from '@/assets/logo.svg';
import styles from '@/App.module.less';
import { Button } from 'antd';

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header bg-red-400">
        <Button>sdsd</Button>
        <img src={logo} className="App-logo border-8" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
