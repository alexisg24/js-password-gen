const crypto = require('crypto').webcrypto;

//Options args { chars: boolean, upperCase: boolean, numbers: boolean, symbols: boolean}
function generatePassword (length = 8, options){
    const charsObj = {
        chars: 'abcdefghijklmnopqrstuvwxyz',
        upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '1234567890',
        symbols: '!@#$%^&*()_+~`|}{[]\:;?><,./-=',
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

 
 generatePassword(16, { chars: true, upperCase: true, numbers: true, symbols: true})

 module.exports = generatePassword