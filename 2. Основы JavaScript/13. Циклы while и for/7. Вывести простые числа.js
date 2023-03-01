let n = 10;
numbers: for (let i = 2; i < n; i++) {
    for (let j = i; j >= 2; j--) {
        if (i%j == 0 && i != j) continue numbers;
    }
    alert(i);
}