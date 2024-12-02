
function Card(prom) {
    return (
        <div className="container">
            <div style={{backgroundImage: `url(${prom.img})`}} className="Card">
                <p className='p-title'>{prom.title}</p>
                <img className='left-svg' src={prom.url} alt="" />
                <p className="description-p-card">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
                <div className="black-text"></div>
            </div>
        </div>
    )
}

export default Card;