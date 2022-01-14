import './App.css';
import Sample from './Components/Sample';

function App() {

  console.log(process.env.REACT_APP_API_KEY)

  return (
    <div>
      <h1>Weather Or Not?</h1>
      <Sample />
    </div>
  );
}

export default App;
