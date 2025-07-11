import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import { Route,Routes } from 'react-router-dom';
import AddMovie from './component/AddMovie';
import Detail from './component/Detail';

function App() {
  return (
    <div className=''>
      <Header/>
      <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="/add" element={<AddMovie/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
