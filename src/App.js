import logo from './logo.svg';
import './App.css';
import MyComponent from './api/Test_api';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React!</h1>
        <MyComponent/>
        
        
      </header>
    </div>
  );
}

export default App;
