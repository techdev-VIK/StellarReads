import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Nav from './components/Nav';
import AddBook from './pages/AddBook';



function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route path="/addBook" element={<AddBook />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
