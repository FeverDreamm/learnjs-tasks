function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.a = +prompt('a?', 0);
        return this.value += this.a;
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);