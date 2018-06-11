---
title: Sample 25 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample25.html
folder: excel_norm
---

## АВТОМАТИЧЕСКИЙ ПЕРЕСЧЕТ ФОРМУЛ В EXCEL И ВРУЧНУЮ

Excel умолчанию пересчитывает все формулы во всех листах всех открытых книг после каждого введения данных. Если лист содержит сотни или тысячи формул автоматический пересчет начинает заметно замедлять процесс работы с программой. Рассмотрим, как можно настроить Excel для повышения его производительности и беспрепятственной работы.

### АВТОМАТИЧЕСКИЙ И РУЧНОЙ ПЕРЕСЧЕТ

Для книги, которая содержит сотни сложных формул можно настроить пересчет по востребованию пользователя. Для этого:

1. Введите формулу на чистый лист (чтобы можно было проверить как работает данный пример).

2. Выберите инструмент: «Формулы»-«Параметры вычислений»-«Вручную».

3. Убедитесь, что теперь после ввода данных в ячейку (например, число 7 вместо 1 в ячейке A2 как на рисунке), формула не пересчитывает результат автоматически. Пока пользователь не нажмет клавишу F9 (или SFIFT+F9).

![img](/images/img.png)
![img](/images/img.png)
![img](/images/img.png)

**Внимание!** Быстрая клавиша F9 – выполняет пересчет во всех формулах книги на всех листах. А Комбинация горячих клавиш SHIFT+F9 – выполняет пересчет только на текущем листе.

Если на листе не содержится множество формул, пересчет которых может тормозить Excel, то нет смысла использовать выше описанный пример. Но на будущее все же стоит знать о такой возможности. Ведь со временем придется сталкиваться со сложными таблицами с множеством формул. Кроме того данная функция может быть включена случайно и нужно знать где ее выключить для стандартного режима работы.

### КАК ОТОБРАЖАТЬ ФОРМУЛУ ЯЧЕЙКЕ EXCEL

В ячейках Excel мы видим только результат вычислений. Сами же формулы можно увидеть в строке формул (по отдельности). Но иногда нам нужно одновременно просмотреть все функции в ячейках (например, чтобы их сравнить и т.п.).

Чтобы наглядно отобразить пример данного урока нам потребуется лист содержащий формулы:

![img](/images/img.png)

Изменим настройки Excel так, чтобы ячейки отображали формулы, а не результат их вычисления.

![img](/images/img.png)

Чтобы добиться данного результата, нужно выбрать инструмент: «Формулы»-«Показать» (в разделе «Зависимости формул»). Чтобы выйти из этого режима нужно выбрать данный инструмент повторно.

Так же можно использовать комбинацию горячих клавиш CTRL+` (над клавишей Tab). Данная комбинация работает в режиме переключателя, то есть повторное нажатие возвращает в обычный режим отображения результатов вычисления в ячейках.

_Примечание. Все выше описанные действия распространяются только на режим отображения ячеек одного листа. То есть на других листах при необходимости потребуется выполнять эти действия повторно._

{% include links.html %}