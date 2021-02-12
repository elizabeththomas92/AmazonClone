import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Navigation from './NavigationBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
