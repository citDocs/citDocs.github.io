---
title: Имена диапазонов ячеек
keywords: sample
sidebar: en_sidebar
permalink: en_sample35.html
folder: excel_norm
---

## АВТОМАТИЧЕСКИ ИЗМЕНЯЕМЫЕ ДИАПАЗОНЫ ЯЧЕЕК В EXCEL

В процессе работы с данными в Excel иногда заранее не известно, сколько данных будет собрано в той или иной таблице. Поэтому мы не всегда можем заранее знать какой диапазон должно охватывать имя. Ведь количество данных может изменяться. Для решения данной задачи следует автоматически изменить именованный диапазон используемых ячеек, в зависимости от количества введенных данных.

### КАК В EXCEL СДЕЛАТЬ АВТОМАТИЧЕСКОЕ ИЗМЕНЕНИЕ ДИАПАЗОНА

Допустим, у нас есть объект инвестирования, по которому мы хотим знать суммарную прибыль за весь период его использования. Заранее мы не можем определить период использования инвестиционного объекта. Но нам нужно постоянно следить за общим доходом, который приносит нам данный объект инвестирования.

Сформируйте отчет по доходности нашего объекта инвестирования, так как показано на рисунке:
        ![img](/images/img.png)

Данную задачу можно было бы решить путем суммирования целого столбца B и после появления в нем записей общая сумма изменялась бы автоматически. Но это некорректный способ решения задач в Excel. Во-первых, нам нельзя будет использовать ячейки столбца B для ввода других данных. Во-вторых, так функция суммирования будет нерационально потреблять больше памяти. Это может привести к серьезным проблемам при работе с документом. Самым рациональным решением является использование динамических имен.

1. Выберите инструмент «Формулы»-«Определенные имена»-«Присвоить имя».

2. Заполните поля диалогового окна «Создание имени» как на рисунке. Обратите внимание на то, что в поле «Диапазон:» мы используем функцию =СМЕЩ, а в одном из ее параметров используем функцию =СЧЕТ. Пример: =СМЕЩ(Лист1!$B$2;0;0;СЧЁТ(Лист1!$B:$B);1)
        ![img](/images/img.png)
  
3. Переместите курсор в ячейку D2 и введите функцию =СУММ с именем «доход» в ее параметрах.
        ![img](/images/img.png)

Теперь постепенно заполняя ячейки в столбце B, мы можем проследить, как изменяется охват ячеек именем «доход».

### ФУНКЦИЯ СМЕЩ В EXCEL

Разберем более детально функции, которые мы вводили в поле диапазон при создании динамического имени.

Функция =СМЕЩ определяет наш диапазон в зависимости от количества заполненных ячеек в столбце B. 5 параметров функции =СМЕЩ(начальная ячейка, смещение размера диапазона по строкам, смещение по столбцам, размер диапазона в высоту,; размер диапазона в ширину):
        ![img](/images/img.png)

1. «Начальная ячейка» – указывает верхнюю левую ячейку, от которой будет динамически расширяться диапазон как вниз, так и вправо (при необходимости);
   
2. «Смещение по строкам» – параметр определяет, на какое количество нужно смещать диапазон по вертикали от начальной ячейки (первого параметра). Значения могут быть нулевыми и отрицательными;
 
3. «Смещение по столбцам» – параметр определяет, на какое количество нужно смещать по горизонтали от начальной ячейки. Значения могут быть даже нулевыми и отрицательными;
 
4. «Размер диапазона в высоту» – количество ячеек, на которое нужно увеличить диапазон в высоту. По сути, название говорит само за себя;

5. «Размер диапазона в ширину» – количество ячеек, на которое нужно увеличить в ширину от начальной ячейки.

Последние 2 параметра функции являются необязательными. Если их не заполнять, то диапазон будет состоять из 1-ой ячейки. Например: =СМЕЩ(A1;0;0) – это просто ячейка A1, а параметр =СМЕЩ(A1;2;0) ссылается на A3.

Теперь разберем функцию: =СЧЕТ, которую мы указывали в 4-ом параметре функции: =СМЕЩ.

### ЧТО ОПРЕДЕЛЯЕТ ФУНКЦИЯ СЧЕТ

![img](/images/img.png)

Функция =СЧЕТ($B:$B) автоматически считает количество заполненных ячеек в столбце B.

Таким образом, мы с помощью функции =СЧЕТ() и =СМЕЩ() автоматизируем процесс формирования диапазона для имени «доход», что делает его динамическим. Теперь еще раз посмотрим на нашу формулу, которой мы присвоили имя «доход»: =СМЕЩ(Лист1!$B$2;0;0;СЧЁТ(Лист1!$B:$B);1)

Читать данную формулу следует так: первый параметры указывает на то, что наш автоматически изменяемый диапазон начинается в ячейке B2. Следующие два параметра имеют значения 0;0 – это значит, что динамический диапазон не смещается относительно начальной ячейки B2. А увеличивается только его размер по вертикали, о чем свидетельствует 4-тый параметр. В нем находится функция СЧЕТ и она возвращает число равное количеству заполненных ячеек в столбце B. Соответственно количество ячеек по вертикали в диапазоне будет равно числу, которое нам даст функция СЧЕТ. А за ширину диапазона у нас отвечает последний 5-тый параметр, где находиться число 1.

Благодаря функции СЧЕТ мы рационально загружаем в память только заполненные ячейки из столбца B, а не весь столбец целиком. Данный факт исключает возможные ошибки связанные с памятью при работе с данным документом.

### ДИНАМИЧЕСКИЕ ДИАГРАММЫ В EXCEL

У нас есть динамическое имя, теперь создадим динамическую диаграмму для данного типа отчета:

1. Выделите диапазон B2:B6 и выберите инструмент: «Вставка»-«Диаграммы»-«Гистограмма»-«Гистограмма с группировкой».

2. Щелкните левой кнопкой мышки по любому столбцу гистограммы и в строке формул отобразится функция диаграммы: =РЯД().
        ![img](/images/img.png)
 
3. В строке формул измените параметры функции: =РЯД(Лист1!$B$1;;Лист1!$B$2:$B$7;1) на =РЯД(Лист1!$B$1;;Лист1!доход;1).

4. В отчет добавьте новую запись в ячейки A8 - «июль», B8 - «77000» соответственно. И убедитесь, что на диаграмме автоматически добавился новый столбец.
        ![img](/images/img.png)

Используя наше динамическое имя «доход» нам удалось создать автоматически изменяемую динамическую диаграмму, которая сама добавляет и отображает новые данные в отчете.

| [<< ИМЕНА С ДИАПАЗОНОВ С ОТНОСИТЕЛЬНЫМ АДРЕСОМ ССЫЛКИ](en_sample34.html) |

| | [ИЗМЕНЯЕМЫЕ ДИАПАЗОНЫ И ФУНКЦИЯ ПРОМЕЖУТОЧНЫЕ ИТОГИ >>](en_sample36.html) |

{% include links.html %}