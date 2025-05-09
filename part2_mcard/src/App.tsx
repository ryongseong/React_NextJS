import { css } from '@emotion/react'
import logo from './logo.svg'
import './App.css'

const containerStyles = css`
  background-color: pink;
`

function App() {
  return (
    <div className="App" css={containerStyles}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  )
}

export default App
