import Card from './Сard';

import img1 from '../image/sefsegfsefgf.png'
import img2 from '../image/minecraft.jpeg'
import img3 from '../image/cf1c4e97bb3f5559d0248ec40fe53184.png'
import img4 from '../image/maxresdefault.jpg'

function cardsList() {
    return (
        <div className="cardsList">
            <div className="container">
                <p className="title-p">Новости</p>
                <p className="description-p">Следите за последними обновлениями и улучшениями нашего проекта.</p>
                <div className="card-list">
                    <Card img={img2} title="ОБНОВЛЕНИЕ DIVINE RPG 2.0" url="./svg/left.svg"/>
                    <Card img={img3} title="ОБНОВЛЕНИЕ DIVINE RPG 2.0" url="./svg/left.svg"/>
                </div>
                <div className="card-list">
                    <Card img={img1} title="ОБНОВЛЕНИЕ DIVINE RPG 2.0" url="./svg/left.svg"/>
                    <Card img={img4} title="ОБНОВЛЕНИЕ DIVINE RPG 2.0" url="./svg/left.svg"/>
                </div>
                <div className='j'>
                    <button className='loadPost'>Загрузить ещё</button>
                </div>
            </div>
        </div>
    )
}



export default cardsList;