---
title: Sample 27 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample27.html
folder: excel_norm
---

## ЗАВИСИМОСТЬ ФОРМУЛ В EXCEL И СТРУКТУРА ИХ ВЫЧИСЛЕНИЯ

Большинство формул используют данные с одной или множества ячеек и в пошаговой последовательности выполняется их обработка. Изменение содержания хотя-бы одной ячейки приводит к автоматическому пересчету целой цепочки значений во всех ячейках на всех листах. Иногда это короткие цепочки, а иногда это длинные и сложные формулы. Если результат расчета правильный, то нас не особо интересует структура цепочки формул. Но если результат вычислений является ошибочным или получаем сообщение об ошибке, тогда мы пытаемся проследить всю цепочку, чтобы определить, на каком этапе расчета допущена ошибка. Мы нуждаемся в отладке формул, чтобы шаг за шагом проверить ее работоспособность.

### АНАЛИЗ ФОРМУЛ В EXCEL

Чтобы выполнить отслеживание всех этапов расчета формул, в Excel встроенный специальный инструмент который рассмотрим более детально.

В ячейку B5 введите формулу, которая просто суммирует значения нескольких ячеек (без использования функции СУММ).

![img](/images/img.png)

Теперь проследим все этапы вычисления и содержимое суммирующей формулы:

* Перейдите в ячейку B5, в которой содержится формула.

* Выберите инструмент: «Формулы»-«Зависимости формул»-«Вычислить формулу». Появиться диалоговое окно «Вычисление».
        ![img](/images/img.png)

* В данном окне периодически нажимайте на кнопку «Вычислить», наблюдая за течением расчета в области окна «Вычисление:»

Для анализа следующего инструмента воспользуемся простейшим кредитным калькулятором Excel в качестве примера:

![img](/images/img.png)

Чтобы узнать, как мы получили результат вычисления ежемесячного платежа, перейдите на ячейку B4 и выберите инструмент: «Формулы»-«Зависимости формул»-«Влияющие ячейки».

![img](/images/img.png)

Теперь мы наглядно видим, с какими значениями работает формула ежемесячного платежа. Дальше нам нужно узнать, как сформировались эти значения. Для этого перейдите сначала на ячейку с первым значением – С2 и снова выберите инструмент «Влияющие ячейки».

![img](/images/img.png)

В результате у нас сформировалась графическая схема цепочки вычисления ежемесячного платежа формулами Excel.

_Примечание. Чтобы очистить схему нужно выбрать инструмент «Убрать стрелки»._

**Полезный совет.** Если нажать комбинацию клавиш CTRL+«`» (апостроф над клавишей Tab) или выберите инструмент : «Показать формулы». Тогда мы увидим, что для вычисления ежемесячного платежа мы используем 3 формулы в данном калькуляторе. Они находиться в ячейках: B4, C2, D2.

Такой подход тоже существенно помогает проследить цепочку вычислений. Снова перейдите в обычный режим работы, повторно нажав CTRL+«`».

### КАК УБРАТЬ ФОРМУЛЫ В EXCEL

Теперь рассмотрим, как убрать формулы в Excel, но сохранить значение. Передавая финансовые отчеты фирмы третьим лицам, не всегда хочется показывать способ вычисления результатов. Самым простым решением в данной ситуации – это передача листа, в котором нет формул, а только значения их вычислений.

На листе в ячейках B5 и C2:C5 записанные формулы. Заменим их итоговыми значениями результатов вычислений.

![img](/images/img.png)
![img](/images/ilg.png)

Нажмите комбинацию клавиш CTRL+A (или щелкните в левом верхнем углу на пересечении номеров строк и заголовков столбцов листа), чтобы выделить все содержимое.

Теперь щелкните по выделенному и выберите опцию из контекстного меню «Специальная вставка» (или нажмите комбинацию горячих клавиш CTRL+ALT+V).

![img](/images/img.png)

В появившемся диалоговом окне выберите опцию «значения» и нажмите кнопку ОК.

В результате лист не содержит только значения данных.

{% include links.html %}
