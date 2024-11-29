function Footer() {
    return (
      <div className="footer">
        <div className="subworld-logo-footer">
          <img src="./png/subworld.png" alt=""/>
          <img className="subworld-blur" src="./png/subworld.png" alt=""/>
        </div>
        
        <div className="container1">
          <div className="container">
            <div className="footer-div">
              <div className="logo-or-lic">
                <p className="logo-footer">SUBWORLD</p>
                <p className="lic">© 2024 «SUBWORLD»</p>
              </div>
              <div className="catalog-or-contact">
                <div>
                  <p style={{ marginRight: '61px' }} className="catalog-text">Каталог</p>
                  <a href="">Главная</a>
                  <a href="">Новости</a>
                  <a href="">Донат</a>
                  <a href="">Сервер</a>
                </div>
                <div>
                  <p className="catalog-text">Соцсети</p>
                  <a href="">ВК</a>
                  <a href="">Дискорд</a>
                  <a href="">Телеграм</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default Footer;