---
title: Sample 8 Topic
keywords: sample
summary: "This is just a sample topic..."
sidebar: product2_sidebar
permalink: p2_sample8.html
folder: product2
---

## ВВЕДЕНИЕ ФОРМУЛ В ЯЧЕЙКИ EXCEL ДЛЯ РАСЧЕТОВ ДАННЫХ

Без формул таблица Excel мало чем отличалась бы от таблиц, созданных в Word. Формулы позволяют выполнять очень сложные вычисления. Как только мы изменяем данные для вычислений, программа тут же пересчитывает результат по формулам.

В отдельных случаях для пересчета формул следует воспользоваться специальным инструментом, но это рассмотрим в отдельном разделе посвященным вычислениям по формулам.

### ЗАПОЛНЕНИЕ ЛИСТОВ EXCEL ФОРМУЛАМИ

Для выполнения вычислений и расчетов следует записать формулу в ячейку Excel. В таблице из предыдущего урока (которая отображена ниже на картинке) необходимо посчитать сумму, надлежащую к выплате учитывая 12% премиальных к ежемесячному окладу. Как в Excel вводить формулы в ячейки для проведения подобных расчетов?

![картинка](/images/s1/img28.PNG)

#### Упражнение 1: 

В ячейке F2 введите следующую формулу следующим образом: =D2+D2*E2. После ввода нажмите «Enter».

#### Упражнение 2: 

В ячейке F2 введите только знак «=». После чего сделайте щелчок по ячейке D2, дальше нажмите «+», потом еще раз щелчок по D2, дальше введите «*», и щелчок по ячейке E2. После нажатия клавиши «Enter» получаем аналогичный результат.

![картинка](/images/s1/img29.PNG)

Существуют и другие способы введения формул, но в данной ситуации достаточно и этих двух вариантов.

При вводе формул можно использовать как большие, так и маленькие латинские буквы. Excel сам их переведет в большие, автоматически.

По умолчанию в ячейках с формулами отображается результат их вычисления. При просмотре сразу не определишь где ячейки с формулами, а где с входящими данными для расчетов. Поэтому иногда удобно использовать комбинацию горячих клавиш CTRL+~ (клавиша ~ находится перед клавишей с единичкой «1») для переключения в режим просмотра формул. Повторное нажатие данной комбинации вернет в режим отображения результатов вычисления формул.

Все формулы пересчитываются динамически. Как только изменяется содержание ячейки с входящими данными для расчетов, формулы автоматически пересчитывают их и сразу выдают новый результат вычислений. Например, если сейчас изменить ежемесячный оклад в ячейке D2 и нажать «Enter», то по адресу E2 сразу появится новый результат.

### КОПИРОВАНИЕ ФОРМУЛ В КОЛОНКУ

В ячейки F3 и F4 введите ту же формулу для расчета выплаты, что находиться в F2, но уже другим эффективным способом копирования.

#### Упражнение 1:

Перейдите в ячейку F3 и нажмите комбинацию клавиш CTRL+D. Таким образом, автоматически скопируется формула, которая находится в ячейке выше (F2). Так Excel позволяет скопировать формулу на весь столбец. Также сделайте и в ячейке F4.

#### Упражнение 2:

Удалите формулы в ячейках F3:F4 (выделите диапазон и нажмите клавишу «delete»). Далее выделите диапазон ячеек F2:F4. И нажмите комбинацию клавиш CTRL+D. Как видите, это еще более эффективный способ заполнить целую колонку ячеек формулой из F2.

#### Упражнение 3: 

Удалите формулы в диапазоне F3:F4. Сделайте активной ячейку F2, переместив на нее курсор. Далее наведите курсор мышки на точку в нижнем правом углу прямоугольного курсора. Курсор мышки изменит свой внешний вид на знак плюс «+». Тогда удерживая левую клавишу мыши, проведите курсор вниз еще на 2 ячейки, так чтобы выделить весь диапазон F2:F4.

![картинка](/images/s1/img30.PNG)
![картинка](/images/s1/img31.PNG)

Как только вы отпустите левую клавишу, формула автоматически скопируется в каждую ячейку.

Каждую формулу в любой ячейке можно прочитать в строке формул.

Формулы можно скопировать еще тремя способами:

* с помощью инструментов на полосе;
* с помощью комбинации горячих клавиш;
* с помощью управления курсором мышки и нажатой клавишей «CTRL».

Эти способы более удобны для определенных ситуаций, которые мы рассмотрим на следующих уроках.

| [<< ЗАПОЛНЕНИЕ ЯЧЕЕК ТЕКСТОМ И ЧИСЛОВЫМИ ЗНАЧЕНИЯМИ](p2_sample7.html) |

| | [СОЗДАНИЕ, РЕДАКТИРОВАНИЕ И ПЕЧАТЬ ПРИМЕЧАНИЙ ЯЧЕЕК >>](p2_sample9.html) |

{% include links.html %}
