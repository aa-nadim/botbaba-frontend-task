
import './App.css';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <div className="bg-info">
        <h1 className="text-light">CURD operation using only API by calling it.</h1>
      </div>

      <Users />
    </div>
  );
}

export default App;