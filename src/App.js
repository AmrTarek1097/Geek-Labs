import './App.css';
import DataSection from './components/DataSection.jsx';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='p-4'>
    <Header/>
    <Navbar/>
    <DataSection/>
    </div>
  );
}

export default App;
