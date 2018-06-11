---
title: Sample 51 Topic (Product 1)
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: en_sample51.html
folder: excel_norm
---

## СЦЕНАРИИ В EXCEL ПОЗВОЛЯЮТ ПРОГНОЗИРОВАТЬ РЕЗУЛЬТАТ

При работе в Excel часто приходится сталкиваться с большими и сложными отчетами, которые содержат много длинных формул с разными функциями в аргументах. К тому же формулы могут быть трехмерными и могут ссылаться на другие листы или даже книги.

### СОЗДАНИЕ СЦЕНАРИЕВ В EXCEL

Например, при составлении бюджета предприятия нужно учитывать множество показателей. Но чтобы проверить эффективность бюджета следует его проанализировать при различных условиях. Ведь в процессе бюджетирования нас интересует, на сколько будет чувствительна эффективность выделенных финансовых средств при следующих сценариях развития событий влияющих на предприятие:

* банки повысят процентные ставки по кредитам;

* существенно измениться уровень инфляции;

* поднимут налоги и т.п.

Тестировать план бюджета в оригинальном файле крайне не рекомендуется. Создавая новые копии документов для теста можно нарушить адресации во множестве трехмерных ссылок формул и функций. Наиболее рациональное решения для данной ситуации – это использование сценариев Excel.

**Пример сценариев в Excel**

Для примера применения сценариев в практике, будем использовать простые задачи. Допустим нам нужно накопить 13 800$ за 10 лет на банковском депозите с определенной процентной ставкой. Нам нужно узнать какой будем делать ежегодный взнос на депозит. И какая процентная ставка нас устроит для накопления денежных средств.

1. Составьте таблицу так как указано на рисунке:
        ![img](/images/img.png)
        
2. Выделите диапазон ячеек B1:B2 и выберите инструмент: «Данные»-«Работа с данными»-«Анализ что если»-«Диспетчер сценариев».
        ![img](/images/img.png)

3. В диспетчере нажмите на кнопку «Добавить».
        ![img](/images/img.png)

4. В окне «Добавление сценария» укажите имя «Макс.ставка%» и ссылку на диапазон изменяемых ячеек. И нажмите ОК.
        ![img](/images/img.png)

5. Появится окно «Значения ячеек сценария», в нем введите новое значение 7% для ячейки B1, а в B2 не изменяйте как выше указано на рисунке. И нажмите ОК.

6. Повторите выше указанные пункты с 3 по 5. Только на этот раз в 4-ом пункте укажите имя «Макс.взнос»; в 5-том пункте укажите новое значение взноса -1100 для ячейки B2, а B1 оставьте без изменений как ниже на рисунке:
        ![img](/images/img.png)

7. Теперь в диспетчере сценариев нажмите на кнопку отчет.
        ![img](/images/img.png)

8. Ничего не меняя жмем ОК.
        ![img](/images/img.png)

**Готово!!!**

![img](/images/img.png)

Теперь мы получили отчет, по которому можно сравнивать как будут развиваться события при различных возможных сценариях, чтобы заранее предвидеть результат при разных экономических условиях.

{% include links.html %}