Создайте компонент клавиатуры, используя возможностей модулей CSS Flex и CSS Grid

В этом испытании вам доступна разметка верхнего ряда клавиатуры и вспомогательные классы. Ориентируясь на них, доработайте компонент в соответствии с макетом.

Клавиши
1) По умолчанию, каждая клавиша занимает 2 колонки внутри сетки
2) Текст внутри клавиш должен быть отцентрован по всем осям
3) Расстояние между клавишами: 10px
4) Мнемоники, которые помогут в вёрстке кнопок:
* <: &lt;
* >: &gt;
* ᐊ: &#5130;
* ᐃ: &#5123;
* ᐁ: &#5121;
* ᐅ: &#5125;

Исходя из расположении клавиш в шаблоне вам понадобиться создать дополнительные вспомогательные классы вида span-*

## Подсказки
* Перед началом работы высчитайте оптимальное количество колонок внутри сетки. Размер каждой колонки будет равняться 1fr. Для расчётов проанализируйте первый ряд, который доступен в файле index.html
* Классы p-0, border-none и w-100 помогут сверстать клавиши вверх и вниз