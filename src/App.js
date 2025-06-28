import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Card from './component/Card';
import { Route,Routes } from 'react-router-dom';
import AddMovie from './component/AddMovie';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Card/>}/>
        <Route path="/add" element={<AddMovie/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
