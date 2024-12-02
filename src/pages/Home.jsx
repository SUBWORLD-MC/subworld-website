import Rectangle from '../image/Rectangle.png';
import Card from '../components/Сard';
import CardsList from '../components/CardsList';  
import EndList from '../components/EndList';
import { Route, Routes } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="main-main">
                <div className="container">
                    <div className="main-index">
                        <div className="main">
                            <div className="textmain">
                            <p className="UnBMain">
                                ДОБРО<br />ПОЖАЛОВАТЬ<br />НА ЛАМПОВЫЙ<br />
                                <span style={{ background: "linear-gradient(268deg,rgba(83,187,190,1)0%,rgba(39,188,143,1)100%)", WebkitBackgroundClip: "text", color: "transparent"}}>
                                    ПРОЕКТ
                                    <br />ПО МАЙНКРАФТУ
                                </span>
                                </p>
                                <p className="MoMeMain"><span style={{ color: '#ADADAD' }}>Открой для себя новый мир возможностей в<br />нашем ламповом проекте по Майнкрафту</span></p>
                                <div className="mainbutton">
                                    <button className="bstartgame">Начать играть</button>
                                    <button className="dowlauncher">
                                        Скачать лаунчер
                                        <img src={`${process.env.PUBLIC_URL}/svg/download.svg`} alt="Download Icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{backgroundImage: `url(${Rectangle})`, backgroundRepeat: 'repeat', mixBlendMode: "overlay"}} className="pixel" alt="" />
                            <img src="./png/forest.png" alt="" className="forest"/>
                            <img className='Ellipse' src="./svg/Ellipse.svg" alt="" />
                            
                        </div>
                    </div>
                </div>
                <div className="triger"></div>
            </div>
            <CardsList />
            <EndList/>
        </div>
    );
}


export default Home;
