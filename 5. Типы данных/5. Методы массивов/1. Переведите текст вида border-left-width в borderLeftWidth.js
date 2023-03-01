function camelize(str) {
    let arr = str.split('-');
    return arr.map((word, index) => index != 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');
}