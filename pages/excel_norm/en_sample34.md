---
title: Имена диапазонов ячеек
keywords: sample
sidebar: en_sidebar
permalink: en_sample34.html
folder: excel_norm
---

## ИМЕНА ДИАПАЗОНОВ С ОТНОСИТЕЛЬНЫМ АДРЕСОМ ССЫЛКИ

По умолчанию Excel автоматически присваивает именам диапазоны ячеек с абсолютным адресом ссылки. Такие имена наиболее часто используются в процессе работы. Но иногда нужно присвоить относительный адрес ссылки для имени.

### ПРИМЕРЫ ИМЕН С ОТНОСИТЕЛЬНЫМИ

Имея прибыль в отдельных месяцах, посчитаем суммарную прибыль за квартал. Для этой задачи можно сложить значения выбранных ячеек, но значительно удобнее использовать имя с относительной адресацией.

1. Составьте отчет, так как показано ниже на рисунке и перейдите в ячейку C4.

2. Выберите инструмент: «Формулы»-«Определенные имена»-«Присвоить имя».
        ![img](/images/img.png)
    
3. В диалоговом окне: «Создание имени» введите в поле «Имя:» его название «квартал», а в поле «Диапазон:» вводим относительные адрес диапазона охватывающего прибыли трех месяцев первого квартала. Опцию в выпадающем списке «Область:» установите на свое усмотрение. С данным параметром вы знакомы из предыдущего урока: **Область видимости имени на листе Excel.**
    
4. Напротив последнего месяца первого квартала (ячейка C4) введите формулу: =СУММ(квартал). Скопируйте ее во все ячейки напротив последних месяцев каждого квартала: C7, C10 и C13.
        ![img](/images/img.png)

_Примечание. Чтобы быстро и удобно изменить тип адреса в ссылках (с абсолютного на относительный), используйте клавишу F4._

### ПРИСВОИТЬ ИМЯ ФУНКЦИИ В EXCEL

Имена в Excel можно присваивать не только диапазонам ячеек и значениям, но так же и формулам. Имя, присвоенное формуле с относительным адресом ссылки, можно использовать как функцию.

1. Создайте книгу Excel с отчетами так как показано на рисунке:
        ![img](/images/img.png)
    
2. Перейдите в ячейку B6 и выберите инструмент: : «Формулы»-«Присвоить имя».

3. Заполните диалоговое окно так как показано на рисунке. Обратите внимание на то, что в поле «Диапазон» указана функция с относительными ссылками на диапазон. А в параметре «Область» обязательно указан текущий лист «2008».
    
4. В ячейки B6, C6 и D6 введите значение: =итого.

5. Скопируйте лист «2008», назвав новые копии листов: «2009» и «2010». И откройте «Формулы»-«Диспетчер имен».
        ![img](/images/img.png)

Как видно в диспетчере имен при копировании листов для них автоматически создались имена «итого».

| [<< ОБЛАСТЬ ВИДИМОСТИ ИМЕНИ НА ЛИСТЕ](en_sample33.html) |

| | [АВТОМАТИЧЕСКИ ИЗМЕНЯЕМЫЕ ДИАПАЗОНЫ ЯЧЕЕК >>](en_sample35.html) |

{% include links.html %}