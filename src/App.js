import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offcanvas from './components/Offcanvas';
import { useState } from 'react';
import Main from './components/Main';

function App() {

  const [page,setPage] = useState('inventory')
  const [filters, setFilter] = useState({
    active:'all'
  })

  return (
    <div className="App">
      <Navbar/>
      <div>
        <Offcanvas page={page} setPage={setPage}/>
        <Main filters = {filters} setFilter = {setFilter}/>
      </div>
    </div>
  );
}

export default App;
