import './App.css';
import Header from './component/header';
import Main from './component/main';
import Card from './component/card';
import Faq from './component/faq';
import Footer from './component/footer';
import CardsList from './component/cardsList';  

function App() {
    return (
        <div>
            <div className='subworld'>
                <Header />
                <Main />
                <CardsList />
            </div>
        </div>
    );
}

export default App;