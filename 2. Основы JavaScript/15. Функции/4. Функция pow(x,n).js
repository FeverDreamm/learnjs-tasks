function pow(x, n) {
    if (n >= 1 && n % 1 == 0) {
        return x**n;
    } else {
        return 'Ненатуральные степени не поддерживаются';
    }
}

let a = +prompt('Введите число', '');
let b = +prompt('Введите степень', '');

alert(pow(a, b));
