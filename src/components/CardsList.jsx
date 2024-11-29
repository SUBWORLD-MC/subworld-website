import Card from './Сard';


function cardsList() {
    return (
        <div className="cardsList">
            <div className="container">
                <p className="title-p">Новости</p>
                <p className="description-p">Следите за последними обновлениями и улучшениями нашего проекта.</p>
                <Card />
                <Card />
                <div className='j'>
                    <button className='loadPost'>Загрузить ещё</button>
                </div>
            </div>
        </div>
    )
}



export default cardsList;