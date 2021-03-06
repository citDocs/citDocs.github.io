---
title: Sample 36 Topic
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: p2_sample36.html
folder: product2
---

## ВЛИЯНИЕ ФОРМАТА ЯЧЕЕК НА РАБОТУ ФУНКЦИИ СУММ

При работе с функцией СУММ() в Excel следует учитывать особенности форматов данных, которые могут влиять на итоговые суммы при вычислениях.

Стоит обратить внимание на поведение самих форматов при работе с разными типами значений. При определенных условиях они могут автоматически изменяться и по-разному.

### ОШИБКИ СУММИРОВАНИЯ ПРИ ТОЧКЕ ВМЕСТО ЗАПЯТОЙ

Заполните ячейки значениями как показано на рисунке (в ячейке B2 точка вместо запятой):

![картинка](/images/img11.png)

Выделите диапазон A1:B3. Потом нажмите на закладке «Главная» инструмент «Сумма» (или нажмите ALT+=), чтобы автоматически просуммировать столбцы по отдельности.

Точка вместо запятой для Excel является текстом по умолчанию. Функция СУММ() пропускает текстовые значения при суммировании ячеек. В результате мы видим разные суммы.

![картинка](/images/img11.png)

Данная ошибка является опасной, особенно когда в таблице много данных. Во-первых, ее легко допустить, а во-вторых трудно заметить. Поэтому Excel в формате по умолчанию «Общий» выравнивает текст по левой стороне, а числа по правой. Если суммы не сходятся, стоит всем ячейкам задать формат «Общий», чтобы найти, где вместо запятой стоит точка. Но есть еще лучший способ.

### КАК НАЙТИ ТЕКСТ В ЧИСЛОВЫХ ЗНАЧЕНИЯХ?

Чтобы быстро найти все ячейки, где точка вместо запятой нужно сделать следующее:

1. Выберите инструмент «Главная»-«Найти и выделить»-«Перейти» (или нажмите комбинацию горячих клавиш CTRL+G).
    ![картинка](/images/img11.png)
  
2. В появившимся окне нажмите на кнопку «Выделить».

3. В окне «Выделение группы ячеек» нужно выбрать опцию «Константы» и отметить галочкой только «Текст». После чего нажать ОК.
    ![картинка](/images/img11.png)

Так программа автоматически выделит все ячейки, которые содержат текстовые значения. Их не нужно искать в больших таблицах и прайсах, чтобы исправить ошибку.

![картинка](/images/img11.png)

Если точек слишком много, можно использовать инструмент «Главная»-«Найти и выделить»-«Заменить» (или комбинация клавиш CTRL+H). Он позволит в Excel заменить точку, на запятую – автоматически.

![картинка](/images/img11.png)

**Внимание.** Если перед поиском текстовых значений выше описанным методом был выделен диапазон, то поиск будет ограничен этим же диапазоном. Поэтому перед поиском точек лучше снять все выделения.

[Вычисление формулы объема и площади >>](p2_sample37.html)

{% include links.html %}