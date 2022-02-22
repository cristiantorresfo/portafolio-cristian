import './App.css';
import About from './components/About';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <About/>
      <Technologies/>
    </div>
  );
}

export default App;
