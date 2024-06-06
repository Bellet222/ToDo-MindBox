import './App.css';
import ToDoBox from './components/ToDoBox';

function App() {
  return (
    <div className="App">
      <h1 style={{"color": "white"}}>To-Do для Mindbox</h1>
      <ToDoBox/>
    </div>
  );
}

export default App;
