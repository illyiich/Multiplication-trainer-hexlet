const getRandomInRange = (min = 1, max = 9) => { // Генератор случайных чисел
    return Math.floor(min + Math.random() * (max - min + 1));
};

const template = document.querySelector('.template'); // Команда для поиска по CSS-селектору, в данном случае найдёт 1-й эл-т с классом template и сохраняет ссылку на него в переменной template.
// Это поле параграфа будет менять программно
const button = document.querySelector('.check'); // Нашли кнопку, с помощью этого добавили обработчик событий button.addEventListener на клик 

// console.log(getRandomInRange()) // Вызов функции в консоли 

let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

template.textContent = `${firstNumber} * ${secondNumber}` // вставляем в  <p class="template"> случайные числа

button.addEventListener('click', () => { // Обработка нажатия кнопки 
    const result = firstNumber * secondNumber; // Работаем с существующими переменными, поэтому const, а не let
    const userNumber = Number(input.value); // Число, которое ввёл пользователь, поле ввода лежит в переменной input, 
    // достаём из неё значение value (по умолчанию - строковое), преобразовали value в число
    
    // let — исп-ся только если переменная будет менять значение (например, счётчики в циклах).
    
    if (result === userNumber) {
        firstNumber = getRandomInRange(); // Поменяем пример
        secondNumber = getRandomInRange(); 
        template.textContent = `${firstNumber} * ${secondNumber}`
    }
    else {
        alert(`Ошибка! Правильный ответ: ${result}. Попробуйте ещё раз!`);
    }

    input.value = ''; // Очищаем поле ввода
    input.focus(); // вохвращаем курсор в поле ввода
})  


