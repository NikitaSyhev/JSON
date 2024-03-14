
// СЕРИАЛИЗАЦИЯ и ПАРСИНГ JSON

//создали объект
const obj = {
    firstName: 'Tom',
    secondName: 'Smith',
    birthday: {
        day: 1,
        month: 1,
        year: 2000,
    },
    speciality: 'software developer',
    //есть проблемы с выводом undefined
    course: undefined,
    subjects: ['math', 'JS', 'OOP'],
}
const arr = [100, 200, 'Hello, world', 400, undefined, 600, false];

//создали объект JSON - он игнорирует поля undefined и методы объекта 
const jsonObj = JSON.stringify(obj, (key, value) => { //функция replacer для передачи undefined - у него 3 перегрузки
    if(value === undefined) {
        return 'undefined';
    } 
    if(key == 'speciality') { //пример, если мы не хотим передавать  speciality то меняем
        return undefined;
    }
    return value;
}, 2); // добавляем сепаратор - разделение нужно  для того, в случае если передаем в файл, где будет смотреть человек

const jsonArr = JSON.stringify(arr, ( key, value) => { //включили реплейсер, чтобы вывести undefined в виде строки
    return value === undefined ? 'undefined' : value;
});

console.log(jsonObj);
console.log(jsonArr);

//парсинг с сервера
const parsedObj = JSON.parse(jsonObj);
const parsedArr = JSON.parse(jsonArr);
console.log(parsedObj);

console.log(parsedArr);



//получаем информацию из JSON файла
import otherJSON from '../JSONS/data.json' assert {type: 'json'}
console.log(otherJSON);
