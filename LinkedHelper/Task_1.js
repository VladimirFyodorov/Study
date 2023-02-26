//// Области видимости, var, let, const. ////
/////////////////////////////////////////////


// let и const имеют блочную видимость - их видимость ограничивается блоком {} или функцией
// причём области видимости ссылаются на внешние окрыжения, поэтому можно видеть внешние переменные из вложенных
// областей, но не обратное

{
  let x = 5;
  const y = 5;

  console.log('Same block: ', x); // 5
  console.log('Same block: ', y); // 5

  {
    console.log('Inner block: ', x); // 5
    console.log('Inner block: ', y); // 5
  }

  (function() {
    console.log('Inside function: ', x); // 5
    console.log('Inside function: ', y); // 5
  })()

}

// console.log('Outside block: ', x); // Error
// console.log('Outside block: ', y); // Error


// Для var область видимости определяется по-другому, так как она не ограничивается блоками, но ограничивается функцями

{
  var x = 5;

  console.log('Same block: ', x); // 5

  {
    console.log('Inner block: ', x); // 5
  }

  (function() {
    console.log('Inside function: ', x); // 5
  })()

}

console.log('Outside block: ', x); // 5 !!!


(function() {
  var y = 5;
  console.log('Decalare VAR inside function: ', y); // 5
})()

// console.log('Outside function: ', y); // Error


// Область видимости для функции - это область в которой она была создана и которая ссылается на внешние области.
// при чём не важно где функция была вызвана


let fn;

{
  fn = function() {
      console.log(y);
  }
}

{
  let y = 10;
  // fn(); // Error
}



