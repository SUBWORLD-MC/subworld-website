import './App.css';
import Header from './component/header';
import Main from './component/main';
import Card from './component/card';
import Footer from './component/footer';
import CardsList from './component/cardsList';  
import EndList from './component/endList';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <div className='subworld'>
                <Header />
                <Routes>
                    <Route path="/home" element={<Main />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
