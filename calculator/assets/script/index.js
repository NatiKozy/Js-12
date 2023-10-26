const result = document.querySelector('#result');
const button = document.querySelector('#button');

const calculateBMI = () => {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value
    const BMI = Math.round(weight/Math.pow(height, 2));
    return BMI;
}

const createResult = () => {
    result.textContent = `Ваш индекс массы тела равен: ${calculateBMI()}`;
}

button.addEventListener('click', createResult);
