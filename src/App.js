import './App.css';
import { NewComponent } from './Component/Component';
import { Counter } from './Counter/Counter';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <NewComponent/>
      <Counter/>
    </div>
  );
}

export default App;
