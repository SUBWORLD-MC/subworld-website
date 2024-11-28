import Rectangle from '../Rectangle.png';
import Card from './card';
import CardsList from './cardsList';  
import EndList from './endList';
import { Route, Routes } from 'react-router-dom';

function Main() {
    return (
        <div>
            <div className="main-main">
                <div className="container">
                    <div className="main-index">
                        <div className="main">
                            <div className="textmain">
                                <p className="UnBMain">ДОБРО<br/>ПОЖАЛОВАТЬ<br/>НА ЛАМПОВЫЙ<br/>ПРОЕКТ<br/>ПО <span style={{color: "#27BC8F"}}>МАЙНКРАФТУ</span></p>
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
                            <div>
                                <div className="circle circle1"></div>
                                <div className="circle circle2"></div>
                                <div className="circle circle3"></div>
                            </div>
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


export default Main;
