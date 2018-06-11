---
title: Sample 18 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample18.html
folder: excel_norm
---

## ПРОВЕРКА ВВОДА ДАННЫХ В EXCEL И ЕЕ ОСОБЕННОСТИ

Иногда возникает необходимость перестраховаться от ошибок перед вводом в ячейки данных несоответствующим определенным условиям. Например, в номенклатуре магазина товаров и цен недолжно быть возможности ввода отрицательных чисел и нулей. Ведь магазин не раздает товар с доплатой или за бесплатно.

### ПРОВЕРКА ВВОДИМЫХ ДАННЫХ В EXCEL

Для того, чтобы предотвратить ошибки оператора компьютерного набора в Excel, будем использовать проверку данных ввода. Тем самым создадим ему комфортные условия для рутинной работы, где сложно не допустить ошибки.

У нас имеется лист номенклатуры товаров магазина:

![img](/images/img.png)

1. Выделите столбец B и выберите инструмент «Данные»-«Проверка данных».
        ![img](/images/img.png)

2. Заполняем значениями поля на вкладке «Параметры» как показано на рисунке:
        ![img](/images/img.png)

3. На вкладке «Сообщение для ввода» создаем особое примечание, в котором при помещения курсора на ячейку будет отображаться условия для ее заполнения. И жмем ОК.
        ![img](/images/img.png)

<ins>Теперь проверим.</ins> В ячейку B2 введите натуральное число, а в ячейку B3 отрицательное. Как видно в ячейке B3 действие оператора набора – заблокировано. Отображается сообщение об ошибке: «Введенное значение неверно».

_Примечание. При желании можно написать собственный текст для ошибки на третей закладке настроек инструмента «Сообщение об ошибке»._

Чтобы удалить проверку данных в Excel нужно: выделить соответствующий диапазон ячеек, выбрать инструмент и нажать на кнопку «Очистить все» (указано на втором рисунке).

### ОСОБЕННОСТИ ПРОВЕРКИ ДАННЫХ

Данным способом проверяются данные только в процессе ввода. Если данные уже введенные они будут не проверенные. Например, в столбце B нельзя ввести текст после установки условий заполнения в нем ячеек. Но заголовок в ячейке B1 «Цена» остался без предупреждения об ошибке.

**Внимание!** Если ячейки будут скопированы, а не введены то их значения так же не будут проверены.

Чтобы проверить соответствуют ли все введенные данные, определенным условиям в столбце и нет ли там ошибок, следует использовать другой инструмент: «Данные»-«Проверка данных»-«Обвести неверные данные».

![img](/images/img.png)

Если значения в столбце B должны соответствовать определенным условиям, но содержат ошибки, то все они будут обведены красным овалом. Этот инструмент очень удобно использовать, когда нужно проверить уже введенные или скопированные данные.

Конечно, можно выполнить проверку данных в столбце с помощью логической функции Excel – «ЕСЛИ». Или условное форматирование. Но применение инструмента «Проверка данных» – более эффективно, удобно и продуктивно для данной задачи. Особенно если нам нужно одновременно выполнить проверку по нескольким столбцам. В таком случаи более заметна рациональность его использования.

{% include links.html %}