import Image from '../img.png'

function Card() {
    return (
        <div className="container">
            <div className="Card">
                <div style={{backgroundImage: `url(${Image})`, backgroundRepeat: 'repeat'}} className="cardImage">
                    <div style={{bottom: "25px", left: "35px"}} className="CardLike">
                        <img src="./svg/love.svg" alt="" />
                        <p>42</p>
                    </div>
                    <div style={{bottom: "25px", left: "126px"}} className="CardLike">
                        <img src="./svg/eye.svg" alt="" />
                        <p>142</p>
                    </div>
                </div>
                <div>
                    <p className="Card-title">ОБНОВЛЕНИЕ DIVINE RPG 2.0</p>
                    <div className="line-card"></div>
                    <div className="Card-description">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</div>
                    <div className="card-flex">
                        <button className="Card-info">Подробнее</button>
                        <p className="Card-data">26.08.2024 18:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;