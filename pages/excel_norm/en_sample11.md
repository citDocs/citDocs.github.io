---
title: Sample 11 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample11.html
folder: excel_norm
---

## СТИЛИ ЯЧЕЕК В EXCEL И СРЕДСТВА УПРАВЛЕНИЯ ИМИ

Стили в Excel – это инструмент, который позволяет существенно упростить и ускорить процесс форматирования документа. Стилям форматирования можно дать определение как сохраненные под определенным названием готовых настроек форматов. Их можно легко присвоить одной или множеству ячеек.

### ПРИСВОЕНИЕ СТИЛЕЙ ФОРМАТИРОВАНИЯ ЯЧЕЙКАМ

В каждом стиле определены следующие настройки:

1. Шрифт (тип, размер, цвет и т.п.);

2. Формат отображения чисел; 

3. Границы ячеек;

4. Заливка и узоры;

5. Защита ячеек.

Благодаря стилям все листы легко и быстро отформатировать. А если мы вносим изменение в стиль, то эти изменения автоматически присваиваются всем листам, которые им отформатированы.

В Excel предусмотрена библиотека из готовых тематических стилей, а так же присутствует возможность создавать собственные пользовательские стили.

Чтобы воспользоваться библиотекой встроенных стилей необходимо:

1. Виделите в указанной на рисунке таблице не отформатированную область ячеек, но без заголовка.
        ![img](/images/img.png)

2. Выберите инструмент: «Главная»-«Стили»-«Стили ячейки».
        ![img](/images/img.png)

3. Из выпадающего списка миниатюр предварительного просмотра стиля, выберите понравившейся Вам.

### СОЗДАНИЕ ПОЛЬЗОВАТЕЛЬСКОГО СТИЛЯ ПО ОБРАЗЦУ

Теперь создадим свой пользовательский стиль, но по образцу уже готового:

1. Выделите первую строку таблицы, чтобы отформатировать ее заголовок.

2. Отобразите выпадающий список встроенных стилей и щелкните правой кнопкой мышки по «Заголовок 2». А из контекстного меню выберите опцию «Дублировать».
        ![img](/images/img.png)

3. В диалоговом окне, укажите имя стиля «Новый заголовок» и, не изменяя настроек жмите на кнопку «Формат».
        ![img](/images/img.png)

4. В появившемся окне «Формат ячеек» внесите свои изменения. На вкладке шрифт укажите темно-зеленый цвет. А шрифт измените на «курсив». Далее ОК и снова ОК.

5. Присвойте Ваш стиль на главной панели: «Стили ячейки»-«Пользовательские»-«Новый заголовок».

![img](/images/img.png)

Таким образом, на основе встроенного стиля мы создали дубликат, который изменили под свои потребности.

Можно ли изменять стиль в Excel? В принципе можно было и не создавать дубликат, а в контекстном меню сразу выбрать «Изменить». Все изменения любого встроенного стиля по умолчанию, сохранились бы только в текущей книге. На настройки программы они не влияют. И при создании новой книги библиотека стилей отображается стандартно без изменений.

Можно ли удалить стиль в Excel? Конечно можно, но только в рамках одной книги. Например, как удалить пользовательские стили в Excel?

Выбираем желаемый стиль на главной панели: «Стили ячейки» и в разделе «Пользовательские» щелкаем правой кнопкой мышки. Из появившегося контекстного меню выберем опцию «Удалить». В результате ячейки очистятся от форматов заданных соответствующим стилем.

Точно так же можно удалить стили в Excel встроенные по умолчанию в библиотеке, но данное изменение будет распространяться только на текущую книгу.

### СОЗДАТЬ СТИЛЬ ПО ФОРМАТУ ЯЧЕЙКИ

Но что если нужно создать стиль на основе пользовательского формата ячеек, который задан обычным способом.

1. Задайте пустой ячейке формат с изменением заливки и цвета шрифта.

2. Теперь выделите эту исходную ячейку и выберите инструмент на главной панели: «Стили ячейки»-«Создать стиль ячейки».

3. В окне «Стиль» укажите имя стиля «Как в ячейке1» и нажмите ОК.

Теперь у Вас в разделе стилей «Пользовательские» отображается имя «Как в ячейке1». Принцип понятен.

Все выше описанные стилевые форматы сохраняются в рамках файла текущей книги Excel. Поэтому для дальнейших действий сохраните эту книгу под названием «Урок о стилях.xlsx».

### КОПИРОВАНИЕ СТИЛЯ В ДРУГИЕ КНИГИ

Иногда возникает необходимость использовать текущие стили и в других книгах. Для этого можно просто скопировать их:

1. Создайте новую книгу, в которой будем использовать пользовательский стиль «Как в ячейке1».

2. Откройте книгу «Урок о стилях.xlsx» из сохраненным исходным требуемым нам стилем.

3. Выберите инструмент на главной закладке: «Стили ячейки»-«Объединить». И в окне «Объединение стилей» укажите на нужную нам книгу и ОК.

![img](/images/img.png)

Теперь все пользовательские или измененные форматы из исходной книги скопированы в текущую.

Если Вам нужно будет часто использовать один стиль в разных книгах, тогда есть смысл создать специальную книгу со своими стилями и сохранить ее как шаблон. Это будет значительно удобнее чем каждый раз копировать… А все преимущества шаблонов подробнее рассмотрим на следующих уроках.

Форматирование в Excel – это очень утомительное, но важное задание. Благодаря стилям мы можем существенно ускорить и упростить данный рабочий процесс. Сохраняя при этом точную копию форматов ячеек в разных листах и книгах.

{% include links.html %}