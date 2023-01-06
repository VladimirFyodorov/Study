# Async

## Task #1 - PrintFile
Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.

Примеры:
```
import print from './printer.js';
print('./myfile');
```

## Task #2 - WriteFile

Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбек. Экспортируйте функцию по умолчанию.
```
import write from './writer.js';
 
write('./myfile', 'data', () => {
  console.log('success');
});
```
Подсказки:
* для записи в файл используйте функцию fs.writeFile().