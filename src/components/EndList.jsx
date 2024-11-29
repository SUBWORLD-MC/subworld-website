import Faq from './Faq';
import Discord from './Discord'; 
import Footer from './Footer';

function endList() {
    return (
        <div className="endList">
            <div className="container">
                <p style={{margin: '0'}} className="title-p">Вопросы</p>
                <p style={{margin: '27px 0 0'}} className="description-p">Наш проект работает без перерывов на обед с 2012 года.</p>
            </div>
            <Faq />
            <div className='container discordServer'>
                <p style={{margin: '0'}} className="title-p">Наш Discord</p>
                <p style={{margin: '27px 0 0'}} className="description-p">Наш проект работает без перерывов на обед с 2012 года.</p>
            </div>
            <Discord />
            <Footer />
        </div>
    )
}

export default endList;