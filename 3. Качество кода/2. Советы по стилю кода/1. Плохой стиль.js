function pow(x, n) { // скобка на другой строке, пробел
  let result = 1; // нет пробелов
  for (let i = 0; i < n;i++) { // пробелы
    result *= x; 
  }
  return result;
}

let x = prompt("x?", ''),
n = prompt("n?",''); // пробелы, точка с запятой
if ( n <= 0) { //скобка, пробелы
  alert(`Степень ${n} не поддерживается, 
  введите целую степень, большую 0`); // длинное предложение
} else { // не на одной строке
  alert( pow(x,n) ); //пробелы, точка с запятой
}