const crypto = require('crypto').webcrypto;

/**
 * Type Def
 * @typedef {object} options
 * @property {boolean} chars
 * @property {boolean?} upperCase
 * @property {boolean?} numbers
 * @property {boolean?} symbols
 */

/**
 * Generate random password
 * @param  {number} length number, default: 8; max: 32
 * @param  {options} options { chars: boolean, upperCase?: boolean, numbers?: boolean, symbols?: boolean }
 * @return  {string} Password String
 */

function generatePassword (length = 8, options){
    const charsObj = {
        chars: 'abcdefghijklmnopqrstuvwxyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '1234567890',
        symbols: '!@#$%^&*()_+~`|}{[]\:;?><,./-=',
    }

    if(Number(length) > 32){
        length = 32;
    }

    let charsForGenerate = '';
    for (const [key, value] of Object.entries(options)) {
            if(value){
                charsForGenerate += charsObj[key]
            }
        }       
   const array = new Uint32Array(length);
    crypto.getRandomValues(array);  
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charsForGenerate[array[i] % charsForGenerate.length]
    }

    return password
 }

 module.exports = generatePassword