function bracketNumber(str) {
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [];
    let correctBrackets = 0;
    let incorrectBrackets = 0;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if ( Object.keys(bracketPairs).includes(element) ) {
            stack.push(element);
        } else if ( Object.values(bracketPairs).includes(element) ) {
            const lastStackElement = stack.pop();
            if (!lastStackElement || bracketPairs[lastStackElement] !== element) {
                incorrectBrackets += 1;
                if (!!lastStackElement) {
                    incorrectBrackets += 1;
                }
            } else {
                correctBrackets += 2;
            }
        }
    }
    incorrectBrackets += stack.length;
    
    return {
        'correct': correctBrackets,
        'incorrect': incorrectBrackets
    };
}

console.log(bracketNumber('(434534{}){[8768]]908([)]98(0978{0)090()'));

module.exports = bracketNumber;