const moreBlock = document.getElementById('moreblock');
const showButton = document.getElementById('showButton');
const hideButton = document.getElementById('hideButton');
const ALLAbout = document.getElementById('ALLAbout');

// Обработчики событий
showButton.addEventListener('click', () => {
    if (!moreBlock.classList.contains('show')) { // Проверяем, чтобы не дублировались классы
        moreBlock.classList.remove('hidden');      // Убираем класс hidden, если есть
        moreBlock.classList.add('show');         // Добавляем класс show для анимации появления
        ALLAbout.classList.add('blur'); 
    }
});

hideButton.addEventListener('click', () => {
    if (!moreBlock.classList.contains('hidden')) { // Проверяем, чтобы не дублировались классы
        moreBlock.classList.add('hidden'); 
        ALLAbout.classList.remove('blur');
        setTimeout(() => {
            moreBlock.classList.remove('show');
        }, 500);
    }
});