
const liElements = [
   document.querySelector('#li1'),
   document.querySelector('#li2'),
   document.querySelector('#li3')
];

const items = [
   prompt('Первый товар'),
   prompt('Второй товар'),
   prompt('Третий товар')
];

liElements.forEach((li, index) => {
   li.innerHTML = items[index];
   li.addEventListener('click', () => {
       li.innerHTML = 'Деньги списаны гуляй';
       li.classList.add('green')
   });
});