const result = document.querySelector('#result');
const button = document.querySelector('#button');

function calculateBMI() {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value
    const BMI = Math.round(weight/Math.pow(height, 2));
    return BMI;
}

function createResult() {
    result.textContent = `Ваш индекс массы тела равен: ${calculateBMI()}`;
}

button.addEventListener('click', createResult);

// const height = document.querySelector('#height');
// function calculate(h) {
//     const squaredHeight = Math.pow(h, 2);
//     result.textContent = squaredHeight;

// }

// button.addEventListener('click', calculate);