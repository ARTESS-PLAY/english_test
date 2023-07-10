export const clearWord = (word) => {
    word = word.toLowerCase().trim();
    word = word.split('.').join('');
    word = word.split('!').join('');
    word = word.split('?').join('');
    word = word.split(',').join('');
    return word;
};

export const compareWords = (w1, w2) => {
    if (!w1 || !w2 || w1 === '' || w2 === '') {
        return false;
    }

    w1 = clearWord(w1);
    w2 = clearWord(w2);

    return w1 === w2;
};
