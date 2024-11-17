function Card() {
    return (
        <div className="container">
            <div className="Card">
                <div className="Card-Image"></div>
                <div className="Card-info">
                    <div className="card-title">
                        <p>НОВОСТИ</p>
                        <div className="line-card-title"></div>
                    </div>
                    <div className="Card-name">
                        <p>ОБНОВЛЕНИЕ<br/>
                        DIVINE RPG 2.0</p>
                    </div>
                    <div className="Card-description">
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
                    </div>
                    <div className="Card-data">
                        <p>26 июля 2024 в 19:00</p>
                    </div>
                    <div className="Card-end-line"></div>
                </div>
            </div>
        </div>
    )
}

export default Card;