import './style/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Card from './components/Сard';
import Footer from './components/Footer';
import CardsList from './components/CardsList';  
import EndList from './components/EndList';
import { Route, Routes } from 'react-router-dom';
import Server from './pages/Server';

function App() {
    return (
        <div>
            <div className='subworld'>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/servers" element={<Server />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
