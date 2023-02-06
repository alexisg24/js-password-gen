//@ts-check
const crypto = require('crypto').webcrypto;
/**
 * Generate random password
 * @param  {number} length number, default: 8; max: 32
 * @param  {Object} options Options Object: { chars, upperCase?, numbers?, symbols? }
 * @param {boolean} options.chars
 * @param {boolean} [options.upperCase=false]
 * @param {boolean} [options.numbers=false]
 * @param {boolean} [options.symbols=false]
 * @returns  {string} Password String
 */

function generatePassword (length = 8, options){
    const charsObj = {
        chars: 'abcdefghijklmnopqrstuvwxyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '1234567890',
        symbols: '!@#$%^&*()_+~`|}{[]\:;?><,./-=',
    }

    if(Number(length) > 64){
        length = 64;
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