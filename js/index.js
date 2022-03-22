let list = document.querySelectorAll('.navigation li'); // все li из навигации

function activeLink() {
    list.forEach((item) => // каждый элемент
    item.classList.remove('hovered')); // удаляет класс
    this.classList.add('hovered'); // принимает класс
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink)); // при наведении мышкой или отведении срабатывает функция