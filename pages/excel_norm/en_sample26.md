---
title: Sample 26 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample26.html
folder: excel_norm
---

## ТРЕХМЕРНЫЕ ССЫЛКИ В ФОРМУЛАХ EXCEL

Если в формуле ссылка ссылается на другой лист или другую книгу, то такая ссылка в Excel считается трехмерной.

Чаще всего пользователь Excel использует формулы, которые обрабатывают текущие данные одного и того же листа где находиться сама формула (например, =В32 или =АВ123). Тогда исходные адреса ячеек и формулы лежат в одной плоскости, поэтому их адреса являются двумерными.

Расширение адреса ссылки за границы текущего листа (например, =Лист2!В32), позволяет выступить в трехмерном пространстве ячеек. Рассмотрим конкретные примеры.

### ПРИМЕР ИСПОЛЬЗОВАНИЯ ТРЕХМЕРНЫХ ССЫЛОК В EXCEL

Создайте новую книгу с 4-ма листами: «1 квартал», «Январь», «Февраль», «Март». На каждом листе введите в диапазон A1:A4 одинаковые значения: «Оплата», «Телефон», «Интернет», «Спутниковое ТВ».

![img](/images/img.png)

В ячейках B2:B4 каждого листа месяца введите разные суммы определяющие расходы на конец месяца. Сумам присвойте денежный формат ячеек.

На листе «1 квартал» в диапазон B2:B4 введите трехмерные формулы, которые суммируют суммы каждого месяца соответственно типу расходов. А в ячейке B6 просуммируйте итоговую сумму расходов двумерной формулой.

Вводим трехмерную формулу. 

**Способ 1:**

1. Перейдите на лист «1 квартал» в ячейку B2 и введите знак равно – «=».
    
2. Щелкнув по закладке листа «Январь» вы переместитесь на лист первого месяца. Там же сделайте щелчок левой кнопкой мышки по ячейке B2 и поставьте символ «+» с клавиатуры. В этот момент ссылка в строке формул должна отображаться, так как показано на рисунке:
        ![img](/images/img.png)
    
3. Выполните операцию предыдущего пункта 2 со всеми остальными листами – «Февраль» и «Март» (после марта плюс не нужен), а затем жмите Enter.
    
4. Когда формула будет полностью заполнена нажмите клавишу «Enter».
    
5. Скопируйте формулу из ячейки B2 (первого листа) во все ячейки диапазона B3:B4.

6. А в ячейке B6 просуммируйте все расходы диапазона B2:B4 с помощью обычного сложения: =B2+B3+B4.

Изначально можно ввести трехмерную формулу в ячейку B2 листа «1 квартал» написав все названия листов вручную: =Январь!B2+Февраль!B2+Март!B2.

**Способ 2:** Так же можно использовать в формуле функцию СУММ(). Например, =СУММ(Январь!B2;Февраль!B2;Март!B2).

![img](/images/img.png)

**Способ 3:** Можно использовать сокращенный вариант аргументов функции СУММ() с помощью указания трехмерных диапазонов. Например, =СУММ(Январь:Март!B2). Данный способ показывает, как можно эффективно использовать диапазоны в трехмерных ссылках.

![img](/images/img.png)

Обратите внимание на формулу в ячейке B6 данного рисунка. Пример, =СУММ(Январь:Март!B2:B4).

Все три способа ввода трехмерных формул имеют свои преимущества и недостатки. Например, если у нас мало используется листов и ячеек с небольшим количеством данных в диапазонах, то удобнее использовать 1 способ. А если много листов и большие объемы данных (например, диапазон B2:B527). Тогда рационально использовать способ №3.

### ФУНКЦИЯ ДВССЫЛ В ТРЕХМЕРНЫХ ССЫЛКАХ: ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ

Создайте листы и заполните их данными для всех месяцев одинаково, лишь числовые значения должны отличаться, так как указано на рисунке:

![img](/images/img.png)

На листе «Сумма по месяцам» следует составить таблицу, так чтобы отдельно отображалась сумма доходов и сумма налогов соответствующего месяца.

![img](/images/img.png)

**Внимание!** Названия заголовков столбцов в диапазоне B2:D2 должны совпадать с названиями имен листов. Это даст нам возможность использовать в формуле очень удобную функцию =ДВССЫЛ(), которая конвертирует текст в адрес ссылки.

Символ «&» (конкатенации) соединяет два текста в один. Так же обратите внимание, что параметры функции ссылаются на ячейку B2, которая содержит название месяца и соответственно имя нужного нам листа – «Январь». Текстовое значение ячейки B2 конвертируется в адрес ссылки с помощью функции =ДВССЫЛ() и в результате получаем адрес трехмерной ссылки «Январь!B2:B4».

{% include links.html %}