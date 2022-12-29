const bracketNumber = require('./bracketNumber');

test('All brackets correct (8)', () => {
    expect(bracketNumber('([]{})[]')).toEqual({
        'correct': 8,
        'incorrect': 0
    });
});

test('Two correct, two incorrect', () => {
    expect(bracketNumber('([]]')).toEqual({
        'correct': 2,
        'incorrect': 2
    });
});

test('Long string with numbers', () => {
    expect(bracketNumber('(434534{}){[8768]]908([)]98(0978{0)090()')).toEqual({
        'correct': 8,
        'incorrect': 9
    });
});

test('Nested brackets', () => {
    expect(bracketNumber('({[()}])')).toEqual({
        'correct': 4,
        'incorrect': 4
    });
});

test('Completly incorrect', () => {
    expect(bracketNumber(')))))[[[[[}}}}}{{{{{')).toEqual({
        'correct': 0,
        'incorrect': 20
    });
});