---
title: Sample 48 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample48.html
folder: excel_norm
---

# ПОДБОР ПАРАМЕТРА, ПОИСК РЕШЕНИЯ И СЦЕНАРИИ

## УРАВНЕНИЯ И ЗАДАЧИ НА ПОДБОР ПАРАМЕТРА В EXCEL

Часто нам нужно предварительно спрогнозировать, какие будут результаты вычислений при определенных входящих параметрах. Например, если получить кредит на закупку товара в банке с более низкой процентной ставкой, а цену товара немного повысить – существенно ли возрастет прибыль при таких условиях?

При разных поставленных подобных задачах, результаты вычислений могут завесить от одного или нескольких изменяемых условий. В зависимости от типа прогноза в Excel следует использовать соответствующий инструмент для анализа данных.

### ПОДБОР ПАРАМЕТРА И РЕШЕНИЕ УРАВНЕНИЙ В EXCEL

Данный инструмент следует применять для анализа данных с одним неизвестным (или изменяемым) условием. Например:

<center>2**x**+1=7</center>

* **y**=7 является функцией **x**;

* нам известно значение **y**, следует узнать при каком значении **x** мы получим **y** вычисляемый формулой.

Решим данную задачу встроенными вычислительными инструментами Excel для анализа данных:

1. Заполните ячейки листа, так как показано на рисунке:
        ![img](/images/img.png)

2. Перейдите в ячейку B2 и выберите инструмент, где находится подбор параметра в Excel: «Данные»-«Работа с данными»-«Анализ что если»-«Подбор параметра».

3. В появившемся окне заполните поля значениями как показано на рисунке, и нажмите ОК:
        ![img](/images/img.png)

В результате мы получили правильное значение 3.

![img](/images/img.png)

Получили максимально точный результат: 2*3+1=7

### ВТОРОЙ ПРИМЕР ИСПОЛЬЗОВАНИЯ ПОДБОРА ПАРАМЕТРА ДЛЯ УРАВНЕНИЙ

Немного усложним задачу. На этот раз формула выглядит следующим образом:

**x**<sub>2</sub>=4

**Решение:**

1. Заполните ячейку B2 формулой как показано на рисунке:
        ![img](/images/img.png)

2. Выберите встроенный инструмент: «Данные»-«Работа с данными»-«Анализ что если»-«Подбор параметра» и снова заполните его параметрами как на рисунке (в этот раз значение 4):
        ![img](/images/img.png)
 
3. Сравните 2 результата вычисления:
        ![img](/images/img.png)

**Обратите внимание!** В первом примере мы получили максимально точный результат, а во втором – максимально приближенный.

Это простые примеры быстрого поиска решений формул с помощью Excel. Сегодня каждый школьник знает, как найти значение x. Например:

<center>x=(7-1)/2</center>

Excel в своих алгоритмах инструментов анализа данных использует более простой метод – подстановки. Он подставляет вместо x разные значения и анализирует, насколько результат вычислений отклоняется от условий указанных в параметрах инструмента. Как только будет, достигнут результат вычисления с максимальной точностью, процесс подстановки прекращается.

По умолчанию инструмент выполняет 100 повторений (итераций) с точностью 0.001. Если нужно увеличить количество повторений или повысить точность вычисления измените настройки: «Файл»-«Параметры»-«Формулы»-«Параметры вычислений»:

![img](/images/img.png)

Таким образом, если нас не устраивает результат вычислений, можно:

1. Увеличить в настройках параметр предельного числа итераций.

2. Изменить относительную погрешность.

3. В ячейке переменной (как во втором примере, A3) ввести приблизительное значение для быстрого поиска решения. Если же ячейка будет пуста, то Excel начнет с любого числа (рандомно).

Используя эти способы настроек можно существенно облегчить и ускорить процесс поиска максимально точного решения.

О **подборе нескольких параметров** в Excel узнаем из примеров следующего урока.

{% include links.html %}