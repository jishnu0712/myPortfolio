import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainComponent from './pages/MainComponent';
import About from './pages/About'
import { Route, Routes } from "react-router-dom";
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="container h-screen min-w-full flex flex-col">
      <Header />

      <Routes>
        <Route index element={<MainComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>


      <Footer />
    </div>
  );
}



export default App;
