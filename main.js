const { URL } = require('url');
const date = '20231001';
const time_period = 'q';

const params = {
    date: date,
    period: time_period,
    json: '' 
};

const baseUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/bank';
const bankUrl = new URL(baseUrl);

Object.keys(params).forEach(key => {
    if (params[key] !== '') {
        bankUrl.searchParams.append(key, params[key]);
    }
});

//результат
console.log('URL для запиту до НБУ:');
console.log(bankUrl.toString());

// Для перевірки - виводимо окремі параметри
console.log('\nПараметри запиту:');
bankUrl.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});