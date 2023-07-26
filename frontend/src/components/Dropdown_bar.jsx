import React, { useState } from "react";
import Select from 'react-select';
import axios from "axios";

function DropdownBar() {
  const options_of_options = [
    { value: "Отчёт по метеостанции", label: "Отчёт по метеостанции" },
    { value: "Отчёт по широте", label: "Отчёт по широте" },
  ]
  const options = [
    { value: "Абакан", label: "Абакан" },
    { value: "Агата", label: "Агата" },
    { value: "Агзу", label: "Агзу" },
    { value: "Агинское", label: "Агинское" },
    { value: "Ай-Петри", label: "Ай-Петри" },
    { value: "Акша", label: "Акша" },
    { value: "Алдан", label: "Алдан" },
    { value: "Алейск", label: "Алейск" },
    { value: "Александров Гай", label: "Александров Гай" },
    { value: "Александровский Завод", label: "Александровский Завод" },
    { value: "Александровское", label: "Александровское" },
    { value: "Александровск-Сахалинский", label: "Александровск-Сахалинский" },
    { value: "Алыгджер", label: "Алыгджер" },
    { value: "Амга", label: "Амга" },
    { value: "Анадырь", label: "Анадырь" },
    { value: "Анучино", label: "Анучино" },
    { value: "Апука", label: "Апука" },
    { value: "Арзамас", label: "Арзамас" },
    { value: "Арзгир", label: "Арзгир" },
    { value: "Архангельск", label: "Архангельск" },
    { value: "Архара", label: "Архара" },
    { value: "Астраханка", label: "Астраханка" },
    { value: "Астрахань", label: "Астрахань" },
    { value: "Ачинск", label: "Ачинск" },
    { value: "Аян", label: "Аян" },
    { value: "Бабаево", label: "Бабаево" },
    { value: "Бабушкин", label: "Бабушкин" },
    { value: "Багдарин", label: "Багдарин" },
    { value: "Байдуков", label: "Байдуков" },
    { value: "Байкальск", label: "Байкальск" },
    { value: "Байкит", label: "Байкит" },
    { value: "Балашов", label: "Балашов" },
    { value: "Барабинск", label: "Барабинск" },
    { value: "Баргузин", label: "Баргузин" },
    { value: "Барнаул", label: "Барнаул" },
    { value: "Батамай", label: "Батамай" },
    { value: "Бежецк", label: "Бежецк" },
    { value: "Белгород", label: "Белгород" },
    { value: "Белогорск", label: "Белогорск" },
    { value: "Белорецк", label: "Белорецк" },
    { value: "Бердигястях", label: "Бердигястях" },
    { value: "Березово (ХМАО)", label: "Березово (ХМАО)" },
    { value: "Березово (Чукотский АО)", label: "Березово (Чукотский АО)" },
    { value: "Бийск", label: "Бийск" },
    { value: "Бикин", label: "Бикин" },
    { value: "Биробиджан", label: "Биробиджан" },
    { value: "Бисер", label: "Бисер" },
    { value: "Благовещенск", label: "Благовещенск" },
    { value: "Богополь", label: "Богополь" },
    { value: "Боготол", label: "Боготол" },
    { value: "Богучаны", label: "Богучаны" },
    { value: "Бодайбо", label: "Бодайбо" },
    { value: "Болотное", label: "Болотное" },
    { value: "Большерецк", label: "Большерецк" },
    { value: "Бомнак", label: "Бомнак" },
    { value: "Борзя", label: "Борзя" },
    { value: "Боровичи", label: "Боровичи" },
    { value: "Братолюбовка", label: "Братолюбовка" },
    { value: "Братск", label: "Братск" },
    { value: "Брохово", label: "Брохово" },
    { value: "Брянск", label: "Брянск" },
    { value: "Бугульма", label: "Бугульма" },
    { value: "Буяга", label: "Буяга" },
    { value: "Бысса", label: "Бысса" },
    { value: "Вайда-Губа", label: "Вайда-Губа" },
    { value: "Ванавара", label: "Ванавара" },
    { value: "Варандей", label: "Варандей" },
    { value: "Великие Луки", label: "Великие Луки" },
    { value: "Великий Новгород", label: "Великий Новгород" },
    { value: "Вельмо", label: "Вельмо" },
    { value: "Вендинга", label: "Вендинга" },
    { value: "Верхнеимбатск", label: "Верхнеимбатск" },
    { value: "Верхне-Марково", label: "Верхне-Марково" },
    { value: "Верхнеуральск", label: "Верхнеуральск" },
    { value: "Верхний Баскунчак", label: "Верхний Баскунчак" },
    { value: "Верхняя Гутара", label: "Верхняя Гутара" },
    { value: "Верхотурье", label: "Верхотурье" },
    { value: "Верхоянск", label: "Верхоянск" },
    { value: "Вилюйск", label: "Вилюйск" },
    { value: "Витим", label: "Витим" },
    { value: "Владивосток", label: "Владивосток" },
    { value: "Владикавказ", label: "Владикавказ" },
    { value: "Владимир", label: "Владимир" },
    { value: "Волгоград", label: "Волгоград" },
    { value: "Вологда", label: "Вологда" },
    { value: "Волочанка", label: "Волочанка" },
    { value: "Воркута", label: "Воркута" },
    { value: "Воронеж", label: "Воронеж" },
    { value: "Выборг", label: "Выборг" },
    { value: "Выкса", label: "Выкса" },
    { value: "Вытегра", label: "Вытегра" },
    { value: "Вяземский", label: "Вяземский" },
    { value: "Вязьма", label: "Вязьма" },
    { value: "Гвасюги", label: "Гвасюги" },
    { value: "Гигант", label: "Гигант" },
    { value: "Глазов", label: "Глазов" },
    { value: "Грозный", label: "Грозный" },
    { value: "Дальнереченск", label: "Дальнереченск" },
    { value: "Дарасун", label: "Дарасун" },
    { value: "Демьянское", label: "Демьянское" },
    { value: "Дербент", label: "Дербент" },
    { value: "Джалинда", label: "Джалинда" },
    { value: "Джаорэ", label: "Джаорэ" },
    { value: "Джарджан", label: "Джарджан" },
    { value: "Джикимда", label: "Джикимда" },
    { value: "Диксон", label: "Диксон" },
    { value: "Дмитров", label: "Дмитров" },
    { value: "Долинск", label: "Долинск" },
    { value: "Дуван", label: "Дуван" },
    { value: "Дудинка", label: "Дудинка" },
    { value: "Екатеринбург", label: "Екатеринбург" },
    { value: "Екатерино-Никольское", label: "Екатерино-Никольское" },
    { value: "Елабуга", label: "Елабуга" },
    { value: "Емецк", label: "Емецк" },
    { value: "Енисейск", label: "Енисейск" },
    { value: "Ербогачен", label: "Ербогачен" },
    { value: "Ерофей Павлович", label: "Ерофей Павлович" },
    { value: "Ершово", label: "Ершово" },
    { value: "Жигалово", label: "Жигалово" },
    { value: "Жиганск", label: "Жиганск" },
    { value: "Завитинск", label: "Завитинск" },
    { value: "Земетчино", label: "Земетчино" },
    { value: "Зея", label: "Зея" },
    { value: "Зима", label: "Зима" },
    { value: "Змеиногорск", label: "Змеиногорск" },
    { value: "Зырянка", label: "Зырянка" },
    { value: "Иваново", label: "Иваново" },
    { value: "Ивдель", label: "Ивдель" },
    { value: "Игарка", label: "Игарка" },
    { value: "Ижевск", label: "Ижевск" },
    { value: "Ика", label: "Ика" },
    { value: "Им. Полины Осипенко", label: "Им. Полины Осипенко" },
    { value: "Индига", label: "Индига" },
    { value: "Йошкар-Ола", label: "Йошкар-Ола" },
    { value: "Иркутск", label: "Иркутск" },
    { value: "Исиль-Куль", label: "Исиль-Куль" },
    { value: "Исить", label: "Исить" },
    { value: "Ича", label: "Ича" },
    { value: "Иэма", label: "Иэма" },
    { value: "Казань", label: "Казань" },
    { value: "Калакан", label: "Калакан" },
    { value: "Калевала", label: "Калевала" },
    { value: "Калининград", label: "Калининград" },
    { value: "Калуга", label: "Калуга" },
    { value: "Каменск-Уральский", label: "Каменск-Уральский" },
    { value: "Камышин", label: "Камышин" },
    { value: "Кандалакша", label: "Кандалакша" },
    { value: "Канин Нос", label: "Канин Нос" },
    { value: "Канск", label: "Канск" },
    { value: "Карасук", label: "Карасук" },
    { value: "Каргополь", label: "Каргополь" },
    { value: "Катанда", label: "Катанда" },
    { value: "Кашира", label: "Кашира" },
    { value: "Кемерово", label: "Кемерово" },
    { value: "Кемь", label: "Кемь" },
    { value: "Керчь", label: "Керчь" },
    { value: "Кильмезь", label: "Кильмезь" },
    { value: "Кинешма", label: "Кинешма" },
    { value: "Киренск", label: "Киренск" },
    { value: "Киров", label: "Киров" },
    { value: "Кировский", label: "Кировский" },
    { value: "Киселевск", label: "Киселевск" },
    { value: "Кисловодск", label: "Кисловодск" },
    { value: "Клепинино", label: "Клепинино" },
    { value: "Ключи", label: "Ключи" },
    { value: "Ковдор", label: "Ковдор" },
    { value: "Козыревск", label: "Козыревск" },
    { value: "Койнас", label: "Койнас" },
    { value: "Колпашево", label: "Колпашево" },
    { value: "Комсомольск-на-Амуре", label: "Комсомольск-на-Амуре" },
    { value: "Кондинское", label: "Кондинское" },
    { value: "Кондома", label: "Кондома" },
    { value: "Корсаков", label: "Корсаков" },
    { value: "Корф", label: "Корф" },
    { value: "Кострома", label: "Кострома" },
    { value: "Котельниково", label: "Котельниково" },
    { value: "Коткино", label: "Коткино" },
    { value: "Котлас", label: "Котлас" },
    { value: "Кочки", label: "Кочки" },
    { value: "Кош-Агач", label: "Кош-Агач" },
    { value: "Красная Поляна", label: "Красная Поляна" },
    { value: "Краснодар", label: "Краснодар" },
    { value: "Краснощелье", label: "Краснощелье" },
    { value: "Красноярск", label: "Красноярск" },
    { value: "Красный Чикой", label: "Красный Чикой" },
    { value: "Красный Яр", label: "Красный Яр" },
    { value: "Крест-Хальджай", label: "Крест-Хальджай" },
    { value: "Кроноки", label: "Кроноки" },
    { value: "Кувандык", label: "Кувандык" },
    { value: "Купино", label: "Купино" },
    { value: "Курган", label: "Курган" },
    { value: "Курильск", label: "Курильск" },
    { value: "Курск", label: "Курск" },
    { value: "Кызыл", label: "Кызыл" },
    { value: "Кыштовка", label: "Кыштовка" },
    { value: "Кюсюр", label: "Кюсюр" },
    { value: "Кяхта", label: "Кяхта" },
    { value: "Ленск", label: "Ленск" },
    { value: "Леуши", label: "Леуши" },
    { value: "Липецк", label: "Липецк" },
    { value: "Ловозеро", label: "Ловозеро" },
    { value: "Лопатка, мыс", label: "Лопатка, мыс" },
    { value: "Магадан", label: "Магадан" },
    { value: "Магас*", label: "Магас*" },
    { value: "Майкоп", label: "Майкоп" },
    { value: "Макаров", label: "Макаров" },
    { value: "Мама", label: "Мама" },
    { value: "Маргаритово", label: "Маргаритово" },
    { value: "Мариинск", label: "Мариинск" },
    { value: "Марково", label: "Марково" },
    { value: "Марресаля", label: "Марресаля" },
    { value: "Махачкала", label: "Махачкала" },
    { value: "Мезень", label: "Мезень" },
    { value: "Мелеуз", label: "Мелеуз" },
    { value: "Мельничное", label: "Мельничное" },
    { value: "Миллерово", label: "Миллерово" },
    { value: "Мильково", label: "Мильково" },
    { value: "Минеральные Воды", label: "Минеральные Воды" },
    { value: "Минусинск", label: "Минусинск" },
    { value: "Мирный", label: "Мирный" },
    { value: "Могоча", label: "Могоча" },
    { value: "Можайск", label: "Можайск" },
    { value: "Монды", label: "Монды" },
    { value: "Мончегорск", label: "Мончегорск" },
    { value: "Москва", label: "Москва" },
    { value: "Мурманск", label: "Мурманск" },
    { value: "Муром", label: "Муром" },
    { value: "Нагорный", label: "Нагорный" },
    { value: "Нагорское", label: "Нагорское" },
    { value: "Надым", label: "Надым" },
    { value: "Наканно", label: "Наканно" },
    { value: "Нальчик", label: "Нальчик" },
    { value: "Наро-Фоминск", label: "Наро-Фоминск" },
    { value: "Нарьян-Мар", label: "Нарьян-Мар" },
    { value: "Начики", label: "Начики" },
    { value: "Невельск", label: "Невельск" },
    { value: "Невинномысск", label: "Невинномысск" },
    { value: "Непа", label: "Непа" },
    { value: "Нера", label: "Нера" },
    { value: "Нерчинск", label: "Нерчинск" },
    { value: "Нерчинский Завод", label: "Нерчинский Завод" },
    { value: "Ниванкюль", label: "Ниванкюль" },
    { value: "Нижнеангарск", label: "Нижнеангарск" },
    { value: "Нижнетамбовское", label: "Нижнетамбовское" },
    { value: "Нижний Новгород", label: "Нижний Новгород" },
    { value: "Николаевск-на-Амуре", label: "Николаевск-на-Амуре" },
    { value: "Никольск", label: "Никольск" },
    { value: "Новая Ладога", label: "Новая Ладога" },
    { value: "Новоаннинский", label: "Новоаннинский" },
    { value: "Новомосковский АО", label: "Новомосковский АО" },
    { value: "Новосибирск", label: "Новосибирск" },
    { value: "Ноглики", label: "Ноглики" },
    { value: "Ножовка", label: "Ножовка" },
    { value: "Норск", label: "Норск" },
    { value: "Нюрба", label: "Нюрба" },
    { value: "Нязепетровск", label: "Нязепетровск" },
    { value: "о. Беринга", label: "о. Беринга" },
    { value: "о. Сосновец", label: "о. Сосновец" },
    { value: "Облучье", label: "Облучье" },
    { value: "Объячево", label: "Объячево" },
    { value: "Оймякон", label: "Оймякон" },
    { value: "Октябрьское", label: "Октябрьское" },
    { value: "Олекминск", label: "Олекминск" },
    { value: "Оленек", label: "Оленек" },
    { value: "Олонец", label: "Олонец" },
    { value: "Омолон", label: "Омолон" },
    { value: "Омск", label: "Омск" },
    { value: "Омсукчан", label: "Омсукчан" },
    { value: "Онгудай", label: "Онгудай" },
    { value: "Онега", label: "Онега" },
    { value: "Орел", label: "Орел" },
    { value: "Оренбург", label: "Оренбург" },
    { value: "Орлинга", label: "Орлинга" },
    { value: "Оссора", label: "Оссора" },
    { value: "Островное", label: "Островное" },
    { value: "Оха", label: "Оха" },
    { value: "Охотск", label: "Охотск" },
    { value: "Охотский Перевоз", label: "Охотский Перевоз" },
    { value: "Паданы", label: "Паданы" },
    { value: "Палатка", label: "Палатка" },
    { value: "Партизанск", label: "Партизанск" },
    { value: "Пенза", label: "Пенза" },
    { value: "Перевоз", label: "Перевоз" },
    { value: "Пермь", label: "Пермь" },
    { value: "Петрозаводск", label: "Петрозаводск" },
    { value: "Петропавловск-Камчатский", label: "Петропавловск-Камчатский" },
    { value: "Петрунь", label: "Петрунь" },
    { value: "Печора", label: "Печора" },
    { value: "Погиби", label: "Погиби" },
    { value: "Порецкое", label: "Порецкое" },
    { value: "Поронайск", label: "Поронайск" },
    { value: "Посьет", label: "Посьет" },
    { value: "Поярково", label: "Поярково" },
    { value: "Преображение", label: "Преображение" },
    { value: "Преображенка", label: "Преображенка" },
    { value: "Приморско-Ахтарск", label: "Приморско-Ахтарск" },
    { value: "Псков", label: "Псков" },
    { value: "Пялица", label: "Пялица" },
    { value: "Реболы", label: "Реболы" },
    { value: "Родино", label: "Родино" },
    { value: "Ростов-на-Дону", label: "Ростов-на-Дону" },
    { value: "Рубцовск", label: "Рубцовск" },
    { value: "Рудная Пристань", label: "Рудная Пристань" },
    { value: "Рязань", label: "Рязань" },
    { value: "Салехард", label: "Салехард" },
    { value: "Самара", label: "Самара" },
    { value: "Сангар", label: "Сангар" },
    { value: "Санкт-Петербург", label: "Санкт-Петербург" },
    { value: "Саранск", label: "Саранск" },
    { value: "Сарапул", label: "Сарапул" },
    { value: "Саратов", label: "Саратов" },
    { value: "Саскылах", label: "Саскылах" },
    { value: "Свободный", label: "Свободный" },
    { value: "Севастополь", label: "Севастополь" },
    { value: "Семлячики", label: "Семлячики" },
    { value: "Симферополь", label: "Симферополь" },
    { value: "Сковородино", label: "Сковородино" },
    { value: "Славгород", label: "Славгород" },
    { value: "Смоленск", label: "Смоленск" },
    { value: "Соболево", label: "Соболево" },
    { value: "Советская Гавань", label: "Советская Гавань" },
    { value: "Сорочинск", label: "Сорочинск" },
    { value: "Сортавала", label: "Сортавала" },
    { value: "Сосново-Озерское", label: "Сосново-Озерское" },
    { value: "Сосуново", label: "Сосуново" },
    { value: "Сосьва", label: "Сосьва" },
    { value: "Софийский Прииск", label: "Софийский Прииск" },
    { value: "Сочи", label: "Сочи" },
    { value: "Среднекан", label: "Среднекан" },
    { value: "Среднеколымск", label: "Среднеколымск" },
    { value: "Средний Васюган", label: "Средний Васюган" },
    { value: "Средний Калар", label: "Средний Калар" },
    { value: "Ставрополь", label: "Ставрополь" },
    { value: "Старица", label: "Старица" },
    { value: "Сунтар", label: "Сунтар" },
    { value: "Сургут", label: "Сургут" },
    { value: "Сурское", label: "Сурское" },
    { value: "Сусуман", label: "Сусуман" },
    { value: "Сухана", label: "Сухана" },
    { value: "Сыктывкар", label: "Сыктывкар" },
    { value: "Таганрог", label: "Таганрог" },
    { value: "Тайга", label: "Тайга" },
    { value: "Тайшет", label: "Тайшет" },
    { value: "Тамбов", label: "Тамбов" },
    { value: "Тара", label: "Тара" },
    { value: "Тарко-Сале", label: "Тарко-Сале" },
    { value: "Татарск", label: "Татарск" },
    { value: "Тверь", label: "Тверь" },
    { value: "Терекли-Мектеб", label: "Терекли-Мектеб" },
    { value: "Териберка", label: "Териберка" },
    { value: "Тисуль", label: "Тисуль" },
    { value: "Тихвин", label: "Тихвин" },
    { value: "Тихорецк", label: "Тихорецк" },
    { value: "Тобольск", label: "Тобольск" },
    { value: "Тогул", label: "Тогул" },
    { value: "Токо", label: "Токо" },
    { value: "Томмот", label: "Томмот" },
    { value: "Томпо", label: "Томпо" },
    { value: "Томск", label: "Томск" },
    { value: "Топки", label: "Топки" },
    { value: "Тотьма", label: "Тотьма" },
    { value: "Троицкий АО", label: "Троицкий АО" },
    { value: "Троицкое", label: "Троицкое" },
    { value: "Троицко-Печорское", label: "Троицко-Печорское" },
    { value: "Тула", label: "Тула" },
    { value: "Тулун", label: "Тулун" },
    { value: "Тунгокочен", label: "Тунгокочен" },
    { value: "Туой-Хая", label: "Туой-Хая" },
    { value: "Тупик", label: "Тупик" },
    { value: "Тура", label: "Тура" },
    { value: "Туринск", label: "Туринск" },
    { value: "Туруханск", label: "Туруханск" },
    { value: "Тында", label: "Тында" },
    { value: "Тюмень", label: "Тюмень" },
    { value: "Тяня", label: "Тяня" },
    { value: "Уакит", label: "Уакит" },
    { value: "Угут", label: "Угут" },
    { value: "Улан-Удэ", label: "Улан-Удэ" },
    { value: "Ульяновск", label: "Ульяновск" },
    { value: "Умба", label: "Умба" },
    { value: "Уренгой", label: "Уренгой" },
    { value: "Усть-Воямполка", label: "Усть-Воямполка" },
    { value: "Усть-Кабырза", label: "Усть-Кабырза" },
    { value: "Усть-Камчатск", label: "Усть-Камчатск" },
    { value: "Усть-Мая", label: "Усть-Мая" },
    { value: "Усть-Миль", label: "Усть-Миль" },
    { value: "Усть-Мома", label: "Усть-Мома" },
    { value: "Усть-Нюкжа", label: "Усть-Нюкжа" },
    { value: "Усть-Озерное", label: "Усть-Озерное" },
    { value: "Усть-Олой", label: "Усть-Олой" },
    { value: "Усть-Ордынский", label: "Усть-Ордынский" },
    { value: "Усть-Уса", label: "Усть-Уса" },
    { value: "Усть-Хайрюзово", label: "Усть-Хайрюзово" },
    { value: "Усть-Цильма", label: "Усть-Цильма" },
    { value: "Усть-Щугор", label: "Усть-Щугор" },
    { value: "Уфа", label: "Уфа" },
    { value: "Ухта", label: "Ухта" },
    { value: "Феодосия", label: "Феодосия" },
    { value: "Хабаровск", label: "Хабаровск" },
    { value: "Ханты-Мансийск", label: "Ханты-Мансийск" },
    { value: "Хатанга", label: "Хатанга" },
    { value: "Ходовариха", label: "Ходовариха" },
    { value: "Холмск", label: "Холмск" },
    { value: "Хоринск", label: "Хоринск" },
    { value: "Хоседа-Хард", label: "Хоседа-Хард" },
    { value: "Чара", label: "Чара" },
    { value: "Чебоксары", label: "Чебоксары" },
    { value: "Челюскин, мыс", label: "Челюскин, мыс" },
    { value: "Челябинск", label: "Челябинск" },
    { value: "Чердынь", label: "Чердынь" },
    { value: "Черкесск", label: "Черкесск" },
    { value: "Черлак", label: "Черлак" },
    { value: "Черняево", label: "Черняево" },
    { value: "Черусти", label: "Черусти" },
    { value: "Чечуйск", label: "Чечуйск" },
    { value: "Чита", label: "Чита" },
    { value: "Чугуевка", label: "Чугуевка" },
    { value: "Чулым", label: "Чулым" },
    { value: "Чульман", label: "Чульман" },
    { value: "Чумикан", label: "Чумикан" },
    { value: "Чурапча", label: "Чурапча" },
    { value: "Чухлома", label: "Чухлома" },
    { value: "Шамары", label: "Шамары" },
    { value: "Шарья", label: "Шарья" },
    { value: "Шелагонцы", label: "Шелагонцы" },
    { value: "Шенкурск", label: "Шенкурск" },
    { value: "Шимановск", label: "Шимановск" },
    { value: "Шира", label: "Шира" },
    { value: "Эйк", label: "Эйк" },
    { value: "Экимчан", label: "Экимчан" },
    { value: "Элиста", label: "Элиста" },
    { value: "Эльтон", label: "Эльтон" },
    { value: "Эньмувеем", label: "Эньмувеем" },
    { value: "Южно-Курильск", label: "Южно-Курильск" },
    { value: "Южно-Сахалинск", label: "Южно-Сахалинск" },
    { value: "Яйлю", label: "Яйлю" },
    { value: "Якутск", label: "Якутск" },
    { value: "Ялта", label: "Ялта" },
    { value: "Янаул", label: "Янаул" },
    { value: "Ярославль", label: "Ярославль" },
    { value: "Ярцево", label: "Ярцево" }    
  ];

  const [selected, setSelected] = useState("");
  const [reportData, setReportData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [submitLatitude, setSubmitLatitude] = useState(null);
  
  const handleChange = (selectOption) => {
    setSelected(selectOption);
  };

  const handleChangeLatitude = (event) => {
    const value = event.target.value;
    if (value === '' || (value >= 0 && value <= 90)) {
        setInputValue(value);
  } else {
    setInputValue("")
  }
  };

  const handleReport = () => {
    if (selected.length === 0) {
        return;
    } 

   //* axios
    //*  .get(`http://185.180.230.68:8099/climate_report/?climate_report_location=${selected.map(option => option.value).join('_')}`)
    //*  .then(res => {
    //*    console.log(res.data.data);
    //*    setReportData(res.data.data);
     //* });

      fetch(`http://185.180.230.68:8099/climate_report/?climate_report_location=${selected.map(option => option.value).join('_')}`)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setReportData(data);
      })
      .catch(error => {
          console.error("Error fetching data:", error);
      });
  };

  const handleSubmitLatitude = () => {
    //*axios
     //*   .get(`http://185.180.230.68:8099/climate_report/latitude/?latitude=${inputValue}`)
     //*   .then(res => {
     //*       console.log(res.data.data)
     //*       setSubmitLatitude(res.data.data)
     //*   })

    fetch(`http://185.180.230.68:8099/climate_report/latitude/?latitude=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        setSubmitLatitude(data.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  const renderTable = () => {
    if (!reportData) {
        return null;
      }

    const locations = Object.keys(reportData);

    const characteristicsNamesTable_3_1 = {
        "subject":"Субъект",
        "location":"Пункт",
        "cold_temperature_1day_098":"Температура воздуха наиболее холодных суток, °С, обеспеченностью 0.98",
        "cold_temperature_1day_092":"Температура воздуха наиболее холодных суток, °С, обеспеченностью 0.92",
        "cold_temperature_5day_098":"Температура воздуха наиболее холодной пятидневки, °С, обеспеченностью 0.98",
        "cold_temperature_5day_092":"Температура воздуха наиболее холодной пятидневки, °С, обеспеченностью 0.92",
        "temperature_094":"Температура воздуха, °С, обеспеченностью 0.94",
        "absolutely_minimal_temperature":"Абсолютная минимальная температура воздуха, °С",
        "mean_1day_amplitude_the_coldest_month":"Средняя суточная амплитуда температуры воздуха наиболее холодного месяца, °С",
        "duration_of_period_with_mean_1day_temperature_1":"Продолжительность, сут периода со средней суточной температурой воздуха ≤ 0",
        "mean_temperature_1":"Средняя температура воздуха, °С периода со средней суточной температурой воздуха ≤ 0",
        "duration_of_period_with_mean_1day_temperature_2":"Продолжительность, сут периода со средней суточной температурой воздуха ≤ 8",
        "mean_temperature_2":"Средняя температура воздуха, °С периода со средней суточной температурой воздуха ≤ 8",
        "duration_of_period_with_mean_1day_temperature_3":"Продолжительность, сут периода со средней суточной температурой воздуха ≤ 10",
        "mean_temperature_3":"Средняя температура воздуха, °С периода со средней суточной температурой воздуха ≤ 10",
        "mean_monthly_relative_moisture_the_coldest_month":"Средняя месячная относительная влажность воздуха наиболее холодного месяца, %",
        "mean_monthly_relative_moisture_in15oclock_the_coldest_month":"Средняя месячная относительная влажность воздуха в 15 ч наиболее холодного месяца, %",
        "precipitation_november_march_mm":"Количество осадков за ноябрь-март, мм",
        "dominant_wind_direction_december_february":"Преобладающее направление ветра за декабрь-февраль",
        "maximal_of_mean_speed_wind_by_point_january":"Максимальная из средних скоростей ветра по румбам за январь, м/с",
        "mean_wind_speed_in_period_of_mean_1day_temperature":"Средняя скорость ветра, м/с, за период со средней суточной температурой воздуха"
      }

    const characteristicsNamesTable_4_1 = {
        "subject":"Субъект",
        "location":"Пункт",
        "pressure":"Барометрическое давление, гПа",
        "temperature_095":"Температура воздуха, °С, обеспеченностью 0,95",
        "temperature_098":"Температура воздуха, °С, обеспеченностью 0,98",
        "mean_maximal_month_temperature":"Средняя максимальная температура воздуха наиболее теплого месяца, °С",
        "absolutely_maximal_temperature":"Абсолютная максимальная температура воздуха, °С",
        "mean_daily_amplitude_temperature_the_warmest_month":"Средняя суточная амплитуда температуры воздуха наиболее теплого месяца, °С",
        "mean_monthly_relative_humidity_the_warmest_month":"Средняя месячная относительная влажность воздуха наиболее теплого месяца, %",
        "mean_monthly_relative_humidity_the_warmest_month_15h":"Средняя месячная относительная влажность воздуха в 15 ч наиболее теплого месяца, %",
        "precipitation_amount_april_october":"Количество осадков за апрель-октябрь, мм",
        "max_daily_precipitation_amount":"Суточный максимум осадков, мм",
        "dominant_wind_direction_june_august":"Преобладающее направление ветра за июнь-август",
        "minimal_of_mean_speed_wind_by_point_july":"Минимальная из средних скоростей ветра по румбам за июль, м/с"
    }

    const characteristicsNamesTable_5_1_7_1 = {
        "location":"Пункт",
        "subject":"Субъект",
        "I":"I",
        "II":"II",
        "III":"III",
        "IV":"IV",
        "V":"V",
        "VI":"VI",
        "VII":"VII",
        "VIII":"VII",
        "IX":"IX",
        "X":"X",
        "XI":"XI",
        "XII":"XII",
        "year":"Год"
    }

    const characteristicsNamesTable_6_1 = {
        "location" : "Пункт",
        "subject" : "Субъект",
        "maximal_temperature_amplitude":"Максимальная амплитуда температуры воздуха"
    }

    const characteristicsNamesTable_10_2 = {
        "location" : "Пункт",
        "entalpia_0_98" : "Удельная энтальпия наружного воздуха обеспеченностью 0.98, кДж/кг",
        "moisture_content":"Удельное влагосодержание наружного воздуха, г/кг"
    }

    const characteristicsNamesTable_11 = {
        "location":"Пункт",
        "subject":"Субъект",
        "I":"I",
        "II":"II",
        "III":"III",
        "IV":"IV",
        "V":"V",
        "VI":"VI",
        "VII":"VII",
        "VIII":"VII",
        "IX":"IX",
        "X":"X",
        "XI":"XI",
        "XII":"XII"
    }

    const characteristicsTable_3_1 = [
       "subject",
       "location",
       "cold_temperature_1day_098",
       "cold_temperature_1day_092",
       "cold_temperature_5day_098",
       "cold_temperature_5day_092",
       "temperature_094",
       "absolutely_minimal_temperature",
       "mean_1day_amplitude_the_coldest_month",
       "duration_of_period_with_mean_1day_temperature_1",
       "mean_temperature_1",
       "duration_of_period_with_mean_1day_temperature_2",
       "mean_temperature_2",
       "duration_of_period_with_mean_1day_temperature_3",
       "mean_temperature_3",
       "mean_monthly_relative_moisture_the_coldest_month",
       "mean_monthly_relative_moisture_in15oclock_the_coldest_month",
       "precipitation_november_march_mm",
       "dominant_wind_direction_december_february",
       "maximal_of_mean_speed_wind_by_point_january",
       "mean_wind_speed_in_period_of_mean_1day_temperature"
    ]

    const characteristicsTable_4_1 = [
       "subject",
       "location",
       "pressure",
       "temperature_095",
       "temperature_098",
       "mean_maximal_month_temperature",
       "absolutely_maximal_temperature",
       "mean_daily_amplitude_temperature_the_warmest_month",
       "mean_monthly_relative_humidity_the_warmest_month",
       "mean_monthly_relative_humidity_the_warmest_month_15h",
       "precipitation_amount_april_october",
       "max_daily_precipitation_amount",
       "dominant_wind_direction_june_august",
       "minimal_of_mean_speed_wind_by_point_july"
    ]

    const characteristicsTable_5_1_7_1 = [
        "subject",
        "location",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "year"
    ]

    const characteristicsTable_6_1 = [
        "location",
        "subject",
        "maximal_temperature_amplitude"
    ]
    
    const characteristicsTable_10_2 = [
        "location",
        "entalpia_0_98",
        "moisture_content"
    ]

    const characteristicsTable_11 = [
        "subject",
        "location",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII"
    ]

    

    return (
        <>
            <div className="grid gap-1 place-items-center">
                <h1 className="text-center text-xl uppercase">Климатическая справка</h1>
                
                {/*Table_3_1*/} 
                <h2>Климатические параметры холодного периода года</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            <th className="px-5 py-2 text-left">Метеостанция</th>
                            {locations.map((location, index) => (
                                <th key={index}>{location}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {characteristicsTable_3_1.map((characteristic, index) => (
                            <tr key={index}>
                                <td className="px-5 text-left border-solid border-b border-gray-200">
                                    {characteristicsNamesTable_3_1[characteristic]}
                                </td>
                                {locations.map((location, dataIndex) => (
                                    <td key={dataIndex} className="px-5 border-solid border-b border-gray-200">
                                        {reportData[location].table_3_1[characteristic]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/*Table_4_1*/} 
                <h2>Климатические параметры теплого периода года</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            <th className="px-5 py-2 text-left">Метеостанция</th>
                            {locations.map((location, index) => (
                                <th key={index}>{location}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {characteristicsTable_4_1.map((characteristic, index) => (
                            <tr key={index}>
                                <td className="px-5 text-left border-solid border-b border-gray-200">
                                    {characteristicsNamesTable_4_1[characteristic]}
                                </td>
                                {locations.map((location, dataIndex) => (
                                    <td key={dataIndex} className="px-5 border-solid border-b border-gray-200">
                                        {reportData[location].table_4_1[characteristic]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/*Table_5_1*/} 
                <h2>Среднемесячная и среднегодовая температуры воздуха</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {characteristicsTable_5_1_7_1.map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristicsNamesTable_5_1_7_1[characteristic]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, dataIndex) => (
                            <tr key={dataIndex} className="border-b border-gray-200">
                                {characteristicsTable_5_1_7_1.map((characteristic, index) => (
                                    <td key={index} className="px-5">
                                        {reportData[location].table_5_1[characteristic]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {/*Table_6_1*/} 
                <h2>Максимальная суточная амплитуда температуры воздуха в июле, °С</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {characteristicsTable_6_1.map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristicsNamesTable_6_1[characteristic]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, dataIndex) => (
                            <tr key={dataIndex} className="border-b border-gray-200">
                                {characteristicsTable_6_1.map((characteristic, index) => {
                                    const data = reportData[location].table_6_1?.[characteristic]
                                    const rowspan = data !== undefined ? 1 : characteristicsTable_6_1.length;
                                    if (data === undefined && index > 0) {
                                        return null; // Остановка итерации после первой
                                      }
                                    return (
                                        <td key={index} className="px-5" colSpan={rowspan}>
                                            {data !== undefined ? data: `Информция о пункте ${location} отсутствует`}
                                        </td>
                                    )}
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {/*Table_7_1*/} 
                <h2>Среденее месячное и годовое парциальное давление водяного пара, гПа</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {characteristicsTable_5_1_7_1.map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristicsNamesTable_5_1_7_1[characteristic]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, dataIndex) => (
                            <tr key={dataIndex} className="border-b border-gray-200">
                                {characteristicsTable_5_1_7_1.map((characteristic, index) => {
                                    const data = reportData[location].table_7_1?.[characteristic]
                                    const rowspan = data !== undefined ? 1 : characteristicsTable_5_1_7_1.length;
                                    if (data === undefined && index > 0) {
                                        return null; // Остановка итерации после первой
                                      }
                                    return (
                                        <td key={index} className="px-5" colSpan={rowspan}>
                                            {data !== undefined ? data: `Информция о пункте ${location} отсутствует`}
                                        </td>
                                    )}
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/*Table_10_2*/} 
                <h2>Максимальная суточная амплитуда температуры воздуха в июле, °С</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {characteristicsTable_10_2.map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristicsNamesTable_10_2[characteristic]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, dataIndex) => (
                            <tr key={dataIndex} className="border-b border-gray-200">
                                {characteristicsTable_10_2.map((characteristic, index) => {
                                    const data = reportData[location].table_10_2?.[characteristic]
                                    const rowspan = data !== undefined ? 1 : characteristicsTable_6_1.length;
                                    if (data === undefined && index > 0) {
                                        return null; // Остановка итерации после первой
                                      }
                                    return (
                                        <td key={index} className="px-5" colSpan={rowspan}>
                                            {data !== undefined ? data: `Информция о пункте ${location} отсутствует`}
                                        </td>
                                    )}
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/*Table_11_1_1*/} 
                <h2>Значения средней суточной амплитуды температуры наружного воздуха</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {characteristicsTable_11.map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristicsNamesTable_11[characteristic]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, dataIndex) => (
                            <tr key={dataIndex} className="border-b border-gray-200">
                                {characteristicsTable_11.map((characteristic, index) => (
                                    <td key={index} className="px-5">
                                        {reportData[location].table_11_1_1[characteristic]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/*Table_11_1_2*/} 
                <h2>Значения максимальной суточной амплитуды температуры наружного воздуха</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {characteristicsTable_11.map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristicsNamesTable_11[characteristic]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, dataIndex) => (
                            <tr key={dataIndex} className="border-b border-gray-200">
                                {characteristicsTable_11.map((characteristic, index) => (
                                    <td key={index} className="px-5">
                                        {reportData[location].table_11_1_2[characteristic]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>                           
        </>
    );
  };

    const renderTable_latitude = () => {
    const characteristicsNamesTable_9_1 = {
        "orientation" : "Ориентация",
        "Январь" : "Январь",
        "Февраль" : "Февраль",
        "Март" : "Март",
        "Апрель" : "Апрель",
        "Май" : "Май",
        "Июнь" : "Июнь",
        "Июль" : "Июль",
        "Август" : "Август",
        "Сентябрь" : "Сентябрь",
        "Октябрь" : "Октябрь",
        "Ноябрь" : "Ноябрь",
        "Декабрь" : "Декабрь"
    };

    const characteristicsTable_9_1 = [
        "orientation",
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ];
    
    return (
        <>
            <div className="text-center grid gap-1 place-items-center">
                {/*Table_8_1*/} 
                <h2 className="text-center">Значение суммарной солнечной радиации (прямой и рассеяной) на горизонтальную поверность<br /> при безоблачном небе, МДж/м<sup>2</sup> для {inputValue}° с.ш.</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {Object.keys(submitLatitude.table_8_1).map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristic}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200">
                            {Object.keys(submitLatitude.table_8_1).map((value, index) => (
                                <td key={index} className="px-5">
                                    {submitLatitude.table_8_1[value]}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                
                {/*Table_9_1*/} 
                <h2>Значение суммарной солнечной радиации (прямой и рассеяной) на вертикальную поверность<br /> при безоблачном небе, МДж/м<sup>2</sup> для {inputValue}° с.ш</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {characteristicsTable_9_1.map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristicsNamesTable_9_1[characteristic]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(submitLatitude.table_9_1).map((orientation, dataIndex) => (
                            <tr key={dataIndex} className="border-b border-gray-200">
                                <td>{orientation}</td>
                                    {characteristicsTable_9_1.slice(1).map((month, index) => (
                                        <td key={index} className="px-5">
                                            {submitLatitude.table_9_1[orientation][month]}
                                        </td>
                                    ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/*Table_13*/} 
                <h2 className="text-center">Высота солнца над горизонтом для {inputValue}° с.ш.</h2>
                <table className="min-w-max table-auto text-center font-light bg-white shadow-md rounded my-2">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm uppercase leading-normal">
                            {Object.keys(submitLatitude.table_13).map((characteristic, index) => (
                                <th key={index} className="px-5 py-2">
                                    {characteristic}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200">
                            {Object.keys(submitLatitude.table_13).map((value, index) => (
                                <td key={index} className="px-5">
                                    {submitLatitude.table_13[value]}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
        );
    };



    const [selectedOption1, setSelectedOption1] = useState(null);

    const handleReportReset = () => {
        setReportData("")
    }

    const handleChangeSelectReset = () => {
        setSelected("")
    }

    const handleSubmitLatitudeReset = () => {
        setSubmitLatitude("")
    }


    const handleOptionChange1 = (selectedOption) => {
        setSelectedOption1(selectedOption);
    };

    
    const handleSelectKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleReport();
            }
        };

    const handleLatitudeSubmitKeyDown = (event) => {
        if (event.keyCode === 13 && (event.target.value < 40 || event.target.value > 90)) {
            handleSubmitLatitudeReset();
        } else if (event.keyCode === 13) {
            handleSubmitLatitude();
        } else {
            handleSubmitLatitudeReset();
        }
        };

    const handleLatitudeSubmitButton = () => {
        if (inputValue < 40 || inputValue > 90) {
            handleSubmitLatitudeReset();
        } else {
            handleSubmitLatitude();
        }
    };
    

    return (
        <>
            <div className="grid gap-2 font-sans place-items-center">
                <label className="block text-gray-700 text-sm font-bold mb-0" htmlFor="select_option1">
                    Выберите опцию
                </label>
                <Select
                    id="select_option1"
                    className="max_w_md px-11"
                    options={options_of_options}
                    onChange={handleOptionChange1}
                    onMenuOpen={() => {handleReportReset(); handleSubmitLatitudeReset(); handleChangeSelectReset()}}
                />

                {selectedOption1 && selectedOption1.value === "Отчёт по метеостанции" && (
                    <>
                        <Select
                        id="select"
                        className="max-w-md px-11"
                        isMulti
                        options={options}
                        onChange={handleChange}
                        autoFocus={true}
                        isOptionDisabled={() => selected.length >= 4} 
                        onMenuOpen={handleReportReset}
                        onKeyDown={handleSelectKeyDown}
                        />

                        <button className="rounded bg-blue-900 text-white py-1 px-9"
                            onClick={handleReport}
                            disabled={selected.length === 0}
                            >
                            Получить отчёт
                        </button>
                    </>
                )}

                {selectedOption1 && selectedOption1.value === "Отчёт по широте" && (
                    <>
                        <input
                            type="number"
                            value={inputValue}
                            onChange={(event) => {handleChangeLatitude(event); handleSubmitLatitudeReset(event)}}
                            className="shadow appearance-none border rounded py-2 px-0.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
                            id="latitude"
                            placeholder="Широта"
                            onKeyDown={handleLatitudeSubmitKeyDown}
                            />
                        
                        <button className="rounded bg-blue-900 text-white py-1 px-9"
                            onClick={handleLatitudeSubmitButton}
                            disabled={!inputValue}
                            >
                            Получить отчёт
                        </button>
                    </>
                )}
                <div>
                    {selected.length > 0 && !submitLatitude && (
                        <div>{renderTable()}</div>
                    )}
                    {selected.length === 0 && submitLatitude && (
                        <div>{renderTable_latitude()}</div>
                    )}
                    {selected.length > 0 && submitLatitude && (
                        <>
                        <div>{renderTable()}</div>
                        <div>{renderTable_latitude()}</div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default DropdownBar;
