---
title: Sample 24 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample24.html
folder: excel_norm
---

# ФОРМУЛЫ В EXCEL

## АБСОЛЮТНЫЕ ОТНОСИТЕЛЬНЫЕ АДРЕСА ЯЧЕЕК В ФОРМУЛЕ

Перед началом работы с формулами первое, что нужно изучить – это адресацию ссылок на ячейки. Чтобы уметь правильно обращаться к данным. И только потом уже следует изучать функции.

Если в ячейке введен первый символ знак «=», то все что будет введено дальше, для Excel является одним из параметров:

* формулы;

* ссылки;

* операции вычисления;

* ошибка.

Причину ошибки иногда очень сложно отследить в длинных формулах и тогда их следует прослеживать пошагово.

### АБСОЛЮТНЫЙ АДРЕС ЯЧЕЙКИ

Допустим, нам нужно посчитать стоимость за сутки проживания в отеле Еврозоне. Все цены представлены в валюте евро сконвертируем в рубли по курсу 1 EUR = 74 RUB. Курсы валют изменяются каждый день, поэтому нужно сделать прайс так, чтобы можно было легко и просто вычислить актуальные цены в рублях. Вычислим цены с помощью формул с абсолютными или смешанными адресами ячеек так, чтобы не нужно было изменять в них формулы при каждом изменении курса валют. Изменения будут вноситься только в одну ячейку. Для этого введем формулу: =B2*$D$2 или: =B2*D$2, в ячейку С2 как показано на рисунке:

![img](/images/img.png)

В адресах, которые ссылаются на ячейку D2 следует заблокировать символом ($) номер строки 2. Тогда при автозаполнении ячеек формулы будут иметь один фиксированный параметр. То есть, несколько ячеек будут ссылаться на одну и ту же ячейку. При том нам в данной ситуации, не важно будет ли заблокирован столбец символом ($) или нет. Поэтому здесь можно использовать абсолютную ($D$2) или смешанную(D$2) ссылку.

![img](/images/img.png)

Стоит отметить, что первый множитель у нас имеет относительную ссылку (B2), что позволило нам автоматически подставить правильные параметры формулы относительно каждой ячейки при автозаполнении.

### ГОРЯЧИЕ КЛАВИШИ АБСОЛЮТНОЙ ССЫЛКИ

Чтобы упростить ввод разного типа ссылок в Excel можно воспользоваться горячей клавишей F4, которая при поочередном нажатии работает как переключатель между типами ссылок:

* абсолютный;

* смешанный с фиксированной строкой;

* смешанный с фиксированным столбцом;

* относительный.

Чтобы убедиться, как это удобно работает, сделайте следующее:

1. В любой пустой ячейке введите знак равно (=).

2. Щелкните левой кнопкой мышки по любой дугой ячейке, на которую будет ссылаться исходная ячейка. В строе формул отобразиться ее адрес.

3. Переодически нажимайте клавишу F4 и наблюдайте над тем, как меняется тип ссылки (сначала на абсолютный тип и т.д.).

![img](/images/img.png)

Благодаря формулам программа Excel является сильным и эффективным инструментом, который выполняет сложнейшие вычислительные операции с данными. Excel без формул был бы мертвой таблицей со строками и столбцами разбитой на множество ячеек. Такая таблица способна только форматировать отображение данных. Адресам ссылок можно присваивать имя, но об этом на следующих уроках.

{% include links.html %}