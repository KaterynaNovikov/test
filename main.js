//Завдання 1
const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

function countLetterInString(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRowWithMoreLetters(firstRow, secondRow, letter) {
    const firstRowCount = countLetterInString(firstRow, letter);
    const secondRowCount = countLetterInString(secondRow, letter);
    
    if (firstRowCount > secondRowCount) {
        return firstRow;
    } else {
        return secondRow;
    }
}

const letterToCount = prompt('Яку літеру порахувати?');
const result1 = getRowWithMoreLetters(firstRow, secondRow, letterToCount);
document.getElementById('task1-result').textContent = `Рядок з більшою кількістю літер "${letterToCount}": ${result1}`;

// Завдання 2
function formattedPhone(phone) {
    phone = phone.replace(/[^\d]/g, ''); 

    if (phone.length === 12 && phone.startsWith('38')) {
        phone = '+' + phone;
    } else if (phone.length === 11 && phone.startsWith('8')) {
        phone = '+38' + phone.substring(1);
    } else if (phone.length === 10) {
        phone = '+38' + phone;
    } else {
        return 'Невірний формат номера телефону';
    }

    return `${phone.slice(0, 3)} (${phone.slice(3, 6)}) ${phone.slice(6, 9)}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`;
}

const phoneInput = prompt('Введіть номер телефону');
const result2 = formattedPhone(phoneInput);
document.getElementById('task2-result').textContent = `Відформатований номер телефону: ${result2}`;
