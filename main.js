window.addEventListener('load', () => {
    // document.querySelector('.container-header').classList.add('visible');
    document.querySelector('.main-main').classList.add('visible');
    document.querySelector('.textmain').classList.add('animate');
});

const check = document.querySelector('.check');
const ktomi1 = document.querySelector('.ktomi');
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const discord = document.querySelector('.discord');
const y = document.querySelector('.y');
const y1 = document.querySelector('.y1');
const y2 = document.querySelector('.y2');
const y3 = document.querySelector('.y3');

function isColliding(rect1, rect2) {
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

function checkCollision() {
    const checkRect = check.getBoundingClientRect();
    const container1Rect = container1.getBoundingClientRect();
    const yRect = y.getBoundingClientRect();
    const y1Rect = y1.getBoundingClientRect();
    const y2Rect = y2.getBoundingClientRect();
    const y3Rect = y3.getBoundingClientRect();

    if (isColliding(checkRect, container1Rect)) {
        container2.classList.add('animated');
    } 
    if (isColliding(checkRect, yRect)) {
        container2.classList.add('animated');
        container3.classList.add('animated');
    } 
    if (isColliding(checkRect, y1Rect)) {
        container2.classList.add('animated');
        container3.classList.add('animated');
        container4.classList.add('animated');
    } 
    if (isColliding(checkRect, y2Rect)) {
        container2.classList.add('animated');
        container3.classList.add('animated');
        container4.classList.add('animated');
        container4.classList.add('animated');
        discord.classList.add('animated')
    } 
    if (isColliding(checkRect, y3Rect)) {
        container2.classList.add('animated');
        container3.classList.add('animated');
        container4.classList.add('animated');
        container4.classList.add('animated');
        discord.classList.add('animated')
    } 
}
setInterval(checkCollision, 100);

setInterval(() => {
    checkCollision()
}, 1000);

function activHead(className) {
    clearHead();
    let elem = document.querySelector(className);
    if (elem) {
        elem.classList.add('activ-head');
    }
}


function clearHead() {
    const activeElem = document.querySelector(".activ-head");
    
    if (activeElem) {
        activeElem.classList.remove('activ-head');
    }
}

let contFaq = document.querySelectorAll('.cont-faq');

contFaq.forEach(function(element) {
    element.addEventListener('click', function() {
        let pDescription = element.querySelector(".p-description");
        
        let strelca = element.querySelector('.strelca1');

        if (pDescription) {
            pDescription.parentNode.removeChild(pDescription);
            strelca.style.transform = 'rotate(90deg)';
        } else {
            // Если элемента нет, создаем новый
            let newParagraph = document.createElement('p');
            newParagraph.classList.add('p-description');
            newParagraph.style.display = 'block';
            newParagraph.innerHTML = 'Чтобы попасть на сервер: зарегистрируйтесь на<br>сайте, скачайте лаунчер, выберите сервер в<br>списке и нажмите "Играть".';
            
            if (strelca) {
                strelca.style.transform = 'rotate(0deg)';
            }

            element.appendChild(newParagraph);
        }
    });
});

