function Main() {
    return (
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
                    <div className="mainicon">
                        <div className="mask">
                            <img className="image-flaim" src={`${process.env.PUBLIC_URL}/png/flaim3.png`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
