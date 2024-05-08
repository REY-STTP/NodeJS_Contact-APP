const validator = require('validator');
const chalk = require('chalk');

//console.log(validator.isEmail('rey.zakaria123@gmail.com'));
//console.log(validator.isMobilePhone('081328733023', 'id-ID'));
//console.log(validator.isNumeric('12345678a'));

//console.log(chalk.italic.bgBlue.black('Hello world!'));
const nama = 'Reyvaldi Zakaria'
const pesan = chalk`{bgBlue.black.bold Hallo}, nama saya {bgGreen.black.italic ${nama}}. Salam kenal bosku.`;
console.log(chalk(pesan));