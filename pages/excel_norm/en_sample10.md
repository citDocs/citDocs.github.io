---
title: Форматирование ячеек
keywords: sample
sidebar: en_sidebar
permalink: en_sample10.html
folder: excel_norm
---

## НЕСТАНДАРТНОЕ УСЛОВНОЕ ФОРМАТИРОВАНИЕ ПО ЗНАЧЕНИЮ ЯЧЕЙКИ В EXCEL

Условное форматирование позволяет экспонировать данные, которые соответствуют определенным условиям.

В Excel существует два вида условного форматирования:

1. Присвоение формата ячейкам с помощью нестандартного форматирования.

2. Задание условного формата с помощью специальных инструментов на вкладке «Главная»-«Стили»-«Условное форматирование». 

Рассмотрим оба эти метода в деле и проанализируем, насколько или чем они отличаются.

Все кто связан с торговлей или предоставлением платных услуг используют таблицы Excel подобные как на рисунке ниже. Ведь каждый хочет знать, заработал или потерял после совершения сделки купли/продажи. Обычно формируется отчет, в котором следует найти наименее прибыльные или убыточные операции. Рационально выделить ячейки значения, которых соответствуют определенным условиям.
    ![img](/images/img.png) ![img](/images/img.png)

Для решения данной задачи выделим ячейки со значениями в колонке C и присвоим им условный формат так, чтобы выделить значения которые меньше чем 2. Где в Excel условное форматирование:

1. Выделяем диапазон C2:C5 и выбираем инструмент: «Главная»-«Стили»-«Условное форматирование».

2. В появившемся выпадающем списке выбираем опцию: «Правила выделения ячеек»-«Меньше».

3. В диалоговом окне «меньше» указываем в поле значение 2, а напротив него выбираем из выпадающего списка желаемый формат. Жмем ОК.

«Светло-красная заливка и темно-красный текст» - это формат выделения значений, который предложен по умолчанию. Но из списка можно выбрать другие или решится на последний пункт: «Пользовательский формат». Сразу же появится знакомое нам окно из предыдущих уроков: «Формат ячеек». В нем вы можете задать свой стиль оформления ячейки, который будет отображаться только лишь при соблюдении условия.

Если отчет должен увеличиться, то можно выделить больше ячеек для присвоения условного форматирования. Но целый столбец форматировать условным форматированием не рекомендуется, чтобы не нагружать систему лишними процессами.

### ПРАВИЛА УСЛОВНОГО ФОРМАТИРОВАНИЯ В EXCEL

Теперь будем форматировать с условиями нестандартным способом. Сделаем так, чтобы при определенном условии значение получало не только оформление, но и подпись. Для этого снова выделяем диапазон C2:C5 и вызываем окно «Формат ячеек».
    ![img](/images/img.png) ![img](/images/img.png)

Переходим на вкладку «Число» выбираем опцию «(все форматы)» и в поле «Тип:» указываем следующее значение: _0;[Красный]"убыток"-0_.

Значение формата состоит из двух секций разделенных точкой с запятой. Сначала идет 0 и в этой левой секции можно задавать форматы для чисел равно или больше нуля. Правая секция служит для оформления отрицательных числовых значений.

Пользовательские форматы позволяют использовать от 1-ой до 4-х таких секций:

1. В одной секции форматируются все числа;

2. Две секции оформляют числа больше и меньше чем 0;

3. Три секции разделяют форматы на: I)>0; II)<0; III)=0;

4. Если секций аж 4, тогда последняя определяет стиль отображения текста.

По синтаксису код цвета должен быть первым элементом в любой из секций. Всего по умолчанию доступно 8 цветов:

<span class="ch">[Черный]</span><span class="b">[Белый]</span><span class="g">[Желтый]</span><span class="k">[Красный]</span><span class="f">[Фиолетовый]</span><span class="s">[Синий]</span><span class="gol">[Голубой]</span><span class="z">[Зеленый]</span>

### УСЛОВНОЕ ФОРМАТИРОВАНИЕ ЦВЕТОМ В EXCEL

Для продвинутых пользователей доступен код [ЦВЕТn] где n – это число 1-56. Например [ЦВЕТ50] – это бирюзовый.

Таблица цветов Excel с кодами:
    ![img](/images/img.png)

Теперь в нашем отчете о доходах скроем нулевые значения. Для этого зададим тот же формат, только в конце точка с запятой: 0;[Красный]"убыток"-0; - в конце (;) для открытия третей пустой секции.

Если секция пуста, значит, не отображает значений. То есть таким образом можно оставить и вторую или первую секцию, чтобы скрыть числа больше или меньше чем 0.

Используем больше цветов в нестандартном форматировании. Условия следующие:

* числа >100 в синем цвете;

* числа <=50 в зеленом цвете;

* все остальные – в красном.

В опции (все форматы) пишем следующее значение:

_<center>[Зеленый] [<=50]0;[Синий][>100]0;[Красный]0</center>_
    ![img](/images/img.png)

Как видно на рисунке нестандартное условное форматирование так же обладает широкой функциональностью.

Как упоминалось выше, секция должна начинаться с кода цвета (если нужно задать цвет), а после указываем условие:

* в квадратных скобках, а после способ отображения числа;

* число 0 значит отображение числа стандартным способом.

Для освоения информации по нестандартному форматированию рассмотрим еще, чем отличается использование символов # и 0.

Заполните новый лист как показано на рисунке:
    ![img](/images/img.png)

Во всех ячейках каждой колонки используйте нестандартный формат со значением первой строки.

Мы видим, что символ 0 отображает значение в ячейках как число, а если целых чисел недостаточно отображается просто 0.

Если же мы используем символ #, то при отсутствии целых чисел ничего не отображается.

Символ пробела служит как разделитель на тысячи.

Задача следующая. Нужно отобразить значения нестандартным способом:

* числа должны отображаться в формате «Общий»;

* нули будут скрыты;

* текст должен отображаться красным цветом.

**Решение:** _0; 0;;[Красный]@_
    ![img](/images/img.png)

_Примечание: символ @ - значит отображение любого текста, то есть сам текст указывать не обязательно._

Как видите здесь 4 секции. Третья пустая значит, нули будут скрыты. А если в ячейку будет введен текст, за него отвечает четвертая секция.

| [<< КАК ИЗМЕНИТЬ ФОРМАТ ЯЧУЙКИ В EXCEL БЫСТРО И КАЧЕСТВЕННО](en_sample9.html) |

| | [СТИЛИ ЯЧЕЕК В EXCEL И СРЕДСТВА УПРАВЛЕНИЯ ИМИ >>](en_sample11.html) |

{% include links.html %}
