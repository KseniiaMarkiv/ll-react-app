import './App.css';
import './Common.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <section className="HeaderSection">
        <Header/>
        <Nav/>
      </section>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
