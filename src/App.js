import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <About/>
      <Technologies/>
      <Projects/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
