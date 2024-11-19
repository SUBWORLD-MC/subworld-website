import './App.css';
import Header from './component/header';
import Main from './component/main';
import Card from './component/card';
import Faq from './component/faq';
import Footer from './component/footer'

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Card />
            <Card />
            <Faq />
            <Footer />
        </div>
    );
}

export default App;
