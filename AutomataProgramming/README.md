## Task #1 - Lexer: getfirstWords
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход текст и возвращает массив состоящий из первых слов каждой строки текста. Пустые строчки должны игнорироваться.

Строки разделяются переводом строки
В любом месте строки может быть сколько угодно пробелов
Текст должен перебираться посимвольно (мы пишем лексер)
```
const text = '  what who   \nhellomy\n hello who are you\n';
const result = solution(text);
// [
//   'what',
//   'hellomy',
//   'hello',
// ];
```
Решение должно быть автоматным

### Подсказки
* Управляющие символы, такие как \t, \n называются словом символы, потому что это одиночные символы. А запись \n всего лишь представление.
