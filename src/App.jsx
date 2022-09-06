import reactLogo from './assets/react.svg'
import mobXLogo from './assets/mobx-min.png'
import moduleFed from './assets/module-fed.png'
import { TodoList } from './components/TodoList';
import './App.css'
import { TodoControl } from './components/TodoControl';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mobx.js.org/" target="_blank">
          <img src={mobXLogo} className="logo mobx" alt="MobX logo" />
        </a>
        <a href="https://webpack.js.org/concepts/module-federation/" target="_blank">
          <img src={moduleFed} className="logo react" alt="MobX logo" />
        </a>
      </div>
      <h1>Vite + React + MobX + Module Federation</h1>
      <h2>App #1: Todo List</h2>
      <div className="card">
        <TodoControl />
        <TodoList />
      </div>
      <p className="read-the-docs">
        Нажмите на логотипы сверху, чтобы узнать подробности
      </p>
    </div>
  )
}

export default App
