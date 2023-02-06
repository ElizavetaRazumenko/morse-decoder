const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i = i + 10) {
        arr.push(expr.substr(i, 10));
    }
    let resArray = [];
    let morse = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '**********') {
            resArray.push(' ');
        } else {
          morse = '';
            for (let j = 0; j < arr[i].length; j = j + 2) {
                if (arr[i][j] + arr[i][j + 1] === '10') {
                    morse += '.';
                }
                if (arr[i][j] + arr[i][j + 1] === '11') {
                    morse += '-';
                }
                if (arr[i][j] + arr[i][j + 1] === '00') {
                    morse += '';
                }
            } resArray.push(MORSE_TABLE[morse]);
            
        } 

    } return resArray.join('');
}

module.exports = {
    decode
}