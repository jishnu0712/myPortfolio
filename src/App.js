import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainComponent from './pages/MainComponent';
import About from './pages/About'
import { Route, Routes } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import { UserContext } from './context/context';
import { useState } from 'react';
import NotFound from './pages/NotFound';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`container h-screen min-w-full flex flex-col ${darkMode ? "bg-gray-900" : ""}`}>

      <UserContext.Provider value={{darkMode, setDarkMode}}>
        <Header />
        <Routes>
          <Route index element={<MainComponent />} />
          <Route path='/myPortfolio' element={<MainComponent />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </UserContext.Provider>

    </div>
  );
}



export default App;
