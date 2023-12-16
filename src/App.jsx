import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      {/* <Footer /> */}
      </>
  )
}

export default App;
