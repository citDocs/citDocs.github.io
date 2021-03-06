---
title: Работа с таблицами
keywords: sample
sidebar: en_sidebar
permalink: en_sample22.html
folder: excel_norm
---

## ВОЗМОЖНОСТИ УМНОЙ ТАБЛИЦЫ EXCEL В НОВЫХ ВЕРСИЯХ

Возможности электронных таблиц Excel в новых версиях существенно выросли. Рассмотрим преимущества авто-таблиц в действии.

### ОСНОВНЫЕ ВОЗМОЖНОСТИ ТАБЛИЦ

На листе доходов и расходов отделов фирмы в разных городах записаны в одной таблице. В столбце D следует посчитать прибыль по отделам, а под таблицей нужно просуммировать все доходы и расходы.
        ![img](/images/img.png)

Очень приятным и полезным свойством таблицы является автоматическое заполнение целого столбца формулами, которые достаточно ввести только в одну ячейку. Вторым полезным свойством является функциональная строка итогов.

1. В ячейку D1 введите заголовок прибыль и в таблице автоматически добавиться еще один столбец.

2. В D2 введите формулу: =B2-C2. После ввода формула будет автоматически скопирована в каждую ячейку столбца «Прибыль».
        ![img](/images/img.png)

3. Перейдите на любую ячейку в диапазоне таблицы выберите опцию: «Работа с таблицами»-«Строка итогов» или нажмите комбинацию горячих клавиш CTRL+SHIFT+T.
        ![img](/images/img.png)

К таблице добавилась функциональная строка итогов.

Как видно на рисунке Excel одновременно выполнил 2 операции:

1. Автоматически добавлено и заполнил новый столбец «Прибыль»;

2. Подключено многофункциональную итоговую строку, которая предоставила много вычислительных возможностей для каждого столбца.
        ![img](/images/img.png)

Теперь достаточно перейти в ячейку B8, чтобы раскрыть выпадающий список и выбрать опцию «Сумма». Потом следует сделать так же в ячейке C8.

### ВОЗМОЖНОСТИ ОБРАБОТКИ ДАННЫХ ТАБЛИЦЫ EXCEL

По умолчанию Excel добавляет суммирование в строке итогов для последнего столбца.

В строке суммирования используется функция =ПРОМЕЖУТОЧНЫЕ.ИТОГИ(), вместо привычной =СУММ().

В аргументах функций используются внутренние адреса таблицы определенных заголовком таблицы: =ПРОМЕЖУТОЧНЫЕ.ИТОГИ(109;[Прибыль]) вместо D2:D7.

Если в выпадающем списке строки итогов выбрать вместо опции «Сумма» другую опцию: «Количество», «Максимум» и т.п., то Excel будет использовать ту же самую функцию, изменив только один параметр – число 109 на: 103, 104 и т.п. (от 101 до 111).
        ![img](/images/img.png)

Стоит отметить, что числовые параметры 101-111 не включают при вычислении значения в скрытых строках, а параметры от 1-11 включают все значения даже в скрытых строках.

| [<< СТИЛИ ТАБЛИЦ ДЛЯ АВТОМАТИЧЕСКОГО ФОРМАТИРОВАНИЯ ДИАПАЗОНОВ ЯЧЕЕК](en_sample21.html) |

| | [УДАЛЕНИЕ ДУБЛИКАТОВ С ПОМОЩЬЮ ТАБЛИЦ >>](en_sample23.html) |

{% include links.html %}