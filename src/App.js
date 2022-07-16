import './App.css';
import Footer from './Footer';
import Header from './Header';
import MainComponent from './MainComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container h-screen min-w-full bg-gray-100 flex flex-col">
      <Header />

      <MainComponent />

      <Footer />
    </div>
  );
}



export default App;
