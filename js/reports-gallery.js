  
  const reportsData = [
    {
        "name": "2022-03-01_Гуманітарна допомога для цивільних-Харків.JPG",
        "text": "Гуманітарна допомога для цивільних. Харків, 2022-03-01."
    },
    {
        "name": "2022-03-05_Гуманітарна допомога для ЗСУ-Донецька обл..JPG",
        "text": "Гуманітарна допомога для ЗСУ. Донецька обл., 2022-03-05."
    },
    {
        "name": "2022-03-05_Екіпіровка для Азов-Харків.JPG",
        "text": "Екіпіровка для Азов. Харків, 2022-03-05."
    },
    {
        "name": "2022-03-06_Гуманітарна допомога для цивільних-Харків.JPG",
        "text": "Гуманітарна допомога для цивільних. Харків, 2022-03-06."
    },
    {
        "name": "2022-03-07_Гуманітарна допомого для цивільних-Новгород Волинськ-Бердичів-Житомир.JPG",
        "text": "Гуманітарна допомого для цивільних. Новгород-Волинськ, Бердичів, Житомир, 2022-03-07."
    },
    {
        "name": "2022-03-13_Бронежилети для ЗСУ-Харків.JPG",
        "text": "Бронежилети для ЗСУ. Харків, 2022-03-13."
    },
    {
        "name": "2022-03-13_Гуманітарна допомога для цивільних-Харків.JPG",
        "text": "Гуманітарна допомога для цивільних. Харків, 2022-03-13."
    },
    {
        "name": "2022-03-18_Бронежилети для ЗСУ-Маріуполь.JPG",
        "text": "Бронежилети для ЗСУ. Маріуполь, 2022-03-18."
    },
    {
        "name": "2022-03-18_Екіпірування для ЗСУ-Схід.JPG",
        "text": "Екіпірування для ЗСУ. Схід, 2022-03-18."
    },
    {
        "name": "2022-03-19_Amunitsiya_dlya_TRO-Kyyiv.JPG",
        "text": "Амуніція для ТРО. Київ, 2022-03-19."
    },
    {
        "name": "2022-03-19_Ekipiruvannya_dlya_ZSU-Kyiv.JPG",
        "text": "Екіпірування для ЗСУ. Київ, 2022-03-19."
    },
    {
        "name": "2022-03-22_Амуніція для ЗСУ-Рівне.JPG",
        "text": "Амуніція для ЗСУ. Рівне, 2022-03-22."
    },
    {
        "name": "2022-03-22_ліки для ЗСУ-Запоріжжя.JPG",
        "text": "Ліки для ЗСУ. Запоріжжя, 2022-03-22."
    },
    {
        "name": "2022-03-22_ліки для ЗСУ-Запоріжжя(1).JPG",
        "text": "Ліки для ЗСУ. Запоріжжя, 2022-03-22."
    },
    {
        "name": "2022-03-23_Бронежилети для ЗСУ-Рівне.JPG",
        "text": "Бронежилети для ЗСУ. Рівне, 2022-03-23."
    },
    {
        "name": "2022-03-24_Амуніція для ССО-Одеса.JPG",
        "text": "Амуніція для ССО. Одеса, 2022-03-24."
    },
    {
        "name": "2022-03-25_Амуніція для ЗСУ-Схід.JPG",
        "text": "Амуніція для ЗСУ. Схід, 2022-03-25."
    },
    {
        "name": "2022-03-25_Бронежилети для ЗСУ.JPG",
        "text": "Бронежилети для ЗСУ. 2022-03-25."
    },
    {
        "name": "2022-03-25_Гуманітарна допомога для переселенців-Борислав.JPG",
        "text": "Гуманітарна допомога для переселенців. Борислав, 2022-03-25."
    },
    {
        "name": "2022-03-25_Ekipirovka_dlya_ZSU-Kyiv.JPG",
        "text": "Екіпіровка для ЗСУ. Київ, 2022-03-25."
    },
    {
        "name": "2022-03-25_ліки для ЗСУ-Запоріжжя.JPG",
        "text": "Ліки для ЗСУ. Запоріжжя, 2022-03-25."
    },
    {
        "name": "2022-03-27_Ліки та бронежилети для ЗСУ-Схід.JPG",
        "text": "Ліки та бронежилети для ЗСУ. Схід, 2022-03-27."
    },
    {
        "name": "2022-03-28_90 бронежилетів  для ЗСУ.JPG",
        "text": "90 бронежилетів для ЗСУ. 2022-03-28"
    },
    {
        "name": "2022-03-28_Плитоноски  для ЗСУ.JPG",
        "text": "Плитоноски для ЗСУ. 2022-03-28."
    },
    {
        "name": "2022-04-01_Bronezhylet_dlya_ZSU-Kyiv.JPG",
        "text": "Бронежилет для ЗСУ. Київ, 2022-04-01."
    },
    {
        "name": "2022-04-02_Bronezhylet_dlya_ZSU-Kyiv.JPG",
        "text": "Бронежилет для ЗСУ. Київ, 2022-04-02."
    },
    {
        "name": "2022-04-03_Плитоноски для ЗСУ.JPG",
        "text": "Плитоноски для ЗСУ. 2022-04-03."
    },
    {
        "name": "2022-04-04_110 Бронежилетів для ЗСУ-Схід.JPG",
        "text": "110 Бронежилетів для ЗСУ. Схід, 2022-04-04."
    },
    {
        "name": "2022-04-06_Плитоноски для ЗСУ.JPG",
        "text": "Плитоноски для ЗСУ. 2022-04-06."
    },
    {
        "name": "2022-04-07_Екіпіровка для ЗСУ.JPG",
        "text": "Екіпіровка для ЗСУ. 2022-04-07."
    },
    {
        "name": "2022-04-08_Плитоноски для ЗСУ.JPG",
        "text": "Плитоноски для ЗСУ. 2022-04-08."
    },
    {
        "name": "2022-04-09_Amunitsiya_dlya_ZSU-Kharkiv-Mykolaiv.JPG",
        "text": "Амуніція для ЗСУ. Харків, Миколаїв, 2022-04-09."
    },
    {
        "name": "2022-04-10_Bronezhylety_dlya_biytsiv_AZOV.JPG",
        "text": "Бронежилети для бійців АЗОВ. 2022-04-10."
    },
    {
        "name": "2022-04-10_Екіпірування та бронежилети для ЗСУ.JPG",
        "text": "Екіпірування та бронежилети для ЗСУ. 2022-04-10."
    },
    {
        "name": "2022-04-11_Amunitsiya_dlya_ZSU-Kyiv.JPG",
        "text": "Амуніція для ЗСУ. Київ, 2022-04-11."
    },
    {
        "name": "2022-04-11_Amunitsiyata_izha_dlya_ZSU-Donetska_obl.JPG",
        "text": "Амуніція та їжа для ЗСУ. Донецька обл., 2022-04-11."
    },
    {
        "name": "2022-04-11_Бронежилети для ЗСУ-Рівне.JPG",
        "text": "Бронежилети для ЗСУ. Рівне, 2022-04-11."
    },
    {
        "name": "2022-04-13_Екіпірування та обладнення для ЗСУ-Схід.JPG",
        "text": "Екіпірування та обладнення для ЗСУ. Схід, 2022-04-13."
    },
    {
        "name": "2022-04-15_Amunitsiya_dlya_ZSU-Kyiv.JPG",
        "text": "Амуніція для ЗСУ. Київ, 2022-04-15"
    },
    {
        "name": "2022-04-16_Амуніція та обладнання для ЗСУ-Північ.JPG",
        "text": "Амуніція та обладнання для ЗСУ. Північ, 2022-04-16."
    },
    {
        "name": "2022-04-17_Амуніція  для ТРО-Одеси.JPG",
        "text": "Амуніція для ТРО. Одеси, 2022-04-17."
    },
    {
        "name": "2022-04-17_Amunitsiya_ta_izha_dlya_ZSU.JPG",
        "text": "Амуніція та їжа для ЗСУ. 2022-04-17."
    },
    {
        "name": "2022-04-19_Тепловізор  для ССО.JPG",
        "text": "Тепловізор  для ССО. 2022-04-19"
    },
    {
        "name": "2022-04-20_Амуніція  для ЗСУ -Донецька обл..JPG",
        "text": "Амуніція  для ЗСУ. Донецька обл., 2022-04-20."
    },
    {
        "name": "2022-04-21_БО «Незламна».JPG",
        "text": "БО «Незламна». 2022-04-21."
    },
    {
        "name": "2022-04-23_Amunitsiya_ta_turnikety_dlya_ZSU-Mykolaiv.JPG",
        "text": "Амуніція та турнікети для  ЗСУ. Миколаїв, 2022-04-23."
    },
    {
        "name": "2022-04-26_Амуніція  та налобні ліхтарики для ТРО-Харків.JPG",
        "text": "Амуніція та налобні ліхтарики для ТРО. Харків, 2022-04-26."
    },
    {
        "name": "2022-04-29_Тактичні рюкзаки та налобні ліхтарики  для ЗСУ-Північ.JPG",
        "text": "Тактичні рюкзаки та налобні ліхтарики  для ЗСУ. Північ, 2022-04-29."
    },
    {
        "name": "2022-04-30_Екіпірування та тепловізор для ОГШБ.JPG",
        "text": "Екіпірування та тепловізор для ОГШБ. 2022-04-30."
    },
    {
        "name": "2022-05-01_Амуніція  для ЗСУ-Енергодар.JPG",
        "text": "Амуніція  для ЗСУ. Енергодар, 2022-05-01."
    },
    {
        "name": "2022-05-04_Плити та амуніція для ЗСУ.JPG",
        "text": "Плити та амуніція для ЗСУ. 2022-05-04."
    },
    {
        "name": "2022-05-06_Екіпірування для ЗСУ.JPG",
        "text": "Екіпірування для ЗСУ. 2022-05-06."
    },
    {
        "name": "2022-05-08_Екіпірування для 128 ОГШБ-Схід.JPG",
        "text": "Екіпірування для 128 ОГШБ. Схід, 2022-05-08."
    },
    {
        "name": "2022-05-11_Amunitsiya_dlya_ZSU-Mykolaiv.JPG",
        "text": "Амуніція для ЗСУ. Миколаїв, 2022-05-11."
    },
    {
        "name": "2022-05-12_Екіпірування для ЗСУ-Волинська обл..JPG",
        "text": "Екіпірування для ЗСУ. Волинська обл., 2022-05-12."
    },
    {
        "name": "2022-05-13_Екіпірування для ССО-Південь.jpg",
        "text": "Екіпірування для ССО. Південь, 2022-05-13."
    },
    {
        "name": "2022-05-14_Екіпірування та обладнення для ЗСУ-Харків.JPG",
        "text": "Екіпірування та обладнення для ЗСУ. Харків, 2022-05-14."
    },
    {
        "name": "2022-05-19_Матраси  для ЗСУ -Схід.JPG",
        "text": "Матраси  для ЗСУ. Схід, 2022-05-19."
    },
    {
        "name": "2022-05-19_Медичні засоби  для ЗСУ.JPG",
        "text": "Медичні засоби для ЗСУ. 2022-05-19."
    },
    {
        "name": "2022-05-24_Екіпірування  для ЗСУ-Північ.JPG",
        "text": "Екіпірування  для ЗСУ. Північ, 2022-05-24."
    },
    {
        "name": "2022-05-24_izha_dlya_vch_a7372_bryhady_25_ta_93.JPG",
        "text": "Їжа для в_ч а7372, бригади 25 та 93. 2022-05-24."
    },
    {
        "name": "2022-05-25_Гуманітарна допомога для діток-Харків.JPG",
        "text": "Гуманітарна допомога для діток. Харків, 2022-05-25."
    },
    {
        "name": "2022-05-27_Амуніція  для ЗСУ-Харків.JPG",
        "text": "Амуніція  для ЗСУ. Харків, 2022-05-27."
    },
    {
        "name": "2022-06-03_izha_dlya_vch_a7372_bryhady_25_ta_93.JPG",
        "text": "Їжа для в_ч а7372, бригади 25 та 93. 2022-06-03."
    },
    {
        "name": "2022-06-11_Каска та плита  для ССО-Південь_.JPG",
        "text": "Каска та плита  для ССО. Південь, 2022-06-11."
    },
    {
        "name": "2022-06-11_Каска та плита  для ССО-Південь.JPG",
        "text": "Каска та плита  для ССО. Південь, 2022-06-11."
    },
    {
        "name": "2022-06-11_Medykamenty_dlya_viyiskovykh-Pivden_.JPG",
        "text": "Медикаменти для військових. Південь, 2022-06-11."
    },
    {
        "name": "2022-06-11_Medykamenty_dlya_viyiskovykh-Pivden.JPG",
        "text": "Медикаменти для військових. Південь, 2022-06-11."
    },
    {
        "name": "2022-06-11_Плитоноски для ССО-Південь.JPG",
        "text": "Плитоноски для ССО. Південь, 2022-06-11."
    },
    {
        "name": "2022-06-12_Медикаменти для цивільних-Херсонська область.JPG",
        "text": "Медикаменти для цивільних. Херсонська область, 2022-06-12."
    },
    {
        "name": "2022-06-12_Медикаменти для цивільних-Херсонська область(1).JPG",
        "text": "Медикаменти для цивільних. Херсонська область, 2022-06-12."
    },
    {
        "name": "2022-06-12_Медикаменти для цивільних-Херсонська область1.JPG",
        "text": "Медикаменти для цивільних. Херсонська область, 2022-06-12."
    },
    {
        "name": "2022-06-12_Медикаменти для цивільних-Херсонська область2.JPG",
        "text": "Медикаменти для цивільних. Херсонська область, 2022-06-12."
    },
    {
        "name": "2022-06-14_ГО «Набат» допомога дітям зі статусом ВПО.JPG",
        "text": "ГО «Набат» допомога дітям зі статусом ВПО. 2022-06-14."
    },
    {
        "name": "2022-06-14_Medykamenty_dlya_17_tankovoi_bryhady.JPG",
        "text": "Медикаменти для 17 танкової бригади. 2022-06-14."
    },
    {
        "name": "2022-06-14_Medykamenty_dlya_17_tankovoi_bryhady1.JPG",
        "text": "Медикаменти для 17 танкової бригади. 2022-06-14."
    },
    {
        "name": "2022-06-15_Flyahy_dlya_65_artyleriynoi_bryhady.JPG",
        "text": "Фляги для 65 артилерійної бригади. 2022-06-15."
    },
    {
        "name": "2022-06-16_Амуніція для ТРО-Чернігівська область.JPG",
        "text": "Амуніція для ТРО. Чернігівська область, 2022-06-16."
    },
    {
        "name": "2022-06-16_Амуніція для ТРО-Чернігівська область1.JPG",
        "text": "Амуніція для ТРО. Чернігівська область, 2022-06-16."
    },
    {
        "name": "2022-06-20_Екіпірування  та тент для ППО-Херсонська область.JPG",
        "text": "Екіпірування та тент для ППО. Херсонська область, 2022-06-20."
    },
    {
        "name": "2022-06-28_izha_dlya_80DSHB-Donetska_oblast.JPG",
        "text": "Їжа для 80ДШБ. Донецька область, 2022-06-28."
    },
    {
        "name": "2022-06-28_izha_dlya_80DSHB-Donetska_oblast1.JPG",
        "text": "Їжа для 80ДШБ. Донецька область, 2022-06-28."
    },
    {
        "name": "2022-06-28_izha_dlya_80DSHB-Donetska_oblast2.JPG",
        "text": "Їжа для 80ДШБ. Донецька область, 2022-06-28."
    },
    {
        "name": "2022-06-28_izha_dlya_80DSHB-Donetska_oblast3.JPG",
        "text": "Їжа для 80ДШБ. Донецька область. 2022-06-28."
    },
    {
        "name": "2022-06-29_Екіпірування для ППО-Південь.JPG",
        "text": "Екіпірування для ППО. Південь, 2022-06-29."
    },
    {
        "name": "2022-06-30_2_А1008__1.JPG",
        "text": "2 дизельних генератори Gucbir CJD8000 H3 8, Інструменти (набір головок торцевих, викрутка з бітами, ключ розвідний), 2 Домкрати гідравлічні на 5т та Олива моторна Castrol для 2 стрілецького батальйону військової частини А1008__. 2022-06-30."
    },
    {
        "name": "2022-06-30_2_А1008__2.JPG",
        "text": "2 дизельних генератори Gucbir CJD8000 H3 8, Інструменти (набір головок торцевих, викрутка з бітами, ключ розвідний), 2 Домкрати гідравлічні на 5т та Олива моторна Castrol для 2 стрілецького батальйону військової частини А1008_. 2022-06-30."
    },
    {
        "name": "2022-06-30_2_А1008__3.JPG",
        "text": "2 дизельних генератори Gucbir CJD8000 H3 8, Інструменти (набір головок торцевих, викрутка з бітами, ключ розвідний), 2 Домкрати гідравлічні на 5т та Олива моторна Castrol для 2 стрілецького батальйону військової частини А1008. 2022-06-30."
    },
    {
        "name": "2022-06-30_Bronezhylet_dlya_biytsya_AZOV.JPG",
        "text": "Бронежилет для бійця АЗОВ. 2022-06-30."
    },
    {
        "name": "2022-07-02_Izha_dlya_ZSU-Doneka-oblast.JPG",
        "text": "Їжа для ЗСУ. Донецька область., 2022-07-02."
    },
    {
        "name": "2022-07-05_zha dlya ZSU-Skhid.JPG",
        "text": "Їжа для ЗСУ. Схід, 2022-07-05."
    },
    {
        "name": "2022-07-06_Медикаменти для лікарень Херсонщини.JPG",
        "text": "Медикаменти для лікарень Херсонщини. 2022-07-06."
    },
    {
        "name": "2022-07-11_Амуніція для Головного управління розвідки-Схід.JPG",
        "text": "Амуніція для Головного управління розвідки. Схід, 2022-07-11."
    },
    {
        "name": "2022-07-14_AmunItsIya dlya 210 okremogo spets.batali.JPG",
        "text": "Амуніція для 210 окремого спец.батальйону «Берлінго». Схід, 2022-07-14."
    },
    {
        "name": "2022-07-15_Izha dlya biytsiv u skhidnyy napryamok.JPG",
        "text": "Їжа для бійців у східний напрямок. 2022-07-15."
    },
    {
        "name": "2022-07-16_Каска для арт-розвідки-Схід.JPG",
        "text": "Каска для арт-розвідки. Схід, 2022-07-16."
    },
    {
        "name": "2022-07-17_Тактичні кросівки для 125 бригади-Північ.JPG",
        "text": "Тактичні кросівки для 125 бригади. Північ, 2022-07-17."
    },
    {
        "name": "2022-07-19_Іжа для біиців на південому напрямку.JPG",
        "text": "Їжа для бійців на південому напрямку. 2022-07-19."
    },
    {
        "name": "2022-07-22_Павербанки для біиців.JPG",
        "text": "Павербанки для бійців. 2022-07-22."
    },
    {
        "name": "2022-07-28_Квадрокоптер, планшети, тепловізор  для біиців 110 ОМБ у східному напрямку.JPG",
        "text": "Квадрокоптер, планшети, тепловізор  для бійців 110 ОМБ у східному напрямку. 2022-07-28."
    },
    {
        "name": "2022-07-30_Обладнення для біиців 110 ОМБ на східнии напрямок.JPG",
        "text": "Обладнення для бійців 110 ОМБ на східний напрямок. 2022-07-30."
    },
    {
        "name": "2022-08-03_Тактичні кросівки для  125 бригади.JPG",
        "text": "Тактичні кросівки для  125 бригади. 2022-08-03."
    },
    {
        "name": "2022-08-13_Іжа для біиців 17 танковоі бригади.JPG",
        "text": "Їжа для бійців 17 танкової бригади. 2022-08-13."
    },
    {
        "name": "2022-08-13_Маистер клас по створенню патріотичних листівок від Юліі Полюшко.JPG",
        "text": "Майстер клас по створенню патріотичних листівок від Юлії Полюшко. 2022-08-13."
    },
    {
        "name": "2022-07-23_Маистер-клас для дітеи по створенню патріотичних листівок.JPG",
        "text": "Майстер клас по створенню патріотичних листівок від Юлії Полюшко. 2022-08-13."
    },
    {
        "name": "2022-08-13_Тактичне спорядження для 210 окремого спеціалізованого батальиону.JPG",
        "text": "Тактичне спорядження для 210 окремого спеціалізованого батальйону «Берлінго». 2022-08-13."
    },
    {
        "name": "2022-08-16_Тактичне спорядження для 35 ОБМП.JPG",
        "text": "Тактичне спорядження для 35 ОБМП. 2022-08-16."
    },
    {
        "name": "2022-08-16_Тактичне спорядження для 35 ОБМП(1).JPG",
        "text": "Тактичне спорядження для 35 ОБМП. 2022-08-16."
    },
    {
        "name": "2022-08-17_Тактичне спорядження для біиця Азов.JPG",
        "text": "Тактичне спорядження для бійця «Азов». 2022-08-17."
    },
    {
        "name": "2022-08-17_Тактичне спорядження для біиця Азов(1).JPG",
        "text": "Тактичне спорядження для бійця «Азов». 2022-08-17."
    },
    {
        "name": "2022-08-22_Тактичне спорядження для розвідки.JPG",
        "text": "Тактичне спорядження для розвідки. 2022-08-22."
    },
    {
        "name": "2022-08-28_Тактичне спорядження для 210 окремого спеціалізованого батальиону.JPG",
        "text": "Тактичне спорядження для 210 окремого спеціалізованого батальйону «Берлінго». 2022-08-28."
    },
    {
        "name": "2022-08-29_Тактичне спорядження для біиця 80 ДШБ.JPG",
        "text": "Тактичне спорядження для бійця 80 ДШБ. 2022-08-29."
    },
    {
        "name": "2022-08-29_Тактичне спорядження для біиця 80 ДШБ(1).JPG",
        "text": "Тактичне спорядження для бійця 80 ДШБ. 2022-08-29."
    },
    {
        "name": "2022-08-31_Тактичне спорядження для біиця у східному напрямку.JPG",
        "text": "Тактичне спорядження для бійця у східному напрямку. 2022-08-31."
    },
    {
        "name": "2022-09-02_Тактичне спорядження для біиця.JPG",
        "text": "Тактичне спорядження для бійця. 2022-09-02."
    },
    {
        "name": "2022-09-04_Тактичне спорядження для біиця 80 ДШБ.JPG",
        "text": "Тактичне спорядження для бійця 80 ДШБ. 2022-09-04."
    },
    {
        "name": "2022-09-19_Провізія для біиців 80 ДШБ.JPG",
        "text": "Провізія для бійців 80 ДШБ. 2022-09-19."
    },
    {
        "name": "2022-09-21_Енергетичні батончики для біиців у південному напрямку.JPG",
        "text": "Енергетичні батончики для бійців у південному напрямку. 2022-09-21."
    },
    {
        "name": "2022-09-23_Провізія для біиців.JPG",
        "text": "Провізія для бійців. 2022-09-23."
    },
    {
        "name": "2022-09-25_Тактичне спорядження для біиців розвідки та Азов.JPG",
        "text": "Тактичне спорядження для бійців розвідки та Азов. 2022-09-25."
    },
    {
        "name": "2022-09-25_Тактичне спорядження для біиців розвідки та Азов(1).JPG",
        "text": "Тактичне спорядження для бійців розвідки та Азов. 2022-09-25."
    },
    {
        "name": "2022-09-25_Тактичне спорядження та провізія для біиців у південному напрямку.JPG",
        "text": "Тактичне спорядження та провізія для бійців у південному напрямку. 2022-09-25."
    },
    {
        "name": "2022-10-31_Тактичне спорядження та провізія для біиців 10 штурмовоі бригади.JPG",
        "text": "Тактичне спорядження та провізія для бійців 10 штурмової бригади. 2022-10-31."
    },
    {
        "name": "2023-01-08_Провізія та медикаменти  для біиців 125 бригади.JPG",
        "text": "Провізія та медикаменти для бійців 125 бригади. 2023-01-08."
    },
    {
        "name": "2023-01-10_допомога купівлі кіберрук для віиськового ССО Олександру Кулику.jpg",
        "text": "Допомога купівлі кіберрук для військового ССО Олександра Кулика. 2023-01-10."
    },
    {
        "name": "2023-03-08_Пікап на ЗСУ.JPG",
        "text": "Пікап на ЗСУ. 2023-03-08."
    },
    {
        "name": "2023-03-11_Монокуляр для біиця3 ОШБ.PNG",
        "text": "Монокуляр для бійця3 ОШБ. 2023-03-11."
    },
    {
        "name": "2023-03-23_Провізія  для біиців 4 бригади.JPG",
        "text": "Провізія для бійців 4 бригади. 2023-03-23."
    },
    {
        "name": "2023-04-01_Екіпірування для біиця ДФТГ.JPG",
        "text": "Екіпірування для бійця ДФТГ. 2023-04-01."
    },
    {
        "name": "2023-04-26_Провізія для 127 бригади .JPG",
        "text": "Провізія для 127 бригади. 2023-04-26."
    },
    {
        "name": "2023-04-29_маскувальні сітки для ЗСУ.JPG",
        "text": "Маскувальні сітки для ЗСУ. 2023-04-29."
    },
    {
        "name": "2023-05-30_підсилювач до антени для 4ОТБр .JPG",
        "text": "Підсилювач до антени для 4ОТБр . 2023-05-30."
    },
    {
        "name": "2023-06-04_провізія для 24ОМБр.JPG",
        "text": "Провізія для 24ОМБр. 2023-06-04."
    },
    {
        "name": "2023-06-05_пікап для Едельвеис.JPG",
        "text": "Пікап для Едельвейс. 2023-06-05."
    },
    {
        "name": "2023-06-15_зарядна станція та сонячні батареі для ППО.JPG",
        "text": "Зарядна станція та сонячні батареї для ППО. 2023-06-15."
    },
    {
        "name": "2023-07-03_маскувальні сітки для зенітно ракетноі бригади.JPG",
        "text": "Маскувальні сітки для зенітно ракетної бригади. 2023-07-03."
    },
    {
        "name": "2023-08-15_пульт для керування дрону для підрозділу ОЧІ.JPG",
        "text": "Пульт для керування дрону для підрозділу ОЧІ. 2023-08-15."
    },
    {
        "name": "2023-08-19_Автомобіль для 214ОСБ OPFOR.JPG",
        "text": "Автомобіль для 214ОСБ OPFOR. 2023-08-19."
    },
    {
        "name": "2023-10-26_Пікап для воінів у Запорізькому напрямку.JPG ",
        "text": "Пікап для воїнів у Запорізькому напрямку. 2023-10-26."
    },
    {
        "name": "2023-10-29_Avtomobil_dlya_15_artyleriyskoi_bryhady_Chornyy_Lis.JPG ",
        "text": "Автомобіль для 15 артилерійської бригади «Чорний Ліс». 2023-10-29."
    },
    {
        "name": "2023-11-17_Буржуики, раціі, теплии одяг, продукти для 24 ОМБр.JPG ",
        "text": "Буржуйки, рації, теплий одяг, продукти для 24-ї ОМБр. 2023-11-17."
    },
    {
        "name": "2023-11-17_Зарядні пристроі, хімічні грілки та продукти для 63 ОМБр.JPG ",
        "text": "Зарядні пристрої, хімічні грілки та продукти для 63-ї ОМБр. 2023-11-17."
    },
    {
        "name": "2023-11-17_Буржуики, раціі, теплии одяг, продукти 24 ОМБр.JPG ",
        "text": "Буржуйки, рації, теплий одяг, продукти 24-ї ОМБр. 2023-11-17."
    },
    {
        "name": "2023-11-17_дрони для Рарог 24 ОМБр.JPG ",
        "text": "Дрони для Рарог 24-ї ОМБр. 2023-11-17."
    },
    {
        "name": "2024-01-13_Гуманітарна допомога для 24 ОМБ.PNG ",
        "text": "Гуманітарна допомога для 24 ОМБ. 2024-01-13."
    },
    {
        "name": "2024-01-13_гуманітарна допомога для 80 ОДШБ.JPG ",
        "text": "Гуманітарна допомога для 80 ОДШБ. 2024-01-13."
    },
    {
        "name": "2024-01-13_Провізія для 10 ОГШБ Едельвеис.JPG ",
        "text": "Провізія для 10 ОГШБ Едельвейс. 2024-01-13."
    },
    {
        "name": "2024-01-13_Провізія для 67 ОМБ Правиі Сектор.JPG ",
        "text": "Провізія для 67 ОМБ «Правий Сектор». 2024-01-13."
    },
    {
        "name": "2024-01-22_автомобіль для ССО.PNG ",
        "text": "Автомобіль для ССО. 2024-01-22."
    },
    {
        "name": "2024-01-23_Екіпірування для біиця 45-окремоі артилеріиськоі бригади.PNG",
        "text": "Екіпірування для бійця 45-окремої артилерійської бригади. 2024-01-23."
    },
    {
        "name": "2024-02-12_Газові балони для 80 ДШБ.JPG",
        "text": "Газові балони для 80 ДШБ. 2024-02-12."
    },
    {
        "name": "2024-02-28_Окопні свічки для ЗСУ на Донецкому напрямку.JPG",
        "text": "Окопні свічки для ЗСУ на Донецькому напрямку. 2024-02-28."
    },
    {
        "name": "2024-02-29_Окопні свічки для 453 окремого піхотного 141 ОПБ.JPG",
        "text": "Окопні свічки для 453 окремого піхотного батальйон 141 ОПБ. 2024-02-29."
    },
    {
        "name": "2024-03-10_Окопні свічки для ЗСУ.JPG",
        "text": "Окопні свічки для ЗСУ. 2024-03-10."
    },
    {
        "name": "2024-03-10_Ремонт автомобіля для 3 ОШБ.PNG",
        "text": "Ремонт автомобіля для 3 ОШБ. 2024-03-10."
    },
    {
        "name": "2024-03-19_Бензопили,кірки, обігрівачі, лопати для роти безпілотних літаючих систем.JPG",
        "text": "Бензопили, кірки, обігрівачі, лопати для роти безпілотних літаючих систем. 2024-03-19."
    },
    {
        "name": "2024-05-24_Прилад нічного бачення для біців 68.PNG",
        "text": "Прилад нічного бачення для бійців 68 ОЄБ. 2024-05-24."
    },
    {
        "name": "2024-06-02_Керамічні плити для біця 80 ОДШБ.JPG",
        "text": "Керамічні плити для бійця 80 ОДШБ. 2024-06-02."
    },
    {
        "name": "2024-08-15_FPV дрони для ЗСУ.JPG",
        "text": "FPV дрони для ЗСУ. 2024-08-15."
    },
    {
        "name": "2024-08-24_20FPV для штурмового полку Цунамі.PNG",
        "text": "FPV для штурмового полку «Цунамі». 2024-08-24."
    },
    {
        "name": "2024-08-25_Провізі та 2 FPV дрони для Небесних соколів УДА.PNG",
        "text": "Провізія та 2 FPV дрони для «Небесних соколів» УДА. 2024-08-25."
    },
    {
        "name": "2024-08-28_FPV дрони ударних БпАК АХІЛЛЕС.PNG",
        "text": "FPV дрони для Батальйон ударних БпАК «АХІЛЛЕС» 92-Ї ОШБр ім. Івана Сірка. 2024-08-28."
    },
    {
        "name": "2024-08-29_ 20 FPV дронів та 1 дрон Mavic 3 Pro для 24 бригади.PNG",
        "text": "20 FPV дронів та 1 дрон Mavic 3 Pro для 24 бригади. 2024-08-29."
    },
    {
        "name": "2024-08-29_10 FPV (ППО) дронів, пікап L200 для 3 танковоі бригади.PNG",
        "text": "FPV (ППО) дронів, пікап L200 для 3-ї танкової бригади. 2024-08-29."
    },
    {
        "name": "2024-08-29_Пікап L200 для 3 окремо танково бригади.PNG",
        "text": "Пікап L200 для 3-тої окремої танкової бригади. 2024-08-29."
    },
    {
        "name": "2024-08-30_Передано 62 FPV дрони, 1 MAVIC Pro, 1 пікап L200, провізі для ЗСУ.PNG",
        "text": "Передано 62 FPV дрони, 1 MAVIC Pro, 1 пікап L200, провізія для ЗСУ. 2024-08-30."
    },
    {
        "name": "2024-09-26_Провізія-буреві.JPG",
        "text": "Провізія для 225-та ОШБ, 24-та ОМБр, 67-ма ОМБр, 3-тя ОШБ, 1-ша президентська Буревій. 2024-08-26."
    }
]

  const reportsHtml = reportsData.reverse().map(item => {
    const path = `./images/gallary/reports/${item.name}`;
    return `<div class="col-md-3 col-sm-4 col-6 py-2">
        <a href="#galleryModal" data-large-src="${path}" data-text="${item.text}" data-toggle="modal">
          <div class="img-wrapper" style="background-image: url('${path}');"></div>
        </a>
        <div class="img-description">${item.text}</div>
    </div>`
  });

  $('#reports-wrapper').append(reportsHtml.filter((item, index) => index < 12));
  $('.reports-wrapper-more').append(reportsHtml.filter((item, index) => index > 12));
