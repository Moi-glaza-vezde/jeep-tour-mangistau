//------------//---------------Маршруты
/*
//переводчик ---------------------------------------------------------

const headerTitle = {
   ru: 'Джип туры по Мангистау TripMangistau',
   en: 'Jeep tours of Mangystau TripMangistau',
   qz: 'Маңғыстау бойынша Джип турлар TripMangistau ',
};

const navItem1 = {
   ru: 'Главная',
   en: 'Main',
   qz: 'Басты',
};

const navItem2 = {
   ru: 'Услуги',
   en: 'Services',
   qz: 'Қызметтер',
};
const navItem3 = {
   ru: 'Маршруты',
   en: 'Routes',
   qz: 'Маршруттар',
};
const navItem4 = {
   ru: 'Туры',
   en: 'Tours',
   qz: 'Турлар',
};
const navItem5 = {
   ru: 'Галерея',
   en: 'Gallery',
   qz: 'Галерея',
};
const navItem6 = {
   ru: 'О компании',
   en: 'Сompany',
   qz: 'О компании',
};
const navItem7 = {
   ru: 'Контакты',
   en: 'Contacts',
   qz: 'Байланыс',
};
//Приемущества-------------------------------------
const advantagesTitle = {
   ru: 'Преимущества TripMangistau',
   en: 'Advantages of TripMangistau',
   qz: 'Артықшылықтары TripMangistau',
};
const advantagesText = {
   ru: 'Откройте для себя новые горизонты и получите незабываемые впечатления с нашими турами на внедорожниках! Мы предлагаем уникальные приключения, которые подарят вам массу эмоций и позволят увидеть удивительные места, недоступные обычным туристам',
   en: 'Discover new horizons and get an unforgettable experience with our off-road tours! We offer unique adventures that will give you a lot of emotions and allow you to see amazing places that are inaccessible to ordinary tourists',
   qz: 'Жаңа көкжиектерді ашыңыз және біздің жол талғамайтын турларымызбен ұмытылмас тәжірибе алыңыз! Біз сізге көптеген эмоциялар беретін және әдеттегідей қол жетімді емес таңғажайып жерлерді көруге мүмкіндік беретін ерекше шытырман оқиғаларды ұсынамыз туристерге',
};
const advantagesItemTitle1 = {
   ru: 'Проверенные временем',
   en: 'Time-tested',
   qz: 'Уақытпен тексерілген',
};
const advantagesItemText1 = {
   ru: 'Наша компания успешно работает на рынке туристических услуг уже 4 года.  За это время мы накопили богатый опыт, что позволяет нам организовывать туры на высшем уровне и гарантировать отличное качество обслуживания.',
   en: 'Our company has been successfully operating in the travel services market for 4 years.  During this time, we have accumulated a wealth of experience, which allows us to organize tours at the highest level and guarantee excellent quality of service.',
   qz: 'Біздің компания туристік қызметтер нарығында 4 жылдан бері табысты жұмыс істеп келеді.  Осы уақыт ішінде біз жоғары деңгейдегі турларды ұйымдастыруға және тамаша қызмет көрсету сапасына кепілдік беруге мүмкіндік беретін бай тәжірибе жинадық.',
};

const advantagesItemTitle2 = {
   ru: 'Приятные цены',
   en: 'Nice prices',
   qz: 'Жақсы бағалар',
};
const advantagesItemText2 = {
   ru: ' Мы предлагаем конкурентоспособные цены на наши туры, делая незабываемые путешествия доступными для каждого. У нас вы найдете отличное соотношение цены и качества.',
   en: 'We offer competitive prices for our tours, making unforgettable trips available to everyone. Here you will find excellent value for money.',
   qz: 'Біз турларымыздың бәсекеге қабілетті бағасын ұсынамыз, бұл ұмытылмас саяхаттарды барлығына қолжетімді етеді. Бізде сіз ақша үшін керемет құндылықты таба аласыз.',
};
const advantagesItemTitle3 = {
   ru: 'Доступ к удалённым и живописным местам',
   en: 'Access to remote and picturesque places',
   qz: 'Шалғай және көркем жерлерге қол жеткізу',
};
const advantagesItemText3 = {
   ru: 'Наши внедорожники позволяют добраться до самых укромных уголков природы, где вас ждут захватывающие горные пейзажи и величественные каньоны. Эти места поражают своей красотой и уникальностью.',
   en: 'Our off-road vehicles allow you to get to the most secluded corners of nature, where breathtaking mountain landscapes and majestic canyons await you. These places amaze with their beauty and uniqueness.',
   qz: 'Біздің жол талғамайтын көліктер табиғаттың ең оқшауланған бұрыштарына жетуге мүмкіндік береді, мұнда сізді керемет тау пейзаждары мен керемет каньондар күтеді. Бұл жерлер өздерінің сұлулығымен және бірегейлігімен таң қалдырады.',
};
const advantagesItemTitle4 = {
   ru: 'Безопасность и комфорт',
   en: 'Safety and comfort',
   qz: 'Қауіпсіздік және жайлылық',
};
const advantagesItemText4 = {
   ru: 'Мы используем современные внедорожники, оборудованные всем необходимым для безопасного и комфортного путешествия. Наши опытные гиды всегда готовы помочь и сделать ваше путешествие максимально приятным.',
   en: 'Our off-road vehicles allow you to get to the most secluded corners of nature, where breathtaking mountain landscapes and majestic canyons await you. These places amaze with their beauty and uniqueness.',
   qz: 'Біз қауіпсіз және жайлы саяхат үшін қажет нәрсенің бәрімен жабдықталған заманауи жол талғамайтын көліктерді пайдаланамыз. Біздің тәжірибелі гидтер әрқашан көмектесуге және сапарыңызды мүмкіндігінше жағымды етуге дайын.',
};
const advantagesItemTitle5 = {
   ru: 'Индивидуальный подход',
   en: 'Individual approach',
   qz: 'Жеке көзқарас',
};
const advantagesItemText5 = {
   ru: 'Мы предлагаем туры, адаптированные под ваши интересы и уровень подготовки. Независимо от того, являетесь ли вы любителем спокойных поездок или ищете адреналина, мы подберём маршрут, который идеально вам подойдёт.',
   en: 'We offer tours tailored to your interests and level of training. Regardless of whether you are a lover of relaxing trips or looking for adrenaline, we will choose the route that is perfect for you.',
   qz: 'Біз сіздің қызығушылықтарыңыз бен дайындық деңгейіңізге бейімделген турларды ұсынамыз. Сіз тыныш сапарлардың жанкүйері болсаңыз да, адреналин іздесеңіз де, біз сізге сәйкес келетін бағытты таңдаймыз.',
};

const advantagesItemTitle6 = {
   ru: 'Культурное обогащение',
   en: 'Cultural enrichment',
   qz: 'Мәдени байыту',
};
const advantagesItemText6 = {
   ru: 'Наши гиды познакомят вас с местной культурой и традициями, расскажут интересные факты о местах, которые вы посетите. Это не просто поездка, а настоящее культурное путешествие.',
   en: 'Our guides will introduce you to the local culture and traditions, tell you interesting facts about the places you will visit. This is not just a trip, but a real cultural journey.',
   qz: 'Біздің гидтер сізді жергілікті мәдениет пен дәстүрлермен таныстырады, Сіз баратын орындар туралы қызықты фактілерді айтады. Бұл жай ғана сапар емес, нағыз мәдени саяхат.',
};
const advantagesButton = {
   ru: 'написать менеджеру',
   en: 'write to the manager',
   qz: 'менеджерге жазыңыз',
};
//------------//---------------Маршруты

const routesTitle = {
   ru: 'Наши услуги:',
   en: 'Our services:',
   qz: 'Біздің қызметтер:',
};
const routesText = {
   ru: 'Маршруты по Мангистау',
   en: 'Routes in Mangystau',
   qz: 'Маңғыстау бойынша маршруттар',
};
const routeList1 = {
   ru: 'Маршрут 1',
   en: 'Route 1',
   qz: '1-Маршрут',
};
const routeList1Item1 = {
   ru: 'Торыш ( долина шаров )',
   en: 'Torysh ( valley of balls )',
   qz: 'Торыш (шарлар алқабы )',
};
const routeList1Item2 = {
   ru: 'Кокала ( глиняные горы причудливой формы и цвета )',
   en: 'Kokala ( clay mountains of bizarre shapes and colors )',
   qz: 'Кокала (біртүрлі пішінді және түсті сазды таулар )',
};
const routeList1Item3 = {
   ru: 'гора Шеркала',
   en: 'Mount Sherkala',
   qz: 'Шеркала тауы',
};
const routeList1Item4 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const routeList1Item5 = {
   ru: 'протяжённость 350-350 км, время 10 часов',
   en: 'length 350-350 km, time 10 hours',
   qz: 'ұзындығы 350-350 км, уақыты 10 сағат',
};
const routeList2 = {
   ru: 'Маршрут 2',
   en: 'Route 2',
   qz: '2-Маршрут',
};
const routeList2Item1 = {
   ru: 'каньён Капамсай',
   en: 'kanien Kapamsai',
   qz: 'каньен Қапамсай',
};
const routeList2Item2 = {
   ru: 'Шакпак ата ( мечеть в скале IX-X век )',
   en: 'Shakpak ata ( mosque in the rock IX-X century )',
   qz: 'Шақпақ ата (IX-X ғасыр жартасындағы мешіт )',
};
const routeList2Item3 = {
   ru: 'Шакпактысай ( урочище )',
   en: 'Shakpaktysai ( tract )',
   qz: 'Шақпақтысай (шатқал )',
};
const routeList2Item4 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const routeList2Item5 = {
   ru: 'Протяжёность 350-380 км, 10-11 часов',
   en: 'Length 350-380 km, 10-11 hours',
   qz: 'Ұзындығы 350-380 км, 10-11 сағат',
};
const routeList3 = {
   ru: 'Маршрут 3',
   en: 'Route 3',
   qz: '3-Маршрут',
};
const routeList3Item1 = {
   ru: 'Жыгылган ( провал-оползень )',
   en: 'Zhygylgan ( landslide failure )',
   qz: 'Жығылған (сәтсіздік-көшкін )',
};
const routeList3Item2 = {
   ru: 'Султан епе ( подземная мечеть IX-XII век )',
   en: 'Sultan yep ( underground mosque IX-XII century )',
   qz: 'Сұлтан епе (IX-XII ғасыр жерасты мешіті )',
};
const routeList3Item3 = {
   ru: 'Капамсай ( каньён )',
   en: 'Kapamsai ( canyon )',
   qz: 'Қапамсай (каньен )',
};
const routeList3Item4 = {
   ru: 'Шакпак-ата ( мечеть в скале IХ-XII век )',
   en: 'Shakpak-ata ( mosque in the rock of the IX-XIII century )',
   qz: 'Шақпақ ата (ІХ-ХІІ ғасыр жартасындағы мешіт )',
};
const routeList3Item5 = {
   ru: 'Протяжёность 350 км, 10 часов',
   en: 'Length 350 km, 10 hours',
   qz: 'Ұзындығы 350 км, 10 сағат',
};
const routeList4 = {
   ru: 'Маршрут 4',
   en: 'Route 4',
   qz: '4-Маршрут',
};
const routeList4Item1 = {
   ru: 'Султан епе ( подземная мечеть IX-XII век )',
   en: 'Sultan yep ( underground mosque IX-XII century )',
   qz: 'Сұлтан епе (IX-XII ғасыр жерасты мешіті )',
};
const routeList4Item2 = {
   ru: 'Жыгылган ( провал-оползень )',
   en: 'Zhygylgan ( landslide failure )',
   qz: 'Жығылған (сәтсіздік-көшкін )',
};
const routeList4Item3 = {
   ru: 'озеро Куздакары ( озеро в виде сердца )',
   en: 'Lake Kuzdakary ( lake in the form of a heart )',
   qz: 'Құмдақары көлі (жүрек түріндегі көл)',
};
const routeList4Item4 = {
   ru: 'Протяжёность 350 км, 10 часов',
   en: 'Length 350 km, 10 hours',
   qz: 'Ұзындығы 350 км, 10 сағат',
};
const routeList5 = {
   ru: 'Маршрут 5',
   en: 'Route 5',
   qz: '5-Маршрут',
};
const routeList5Item1 = {
   ru: 'озеро Куздакары ( озеро в виде сердца )',
   en: 'Lake Kuzdakary ( lake in the form of a heart )',
   qz: 'Құмдақары көлі (жүрек түріндегі көл)',
};
const routeList5Item2 = {
   ru: 'Капамсай ( каньён )',
   en: 'Kapamsai ( canyon )',
   qz: 'Қапамсай (каньен )',
};
const routeList5Item3 = {
   ru: 'Шакпак-ата ( мечеть в скале IХ-XII век )',
   en: 'Shakpak-ata ( mosque in the rock of the IX-XIII century )',
   qz: 'Шақпақ ата (ІХ-ХІІ ғасыр жартасындағы мешіт )',
};
const routeList5Item4 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const routeList5Item5 = {
   ru: 'Протяжёность 350-380 км, 10-12 часов',
   en: 'Length 350-380 km, 10-12 hours',
   qz: 'Ұзындығы 350-380 км, 10-12 сағат',
};
const routeList6 = {
   ru: 'Маршрут 6',
   en: 'Route 6',
   qz: '6-Маршрут',
};
const routeList6Item1 = {
   ru: 'Ыбыкты ( ажурный каньён )',
   en: 'Ybykty ( openwork canyon )',
   qz: 'Тілдер (ашық каньен )',
};
const routeList6Item2 = {
   ru: 'Караман ата ( подземная мечеть X-XII век )',
   en: 'Karaman ata ( underground mosque of the X-XII century )',
   qz: 'Караман Әли ( X-XII ғасыр жерасты мешіті )',
};
const routeList6Item3 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const routeList6Item4 = {
   ru: 'гора Шеркала',
   en: 'Mount Sherkala',
   qz: 'Шеркала тауы',
};
const routeList6Item5 = {
   ru: 'Протяжёность 350-380 км, 10-12 часов',
   en: 'Length 350-380 km, 10-12 hours',
   qz: 'Ұзындығы 350-380 км, 10-12 сағат',
};
const routeList7 = {
   ru: 'Маршрут 7',
   en: 'Route 7',
   qz: '7-Маршрут',
};
const routeList7Item1 = {
   ru: 'Ыбыкты ( ажурный каньён )',
   en: 'Ybykty ( openwork canyon )',
   qz: 'Тілдер (ашық каньен )',
};
const routeList7Item2 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const routeList7Item3 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const routeList7Item4 = {
   ru: 'Протяжёность 350-380 км, 10-12 часов',
   en: 'Length 350-380 km, 10-12 hours',
   qz: 'Ұзындығы 350-380 км, 10-12 сағат',
};
const routeList8 = {
   ru: 'Маршрут 8',
   en: 'Route 8',
   qz: '8-Маршрут',
};
const routeList8Item1 = {
   ru: 'Ыбыкты ( ажурный каньён )',
   en: 'Ybykty ( openwork canyon )',
   qz: 'Тілдер (ашық каньен )',
};
const routeList8Item2 = {
   ru: 'Караман ата ( подземная мечеть X-XII век )',
   en: 'Karaman ata ( underground mosque of the X-XII century )',
   qz: 'Караман Әли ( X-XII ғасыр жерасты мешіті )',
};
const routeList8Item3 = {
   ru: 'Протяжёность 200-250 км, 6-8 часов',
   en: 'Length 200-250 km, 6-8 hours',
   qz: 'Ұзындығы 200-250 км, 6-8 сағат',
};
const routeList9 = {
   ru: 'Маршрут 9',
   en: 'Route 9',
   qz: '9-Маршрут',
};
const routeList9Item1 = {
   ru: 'сор Тузбаир ( солончак, расположен у основания плато Устюрт ) верхняя и нижняя локации',
   en: 'sor Tuzbair ( salt marsh, located at the base of the Ustyurt plateau ) upper and lower locations',
   qz: 'сор Тузбайыр (тұзды батпақ, Үстірт үстіртінің түбінде орналасқан) жоғарғы және төменгі орындар',
};
const routeList9Item2 = {
   ru: 'Протяжёность 600-650 км, 12-14 часов',
   en: 'Length 600-650 km, 12-14 hours',
   qz: 'Ұзындығы 600-650 км, 12-14 сағат',
};
const routeList10 = {
   ru: 'Маршрут 10',
   en: 'Route 10',
   qz: '10-Маршрут',
};
const routeList10Item1 = {
   ru: 'урочище Бозжира (три верхние локации)',
   en: 'Bozzhira tract (three upper locations)',
   qz: 'Бозжира трактаты (жоғарғы үш орын)',
};
const routeList10Item2 = {
   ru: 'Кызылкум ( Тирамису, разноцветные, слоенные горы)',
   en: 'Kizylkum (Tiramisu, raznotsvetnye, layered mountains)',
   qz: 'Қызылқұм ( Тирамису, түрлі-түсті, қабатты таулар)',
};
const routeList10Item3 = {
   ru: 'Протяжёность 600-650 км, 12-14 часов',
   en: 'Length 600-650 km, 12-14 hours',
   qz: 'Ұзындығы 600-650 км, 12-14 сағат',
};
const routeList11 = {
   ru: 'Маршрут 11',
   en: 'Route 11',
   qz: '11-Маршрут',
};
const routeList11Item1 = {
   ru: 'Бозжира ( 2 верхние понароммы, и средняя, клыки, вид сверху )',
   en: 'Bozzhira ( 2 upper ponaroms, and the middle one, fangs, top view )',
   qz: 'Бозжира ( 2 жоғарғы понароммалар, ал ортаңғы, азу тістер, жоғарыдан көрініс )',
};
const routeList11Item2 = {
   ru: 'Кызылкум ( Тирамису, разноцветные, слоенные горы)',
   en: 'Kizylkum (Tiramisu, raznotsvetnye, layered mountains)',
   qz: 'Қызылқұм ( Тирамису, түрлі-түсті, қабатты таулар)',
};
const routeList11Item3 = {
   ru: 'Протяжёность 600-650 км, 12-14 часов',
   en: 'Length 600-650 km, 12-14 hours',
   qz: 'Ұзындығы 600-650 км, 12-14 сағат',
};
const routeList12 = {
   ru: 'Маршрут 12',
   en: 'Route 12',
   qz: '12-Маршрут',
};
const routeList12Item1 = {
   ru: 'Кызылкуп ( Тирамису, разноцветные, слоенные горы)',
   en: 'Kizylkup (Tiramisu, raznotsvetnye, layered mountains)',
   qz: 'Қызылқұп ( Тирамису, түрлі-түсті, қабатты таулар)',
};
const routeList12Item2 = {
   ru: 'гора Бокты (изображена на купюре 1000 тенге)',
   en: 'Mount Bokty (depicted on the 1000 tenge bill)',
   qz: 'Боқты тауы (1000 теңге купюрада бейнеленген)',
};
const routeList12Item3 = {
   ru: 'Бозжира нижняя локация (клыки с низу)',
   en: 'Bozzhira lower location (fangs from the bottom)',
   qz: 'Бозжира төменгі орналасуы (төменгі жағынан азу тістер)',
};
const routeList12Item4 = {
   ru: 'урочище Бозжира ( верхние панораммы )',
   en: 'Boszhira tract ( upper panoramas )',
   qz: 'Босжир трактаты ( жоғарғы панорамалар )',
};
const routeList12Item5 = {
   ru: 'Протяжёность 650-700 км, 12-14 часов',
   en: 'Length 650-700 km, 12-14 hours',
   qz: 'Ұзындығы 650-700 км, 12-14 сағат',
};
const routeList13 = {
   ru: 'Маршрут 13',
   en: 'Route 13',
   qz: '13-Маршрут',
};
const routeList13Item1 = {
   ru: 'Шопан ата ( мечеть подземная, некрополь X-XII век )',
   en: 'Shopan ata (underground mosque, necropolis of the X-XII century )',
   qz: 'Шопан ата (жерасты мешіті, X-XII ғасыр қорымы )',
};
const routeList13Item2 = {
   ru: 'Бекет ата ( подземная мечеть, святое место паломничества )',
   en: 'Beket ata (underground mosque, holy place of pilgrimage )',
   qz: 'Бекет ата (жерасты мешіті, қасиетті қажылық орны )',
};
const routeList13Item3 = {
   ru: 'Бозжира верхние локации',
   en: 'Bozzhira upper locations',
   qz: 'Бозжира жоғарғы орындар',
};
const routeList13Item4 = {
   ru: 'Протяжёность 650-680 км, 12-14 часов',
   en: 'Length 650-680 km, 12-14 hours',
   qz: 'Ұзындығы 650-680 км, 12-14 сағат',
};
const routeList14 = {
   ru: 'Маршрут 14',
   en: 'Route 14',
   qz: '14-Маршрут',
};
const routeList14Item1 = {
   ru: 'Мыс Песчаный ( барханы, пляж )',
   en: 'Sandy Cape ( dunes, beach )',
   qz: 'Құмды мүйіс ( бархандар, жағажай)',
};
const routeList14Item2 = {
   ru: 'Протяжёность 100-120 км, 2-2,5 часов',
   en: 'Length 100-120 km, 2-2,5 hours',
   qz: 'Ұзындығы 100-120 км, 2-2,5 сағат',
};
const routeList15 = {
   ru: 'Маршрут 15',
   en: 'Route 15',
   qz: '15-Маршрут',
};
const routeList15Item1 = {
   ru: 'Отдых на безлюдном пляже на выбор Саура, Голубая бухта (тент, стол, кресла, посуда, мангал, шампура предоставляем)',
   en: 'Rest on a deserted beach to choose from Saura, Blue Bay (awning, table, chairs, dishes, barbecue, skewers are provided)',
   qz: 'Саура, Көк шығанағы (шатыр, үстел, креслолар, ыдыс-аяқ, барбекю, шашлык)таңдау үшін қаңырап бос жағажайда демалыңыз',
};
const routeList15Item2 = {
   ru: 'Протяжёность 100-120 км, 2-2,5 часов',
   en: 'Length 100-120 km, 2-2,5 hours',
   qz: 'Ұзындығы 100-120 км, 2-2,5 сағат',
};
const routeButton = {
   ru: 'подобрать маршрут',
   en: 'choose a route',
   qz: 'маршрутты таңдаңыз',
};
//---------Туры
const toursTitle = {
   ru: 'Многодневные джип-туры по Мангистау: Погружение в мир приключений',
   en: 'Multi-day jeep tours of Mangystau: Dive into the world of adventure',
   qz: 'Маңғыстау бойынша көпкүндік джип-турлар: шытырман оқиғалар әлеміне ену',
};
const toursText = {
   ru: 'Приглашаем вас отправиться в увлекательное многодневное путешествие по загадочному и живописному региону Мангистау! Наши джип-туры предлагают уникальную возможность глубже узнать этот удивительный край и насладиться его природными и культурными богатствами.',
   en: 'We invite you to embark on an exciting multi-day journey through the mysterious and picturesque region of Mangystau! Our jeep tours offer a unique opportunity to get to know this amazing region more deeply and enjoy its natural and cultural riches.',
   qz: 'Сіздерді Маңғыстаудың жұмбақ және көркем өңірі бойынша қызықты көпкүндік сапарға шығуға шақырамыз! Біздің джип турларымыз осы таңғажайып аймақты тереңірек білуге және оның табиғи және мәдени байлығынан ләззат алуға бірегей мүмкіндік береді.',
};
const toursList1 = {
   ru: '2-дневный тур.',
   en: '2-day tour.',
   qz: '2 күндік тур.',
};
const toursList1Item1 = {
   ru: '1-й день',
   en: 'Day 1',
   qz: '1-ші күн',
};
const toursList1Item2 = {
   ru: 'Шакпак ата ( мечеть XII-XIV, вырубленная в скале )',
   en: 'Shakpak ata (mosque XII-XIV, carved into the rock )',
   qz: 'Шақпақ ата (жартаста ойылған XII-XIV мешіт )',
};
const toursList1Item3 = {
   ru: 'каньён Капамсай',
   en: 'сanyon Kapamsai',
   qz: 'каньен Қапамсай',
};
const toursList1Item4 = {
   ru: 'провал Жыгылган ( огромный геологический оползень )',
   en: 'Zhygylgan sinkhole ( huge geological landslide )',
   qz: 'жығылғанның сәтсіздігі (орасан зор геологиялық көшкін )',
};
const toursList1Item5 = {
   ru: 'озеро Куздыкары ( в виде сердечка ) ',
   en: 'Lake Kuzdykary ( in the form of a heart )',
   qz: 'Куздыкары көлі (жүрек түрінде )',
};
const toursList1Item6 = {
   ru: 'каньён Саура ( небольшое пресноводное озерцо с черепашками )',
   en: 'Saura Canyon ( a small freshwater lake with turtles )',
   qz: 'Каньен Саура (тасбақалары бар шағын Тұщы су көлі )',
};
const toursList1Item7 = {
   ru: 'ночлег на берегу моря, песчаный пляж, любуемся закатом',
   en: 'overnight on the seashore, sandy beach, watching the sunset',
   qz: 'теңіз жағасында, құмды жағажайда, күннің батуын тамашалаңыз',
};
const toursList1Item8 = {
   ru: '2-й день',
   en: 'Day 2',
   qz: '2-ші күн',
};
const toursList1Item9 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const toursList1Item10 = {
   ru: 'урочище Кокала ( разноцветные глиняные горы причудливой формы, окаменелые отпечатки папоротника юрского периода )',
   en: 'Kokala tract (multicolored clay mountains of bizarre shape, fossilized prints of Jurassic fern)',
   qz: 'Кокала трактаты ( түрлі-түсті сазды таулар, Юра папоротнигінің Тасқа айналған іздері )',
};
const toursList1Item11 = {
   ru: 'гора Шеркала',
   en: 'Mount Sherkala',
   qz: 'Шеркала тауы',
};
const toursList1Item12 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const toursList1Item13 = {
   ru: 'возвращение в город',
   en: 'Return to the city',
   qz: 'қалаға оралу',
};

const toursList2 = {
   ru: '2-дневный тур.',
   en: '2-day tour.',
   qz: '2 күндік тур.',
};
const toursList2Item1 = {
   ru: '1-й день',
   en: 'Day 1',
   qz: '1-ші күн',
};
const toursList2Item2 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const toursList2Item3 = {
   ru: 'урочище Кокала ( разноцветные глиняные горы причудливой формы, окаменелые отпечатки папоротника юрского периода )',
   en: 'Kokala tract (multicolored clay mountains of bizarre shape, fossilized prints of Jurassic fern)',
   qz: 'Кокала трактаты ( түрлі-түсті сазды таулар, Юра папоротнигінің Тасқа айналған іздері )',
};
const toursList2Item4 = {
   ru: 'гора Шеркала',
   en: 'Mount Sherkala',
   qz: 'Шеркала тауы',
};
const toursList2Item5 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const toursList2Item6 = {
   ru: 'ночлег ( по желанию клиента,за небольшую доп. плату можно  переночевать в юрте, в этноауле )',
   en: 'overnight stay ( at the request of the client, for a small additional fee, you can spend the night in a yurt, in an ethnic village )',
   qz: 'түнде тұру (Клиенттің өтініші бойынша, қосымша ақыға киіз үйде, этноауылда түнеуге болады )',
};
const toursList2Item7 = {
   ru: '2-й день',
   en: 'Day 2',
   qz: '2-ші күн',
};
const toursList2Item8 = {
   ru: 'Кызылкуп ( Тирамису, разноцветные, слоенные горы)',
   en: 'Kizylkup (Tiramisu, raznotsvetnye, layered mountains)',
   qz: 'Қызылқұп ( Тирамису, түрлі-түсті, қабатты таулар)',
};
const toursList2Item9 = {
   ru: 'гора Бокты ( изображена на купюре 1000 тенге )',
   en: 'Mount Bokty ( depicted on the 1000 tenge bill )',
   qz: 'Боқты тауы (1000 теңге купюрада бейнеленген )',
};

const toursList2Item10 = {
   ru: 'урочище Бозжира ( 2 верхние локации )',
   en: 'Bozzhira tract ( 2 upper locations )',
   qz: 'Бозжир шатқалы ( 2 жоғарғы орын )',
};
const toursList2Item11 = {
   ru: 'возвращение в город',
   en: 'Return to the city',
   qz: 'қалаға оралу',
};

const toursList3 = {
   ru: '3-х дневный тур',
   en: '3-day tour',
   qz: '3 күндік тур',
};
const toursList3Item1 = {
   ru: '1-й день',
   en: 'Day 1',
   qz: '1-ші күн',
};
const toursList3Item2 = {
   ru: 'Шакпактысай',
   en: 'Shakpaktysai',
   qz: 'Шақпақтысай',
};
const toursList3Item3 = {
   ru: 'Шакпак ата ( мечеть XII-XIV, вырубленная в скале )',
   en: 'Shakpak ata (mosque XII-XIV, carved into the rock )',
   qz: 'Шақпақ ата (жартаста ойылған XII-XIV мешіт )',
};
const toursList3Item4 = {
   ru: 'каньён Капамсай',
   en: 'сanyon Kapamsai',
   qz: 'каньен Қапамсай',
};

const toursList3Item5 = {
   ru: 'провал Жыгылган ( огромный геологический оползень )',
   en: 'Zhygylgan sinkhole ( huge geological landslide )',
   qz: 'жығылғанның сәтсіздігі (орасан зор геологиялық көшкін )',
};
const toursList3Item6 = {
   ru: 'каньён Саура ( небольшое пресноводное озерцо с черепашками )',
   en: 'Saura Canyon ( a small freshwater lake with turtles )',
   qz: 'Каньен Саура (тасбақалары бар шағын Тұщы су көлі )',
};
const toursList3Item7 = {
   ru: 'Ночёвка на берегу моря, наслаждаемся закатом',
   en: 'Overnight by the sea, enjoying the sunset',
   qz: 'Теңіз жағасында түнеу, күннің батуын тамашалаңыз',
};
const toursList3Item8 = {
   ru: '2-й день',
   en: 'Day 2',
   qz: '2-ші күн',
};
const toursList3Item9 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const toursList3Item10 = {
   ru: 'урочище Кокала ( разноцветные глиняные горы причудливой формы, окаменелые отпечатки папоротника юрского периода )',
   en: 'Kokala tract (multicolored clay mountains of bizarre shape, fossilized prints of Jurassic fern)',
   qz: 'Кокала трактаты ( түрлі-түсті сазды таулар, Юра папоротнигінің Тасқа айналған іздері )',
};
const toursList3Item11 = {
   ru: 'гора Шеркала',
   en: 'Mount Sherkala',
   qz: 'Шеркала тауы',
};

const toursList3Item12 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const toursList3Item13 = {
   ru: 'Ночлег в долине замков, по желанию можно организовать ночлег в юртах  этноауле за небольшую доп плату 10-13  тыс. тенге с чел.',
   en: 'Overnight in the valley of castles, if desired, you can arrange an overnight stay in the yurts of the ethnoaule for a small additional fee of 10-13 thousand tenge per person.',
   qz: 'Құлып алқабында түнеу, қалауы бойынша этноауыл киіз үйлерінде шағын қосымша ақыға бір адамға 10-13 мың теңге тұруға болады.',
};

const toursList3Item14 = {
   ru: '3-й день',
   en: 'Day 3',
   qz: '3-ші күн',
};
const toursList3Item15 = {
   ru: 'Кызылкуп ( Тирамису, разноцветные, слоенные горы)',
   en: 'Kizylkup (Tiramisu, raznotsvetnye, layered mountains)',
   qz: 'Қызылқұп ( Тирамису, түрлі-түсті, қабатты таулар)',
};
const toursList3Item16 = {
   ru: 'гора Бокты ( изображена на купюре 1000 тенге )',
   en: 'Mount Bokty ( depicted on the 1000 tenge bill )',
   qz: 'Боқты тауы (1000 теңге купюрада бейнеленген )',
};
const toursList3Item17 = {
   ru: 'Урочище Бозжира ( верхние смотровые 2 ) и если успеем на выбор нижняя локация бозжиры (клыки) или песчаные барханы, дюны.',
   en: 'Bozzhira tract (upper observation 2) and if we have time to choose the lower location of bozzhira (fangs) or sand dunes, dunes.',
   qz: 'Бозжира трактаты (жоғарғы қарау 2 ) және егер біз таңдауға үлгерсек бозжираның төменгі орны (азу тістер) немесе құм төбелері, төбелер.',
};
const toursList4 = {
   ru: '4-х дневный тур',
   en: '4-day tour',
   qz: '4 күндік тур',
};
const toursList4Item1 = {
   ru: '1-й день',
   en: 'Day 1',
   qz: '1-ші күн',
};
const toursList4Item2 = {
   ru: 'каньён Капамсай',
   en: 'сanyon Kapamsai',
   qz: 'каньен Қапамсай',
};
const toursList4Item3 = {
   ru: 'Шакпак ата ( мечеть XII-XIV, вырубленная в скале )',
   en: 'Shakpak ata (mosque XII-XIV, carved into the rock )',
   qz: 'Шақпақ ата (жартаста ойылған XII-XIV мешіт )',
};
const toursList4Item4 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const toursList4Item5 = {
   ru: 'урочище Кокала ( разноцветные глиняные горы причудливой формы, окаменелые отпечатки папоротника юрского периода )',
   en: 'Kokala tract (multicolored clay mountains of bizarre shape, fossilized prints of Jurassic fern)',
   qz: 'Кокала трактаты ( түрлі-түсті сазды таулар, Юра папоротнигінің Тасқа айналған іздері )',
};
const toursList4Item6 = {
   ru: 'гора Шеркала',
   en: 'Mount Sherkala',
   qz: 'Шеркала тауы',
};
const toursList4Item7 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const toursList4Item8 = {
   ru: 'Ночлег в долине замков, по желанию можно организовать ночлег в юртах  этноауле ( отель в национальном казахском стиле )',
   en: 'Overnight in the valley of castles, if desired, you can arrange an overnight stay in the yurts of the ethnoaule (a hotel in the national Kazakh style)',
   qz: 'Құлып алқабында түнеп, қалауыңыз бойынша этноауылда ( ұлттық қазақ стиліндегі қонақ үй )түн ұйымдастыруға болады',
};
const toursList4Item9 = {
   ru: '2-й день',
   en: 'Day 2',
   qz: '2-ші күн',
};
const toursList4Item10 = {
   ru: 'каньён Каратау ( чёрный взъерошенный каньён )',
   en: 'Karatau Canyon ( black ruffled canyon )',
   qz: 'Қаратау каньені (қара бұдырлы каньен )',
};
const toursList4Item11 = {
   ru: 'сор Тузбаир ( большой солончак у основания плато Устюрт, с удивительно красивыми меловыми чинками ) ночлег',
   en: 'sor Tuzbair (a large salt marsh at the base of the Ustyurt plateau, with amazingly beautiful chalk chinks ) Overnight stay',
   qz: 'сор Тузбайыр (Үстірт үстіртінің түбіндегі үлкен тұзды батпақ, таңғажайып әдемі бор чинкалары бар ) түнеу',
};
const toursList4Item12 = {
   ru: '3-й день',
   en: 'Day 3',
   qz: '3-ші күн',
};
const toursList4Item13 = {
   ru: 'Кызылкуп ( Тирамису, разноцветные, слоенные горы)',
   en: 'Kizylkup (Tiramisu, raznotsvetnye, layered mountains)',
   qz: 'Қызылқұп ( Тирамису, түрлі-түсті, қабатты таулар)',
};
const toursList4Item14 = {
   ru: 'гора Бокты ( изображена на купюре 1000 тенге )',
   en: 'Mount Bokty ( depicted on the 1000 tenge bill )',
   qz: 'Боқты тауы (1000 теңге купюрада бейнеленген )',
};
const toursList4Item15 = {
   ru: 'Урочище Бозжира нижняя локация ( ночлег )',
   en: 'Bozzhira tract lower location ( overnight stay )',
   qz: 'Бозжира трактаты төменгі орын (түнеу )',
};
const toursList4Item16 = {
   ru: '4-й день',
   en: 'Day 4',
   qz: '4-ші күн',
};
const toursList4Item17 = {
   ru: 'Урочище Бозжира ( верхние смотровые 2 )',
   en: 'Bozzhira tract ( upper observation rooms 2 )',
   qz: 'Бозжир шатқалы ( жоғарғы қарау 2 )',
};
const toursList4Item18 = {
   ru: 'песчаные барханы Туесу "дюны"',
   en: 'sand dunes of Tuesu "dunes"',
   qz: 'Туесу құмды барқыттары"төбелер"',
};
const toursList4Item19 = {
   ru: 'впадина Карагие',
   en: 'Karagie depression',
   qz: 'Қарағай ойпаты',
};
const toursList4Item20 = {
   ru: 'возвращение в город',
   en: 'Return to the city',
   qz: 'қалаға оралу',
};
const toursList5 = {
   ru: '5-ти дневный тур',
   en: '5-day tour',
   qz: '5 күндік тур',
};
const toursList5Item1 = {
   ru: '1-й день',
   en: 'Day 1',
   qz: '1-ші күн',
};
const toursList5Item2 = {
   ru: 'Шакпактысай',
   en: 'Shakpaktysai',
   qz: 'Шақпақтысай',
};
const toursList5Item3 = {
   ru: 'Шакпак ата ( мечеть XII-XIV, вырубленная в скале )',
   en: 'Shakpak ata (mosque XII-XIV, carved into the rock )',
   qz: 'Шақпақ ата (жартаста ойылған XII-XIV мешіт )',
};
const toursList5Item4 = {
   ru: 'каньён Капамсай',
   en: 'сanyon Kapamsai',
   qz: 'каньен Қапамсай',
};
const toursList5Item5 = {
   ru: 'провал Жыгылган ( огромный геологический оползень )',
   en: 'Zhygylgan sinkhole ( huge geological landslide )',
   qz: 'жығылғанның сәтсіздігі (орасан зор геологиялық көшкін )',
};
const toursList5Item6 = {
   ru: 'Саура ( небольшой каньён с озером где обитают пресноводные черепашки ))',
   en: 'Saura ( a small canyon with a lake where freshwater turtles live )',
   qz: 'Саура (Тұщы су тасбақалары мекендейтін көлі бар шағын каньен )',
};
const toursList5Item7 = {
   ru: 'Ночёвка на берегу моря, наслаждаемся закатом',
   en: 'Overnight by the sea, enjoying the sunset',
   qz: 'Теңіз жағасында түнеу, күннің батуын тамашалаңыз',
};
const toursList5Item8 = {
   ru: '2-й день',
   en: 'Day 2',
   qz: '2-ші күн',
};
const toursList5Item9 = {
   ru: 'Торыш ( долина шаровых конкреций )',
   en: 'Torysh (valley of globular nodules )',
   qz: 'Торыш ( шар тәрізді түйіндер алқабы )',
};
const toursList5Item10 = {
   ru: 'урочище Кокала ( разноцветные глиняные горы причудливой формы, окаменелые отпечатки папоротника юрского периода )',
   en: 'Kokala tract (multicolored clay mountains of bizarre shape, fossilized prints of Jurassic fern)',
   qz: 'Кокала трактаты ( түрлі-түсті сазды таулар, Юра папоротнигінің Тасқа айналған іздері )',
};
const toursList5Item11 = {
   ru: 'гора Шеркала',
   en: 'Mount Sherkala',
   qz: 'Шеркала тауы',
};
const toursList5Item12 = {
   ru: 'Айракты-Шоманай ( долина замков )',
   en: 'Airakty-Shomanai ( valley of castles )',
   qz: 'Айрақты-Шоманай (сарайлар аңғары )',
};
const toursList5Item13 = {
   ru: 'Ночлег в долине замков, по желанию можно организовать ночлег в юртах  этноауле ( отель в национальном казахском стиле )',
   en: 'Overnight in the valley of castles, if desired, you can arrange an overnight stay in the yurts of the ethnoaule (a hotel in the national Kazakh style)',
   qz: 'Құлып алқабында түнеп, қалауыңыз бойынша этноауылда ( ұлттық қазақ стиліндегі қонақ үй )түн ұйымдастыруға болады',
};
const toursList5Item14 = {
   ru: '3-й день',
   en: 'Day 3',
   qz: '3-ші күн',
};
const toursList5Item15 = {
   ru: 'каньён Каратау ( чёрный взъерошенный каньён )',
   en: 'Karatau Canyon ( black ruffled canyon )',
   qz: 'Қаратау каньені (қара бұдырлы каньен )',
};
const toursList5Item16 = {
   ru: 'сор Тузбаир ( большой солончак у основания плато Устюрт, с удивительно красивыми меловыми чинками ) ночлег',
   en: 'sor Tuzbair (a large salt marsh at the base of the Ustyurt plateau, with amazingly beautiful chalk chinks ) Overnight stay',
   qz: 'сор Тузбайыр (Үстірт үстіртінің түбіндегі үлкен тұзды батпақ, таңғажайып әдемі бор чинкалары бар ) түнеу',
};
const toursList5Item17 = {
   ru: '4-й день',
   en: 'Day 4',
   qz: '4-ші күн',
};
const toursList5Item18 = {
   ru: 'Кызылкуп ( Тирамису, разноцветные, слоенные горы)',
   en: 'Kizylkup (Tiramisu, raznotsvetnye, layered mountains)',
   qz: 'Қызылқұп ( Тирамису, түрлі-түсті, қабатты таулар)',
};
const toursList5Item19 = {
   ru: 'гора Бокты ( изображена на купюре 1000 тенге )',
   en: 'Mount Bokty ( depicted on the 1000 tenge bill )',
   qz: 'Боқты тауы (1000 теңге купюрада бейнеленген )',
};
const toursList5Item20 = {
   ru: 'Урочище Бозжира нижняя локация ( ночлег )',
   en: 'Boszhira tract lower location ( overnight stay )',
   qz: 'Босжир трактаты төменгі орын (түнеу )',
};
const toursList5Item21 = {
   ru: '5-й день',
   en: 'Day 5',
   qz: '5-ші күн',
};
const toursList5Item22 = {
   ru: 'Урочище Бозжира ( верхние смотровые 2 )',
   en: 'Bozzhira tract ( upper observation rooms 2 )',
   qz: 'Бозжир шатқалы ( жоғарғы қарау 2 )',
};
const toursList5Item23 = {
   ru: 'песчаные барханы Туесу "дюны"',
   en: 'sand dunes of Tuesu "dunes"',
   qz: 'Туесу құмды барқыттары"төбелер"',
};
const toursList5Item24 = {
   ru: 'впадина Карагие',
   en: 'Karagie depression',
   qz: 'Қарағай ойпаты',
};
const toursList5Item25 = {
   ru: 'возвращение в город',
   en: 'Return to the city',
   qz: 'қалаға оралу',
};

const toursButton = {
   ru: 'подобрать тур',
   en: 'pick up a tour',
   qz: 'турды таңдаңыз',
};
//----------Галерея-----------

const galleryTitle = {
   ru: 'С нашими турами по Мангистау, вы увидите такие места как:',
   en: 'With our tours of Mangystau, you will see places such as:',
   qz: 'Маңғыстау бойынша турларымызбен сіз келесі орындарды көресіз:',
};

const galleryItem1 = {
   ru: 'Бозжыра',
   en: 'Bozzhyra',
   qz: 'Бозжыр',
};
const galleryItem2 = {
   ru: 'Кызылкуп',
   en: 'Kyzylkup',
   qz: 'Қызылқұп',
};
const galleryItem3 = {
   ru: 'Айракты-Шоманай',
   en: 'Airakty-Shomanai',
   qz: 'Айрақты-Шоманай',
};
const galleryItem4 = {
   ru: 'Долина Торыш',
   en: 'Torysh Valley',
   qz: 'Торыш Аңғары',
};
const galleryItem5 = {
   ru: 'Заповедник Карынжарык',
   en: 'Karynzharyk Nature Reserve',
   qz: 'Қарынжарық Қорығы',
};
const galleryItem6 = {
   ru: 'Каньон Ыбыкты',
   en: 'Ybykty Canyon',
   qz: 'Каньон Тілдері',
};
// О компании
const companyTitle = {
   ru: 'О компании TripMangistau',
   en: 'About TripMangistau',
   qz: 'TripMangistau компаниясы туралы',
};
const companyText1 = {
   ru: 'Наличие в Мангистауской области Казахстана, множества красивых и уникальных мест для туризма и отдыха, всегда заставляет задуматься над наиболее удобным, свободным и комфортным способом путешествия к ним. Труднодоступность, вызванная состоянием дорог, делает недосягаемым посещение для групповых автобусных туров некоторых чрезвычайно интересных мест. Потому путешествуя на внедорожнике открывается намного больше возможных маршрутов для общения с природой. Именно этим занимается наша компания TripMangistau, организация индивидуальных джип-туров. Поездка в небольшой компании родных, друзей, коллег лишено излишней суетливости свойственной большим группам. Индивидуальные туры на внедорожниках выбраны нами как наиболее удобный и комфортный способ для туристических поездок и экскурсий, позволяющий увидеть и посетить многие имеющиеся удивительные достопримечательности Казахстана.',
   en: 'The presence of many beautiful and unique places for tourism and recreation in the Mangystau region of Kazakhstan always makes you think about the most convenient, free and comfortable way to travel to them. The inaccessibility caused by the condition of the roads makes it unattainable for group bus tours to visit some extremely interesting places. Therefore, traveling by SUV opens up a lot more possible routes for communicating with nature. This is what our TripMangistau company is doing, organizing individual jeep tours. Traveling in a small company of relatives, friends, and colleagues is devoid of the excessive fussiness typical of large groups. We have chosen individual off-road tours as the most convenient and comfortable way for tourist trips and excursions, allowing you to see and visit many of the amazing sights of Kazakhstan.',
   qz: 'Қазақстанның Маңғыстау облысында туризм мен демалыс үшін көптеген әдемі және бірегей орындардың болуы әрқашан оларға саяхаттаудың неғұрлым ыңғайлы, еркін және жайлы тәсілі туралы ойлануға мәжбүр етеді. Жолдардың жай-күйінен туындаған қол жетімділік кейбір өте қызықты жерлерге топтық автобус турларына баруды қол жетімсіз етеді. Сондықтан жол талғамайтын көлікпен саяхаттау табиғатпен байланысу үшін көптеген мүмкін маршруттарды ашады. Бұл біздің tripmangistau компаниясы, жеке джип-турларды ұйымдастыру. Туыстарының, достарының, әріптестерінің шағын компаниясына бару үлкен топтарға тән шамадан тыс әбігерліктен айырылады. Біз жол талғамайтын көліктердегі жеке турларды туристік сапарлар мен экскурсиялар үшін ең ыңғайлы және ыңғайлы әдіс ретінде таңдадық, бұл Қазақстанның көптеген таңғажайып көрікті жерлерін көруге және көруге мүмкіндік береді.',
};
const companyText2p1 = {
   ru: 'Джип-тур - это индивидуальная туристическая поездка для групп от одного до четырёх человек в салоне авто, а автомобилей может быть до 4 экипажей. В этих турах программа формируется с учетом всех пожеланий клиента и всегда  допустимы некоторые отклонения от изначально предлагаемой нами программы. Заказчик автотура всегда сам выбирает и назначает дни для туристической поездки, а так же время и место встречи в начале тура. Для более комфортного отдыха водитель-гид не оставляет без внимания Ваши пожелания и просьбы. В любом месте тура можно рассчитывать на поддержку гида, который всегда поможет разрешить затрудняющие вопросы. Остановки для фотографирования, прогулок и иные делаются по желанию группы. Гид подскажет Вам лучшие места, где открываются красивые природные пейзажи для фотосъемки. Так же мы знае лучшие места в дороге для обеда и отдыха. Коммуникабельность, внимательное отношение к клиентам и безопасное вождение автомобиля - это основные критерии в индивидуальных турах. На нашем сайте находится описание, фото и красивейших достопримечательностей туризма и отдыха полуострова Мангышлак, машруты туров выходного дня из Актау и более длительных туров и экскурсий с описанием и ценами. Наша компания поможет Вам выбрать место куда можно выехать из Актау и что посмотреть в его окрестностях. Добро пожаловать, друзья, на просторы республики Казахстан! Добро пожаловать на Мангистау! Совершив путешествие по этому удивительному краю Вы вероятно сделаете для себя много неожиданных открытий.',
   en: 'A jeep tour is an individual tourist trip for groups of one to four people in a car cabin, and cars can have up to 4 crews. In these tours, the program is formed taking into account all the wishes of the client and some deviations from the program initially proposed by us are always acceptable. The customer of the car tour always chooses and assigns the days for a tourist trip, as well as the time and place of the meeting at the beginning of the tour. For a more comfortable Our driver-guide does not ignore your wishes and requests. You can count on the support of a guide anywhere on the tour, who will always help you resolve difficult issues. Stops for photographing, walking and others are made at the request of the group. The guide will tell you the best places where beautiful natural landscapes open up for photography. We also know the best places on the road for lunch and rest. Communication skills, attentive attitude to customers and safe driving are the main criteria in individual tours. On our website there is a description, photos and the most beautiful sights of tourism and recreation of the Mangyshlak peninsula, mashruts of weekend tours from Aktau and longer tours and excursions with descriptions and prices. Our company will help you choose a place where you can leave Aktau and what to see in its surroundings. Welcome, friends, to the expanses of the Republic of Kazakhstan! Welcome to Mangystau! Having traveled through this amazing land, you will probably make many unexpected discoveries for yourself.',
   qz: 'Джип туры-бұл автокөлік салонындағы бір - төрт адамнан тұратын топтарға арналған жеке туристік сапар, ал автомобильдер 4 экипажға дейін болуы мүмкін. Бұл турларда бағдарлама клиенттің барлық тілектерін ескере отырып құрылады және бастапқыда біз ұсынған бағдарламадан кейбір ауытқуларға әрқашан рұқсат етіледі. Автотурдың тапсырыс берушісі әрдайым туристік сапарға күндерді, сондай-ақ турдың басында кездесу уақыты мен орнын өзі таңдайды және белгілейді. Ыңғайлы болу үшін жүргізуші-гид сіздің тілектеріңіз бен өтініштеріңізді назардан тыс қалдырмайды. Турдың кез-келген жерінде Сіз әрдайым қиын мәселелерді шешуге көмектесетін гидтің қолдауына сене аласыз. Суретке түсіру, серуендеу және басқалары үшін аялдамалар топтың қалауы бойынша жасалады. Нұсқаулық сізге суретке түсіру үшін әдемі табиғи пейзаждар ашылатын ең жақсы орындарды ұсынады. Сондай-ақ, біз түскі ас пен демалу үшін жолдағы ең жақсы жерлерді білеміз. Қарым - қатынас, тұтынушыларға мұқият қарау және қауіпсіз көлік жүргізу-бұл жеке турлардағы негізгі критерийлер. Біздің сайтта Маңғышлақ түбегінің туризмі мен демалысының ең көрікті жерлерінің сипаттамасы, фотосуреттері, Ақтаудан демалыс күндері өтетін турлардың машруты және сипаттамасы мен бағасы бар ұзақ турлар мен экскурсиялар орналасқан. Біздің компания Сізге Ақтаудан шығатын орынды және оның маңайында не көруге болатынын таңдауға көмектеседі. Қош келдіңіздер, достар, Қазақстан Республикасының кеңдігіне! Маңғыстауға қош келдіңіз! Осы таңғажайып жиекке саяхат жасай отырып, сіз өзіңіз үшін көптеген күтпеген жаңалықтар ашатын шығарсыз.',
};
const companyText2p2 = {
   ru: 'Многодневные туры по западному Казахстану - "Полуостров Мангистау", откроют любителям активных путешествий новые, невероятные, космические, инопланетные виды. Познакомит с историей, традициями, этого сурового, пустынного и жаркого края. В приятной, дружеской атмосфере, в комфортных условиях, на подготовленном внедорожнике отправляемся за новыми впечатлениями и видами! В туре мы посетим каньоны Саура с его озерцом в котором обитают пресноводны ечерепашки,Тамшалы и кремнеевый каньён Капамсай, поставим лагерь в уединенном и диком месте, разведем костер и вместе приготовим ужин. Прогулки по каньонам наполнят вас новыми эмоциями и пополнят вашу галерею уникальными фотографиями на природе. В мечети Султан-Епе и Шакпа-Ата познакомимся с историей и особенностью архитектуры подземных мечетей. По дороге остановимся в долине шаровых конкреций Торыш где будет возможность не только погулять, но изучить и поразмышлять на тему: "А как камень мог стать таким шарообразным?".Так же мы увидим гору Шеркала, мы пройдём по следам украинского поэта и художника Тараса Григорьевича Шевченко в долине замков где он серию рисунков .',
   en: 'Multi-day tours of western Kazakhstan - "Mangystau Peninsula", will open up new, incredible, cosmic, alien species to fans of active travel. It will introduce you to the history and traditions of this harsh, deserted and hot region. In a pleasant, friendly atmosphere, in comfortable conditions, on a prepared SUV, we go for new impressions and views! On the tour, we will visit the canyons of Saura with its lake inhabited by freshwater turtles, Tamshals and Kapamsai flint canyon, set up camp in a secluded and wild place, make a fire and cook dinner together. Walking through the canyons will fill you with new emotions and fill up your gallery with unique photos in nature. In the Sultan-Epe and Shakpa-Ata mosques, we will get acquainted with the history and architecture of underground mosques. On the way, we will stop in the valley of spherical nodules of Torysh, where we will have the opportunity not only to walk, but to study and reflect on the topic: "How could a stone become so spherical?".We will also see Mount Sherkala, we will follow the footsteps of the Ukrainian poet and artist Taras Grigoryevich Shevchenko in the valley of castles where he painted a series of drawings.',
   qz: 'Батыс Қазақстан бойынша көпкүндік турлар - "Маңғыстау түбегі" белсенді саяхат әуесқойларына жаңа, керемет, ғарыштық, бөтен көріністерді ашады. Бұл қатал, шөлді және ыстық аймақтың тарихымен, дәстүрлерімен таныстырады. Жағымды, достық атмосферада, ыңғайлы жағдайда, дайындалған жол талғамайтын көлікте біз жаңа тәжірибелер мен көріністерге барамыз! Гастрольде біз барамыз Саура каньондары оның көлімен бірге онда тұщы сулар баржасыл тасбақалар, Тамшалы және кремний каньені Капамсай, біз оңаша және жабайы жерде лагерь құрамыз, от жағамыз және бірге кешкі ас дайындаймыз. Каньондарда серуендеу сізді жаңа эмоциялармен толтырады және галереяңызды табиғаттағы ерекше фотосуреттермен толықтырады. Сұлтан-Епе және шақпа-Ата мешіттерінде жерасты мешіттерінің тарихы мен сәулет ерекшеліктерімен танысамыз. Жолда біз Торыш Глобус конкрецияларының алқабында тоқтаймыз, онда серуендеуге ғана емес, сонымен бірге тақырыпты зерттеуге және ойлауға мүмкіндік болады: "ал тас қалай сфералық бола алады?".Сондай-ақ, біз Шеркала тауын көреміз, украин ақыны және суретшісі Тарас Григорьевич Шевченконың ізімен жүреміз .',
};
const companyText2p3 = {
   ru: 'Солончаковое озеро Тузбаир внесёт новые невероятные впечатления от того насколько красиво и причудливо может постараться творец-художник создавая такие ландшафты. И конечно же кульминация: мы переносимся на другую планету название которой - Бозжира. Где проведем почти полный день. Погуляем, полазаем, поохотимся за суперскими селфи. Посетим марсианские пейзажи в местности Кызылкум, увидим гору Бокты, которая изображена на купюре в 1000 тенге. Этот джип тур по Мангистау подходит как для людей любящих прогулки, так и для людей которые не очень любят погулять, потому что почти всё можно увидеть не отходя далеко от автомобиля. Самым благоприятным временем для тура по Мангистау являются месяцы: с апреля по июнь, и с августа по ноябрь.',
   en: "The Tuzbair salt lake will bring new incredible impressions of how beautiful and whimsical the creator-artist can try to create such landscapes. And of course the climax: we are transported to another planet whose name is Bozzhira. Where we will spend almost a full day. Let's go for a walk, climb, hunt for super selfies. We will visit the Martian landscapes in the Kyzylkum area, see Mount Bokty, which is depicted on a 1000 tenge bill. This jeep tour of Mangystau is suitable both for people who love walking, and for people who do not really like to walk, because almost everything can be seen without leaving far from the car. The most favorable time for a tour of Mangystau is the months: from April to June, and from August to November.",
   qz: 'Тұзды көл Тузбайыр осындай пейзаждарды жасау кезінде жасаушы-суретшінің қаншалықты әдемі және оғаш тырысуы мүмкін екендігі туралы керемет жаңа әсер қалдырады. Әрине, шарықтау шегі: Біз атауы Бозжира болатын басқа планетаға ауысамыз. Толық күнді қайда өткіземіз. Біз серуендейміз, жорғалаймыз, супер селфи үшін аң аулаймыз. Қызылқұм жеріндегі Марс пейзаждарына барып, 1000 теңгелік купюрада бейнеленген Бокты тауын көреміз. Маңғыстаудағы бұл джип туры серуендеуді жақсы көретін адамдар үшін де, серуендеуді ұнатпайтын адамдар үшін де қолайлы, өйткені барлығы дерлік көліктен алыстамай-ақ көруге болады. Маңғыстау туры үшін ең қолайлы уақыт-айлар: сәуірден маусымға дейін және тамыздан қарашаға дейін.',
};
const companyText3p1 = {
   ru: 'Мангистау – это регион, где с точки зрения археологии и палеонтологии образовалось большое белое пятно неизученности. Степь Мангистау богата и уникальна настолько, что невозможно подсчитать, сколько образцов доисторической фауны – зубов и позвонков хищных морских рыб, аммонитов, раковин – посчастливилось здесь найти. Конечно, всем хочется стать обладателем таких находок и многим нашим туристам очень повезло в этом вопросе время наших путешествий , и очень часто эти находки становятся ювелирными украшениями.',
   en: 'Mangystau is a region where, from the point of view of archeology and paleontology, a large white spot of unexplored has formed. The Mangystau steppe is so rich and unique that it is impossible to count how many samples of prehistoric fauna – teeth and vertebrae of predatory marine fish, ammonites, shells – were lucky enough to find here. Of course, everyone wants to become the owner of such finds and many of our tourists were very lucky in this matter during our travels, and very often these finds become jewelry.',
   qz: 'Маңғыстау-археология және палеонтология тұрғысынан зерттелмеген үлкен ақ дақ пайда болған аймақ. Маңғыстау даласы соншалықты бай және ерекше, сондықтан Тарихқа дейінгі фаунаның қанша үлгісін – жыртқыш теңіз балықтарының тістері мен омыртқаларын, аммониттерді, қабықтарды табу мүмкін емес. Әрине, әркім осындай олжалардың иесі болғысы келеді және біздің көптеген туристеріміз бұл мәселеде біздің саяхаттарымыздың уақытына өте қуанышты , және көбінесе бұл олжалар зергерлік бұйымдарға айналады.',
};
const companyText3p2 = {
   ru: 'Чтобы было понятно, почему на территории бескрайних степей области находятся останки древнейшей фауны, поясним, что в период с 885 млн до 60 млн лет назад большую часть поверх­ности Земли покрывал глобальный океан Тетис. Уникальность Мангистау заключается в том, что именно здесь располагалась так называемая океаническая отмель, где всегда в изобилии встречается морская флора и фауна. Относительно небольшая глубина и обилие света делали свое дело.',
   en: "To make it clear why the remains of the most ancient fauna are located on the territory of the vast steppes of the region, let us explain that in the period from 885 million to 60 million years ago, most of the Earth's surface was covered by the global Tethys ocean. The uniqueness of Mangystau lies in the fact that it was here that the so-called oceanic shoal was located, where marine flora and fauna are always found in abundance. The relatively shallow depth and abundance of light did their job.",
   qz: 'Облыстың шексіз даласының аумағында ежелгі фаунаның қалдықтары неге бар екендігі түсінікті болу үшін, 885 миллион жылдан 60 миллион жыл бұрын жер бетінің көп бөлігін жаһандық Тетис мұхиты қамтығанын түсіндіреміз. Маңғыстаудың бірегейлігі-бұл жерде теңіз флорасы мен фаунасы әрдайым мол болатын мұхиттық жағалау орналасқан. Салыстырмалы түрде таяз тереңдік пен жарықтың көптігі өз жұмысын жасады.',
};
const companyText3p3 = {
   ru: 'С середины юрского периода начиналось появление большого биоразнообразия. В меловой период его стало еще больше.Зубы или другие фрагменты останков древнейших животных находят на территории Уральска, на Лисаковских карьерах, но там все образцы намного меньше. А здесь все солидных размеров и в большом изобилии.',
   en: 'Since the middle of the Jurassic period, the emergence of great biodiversity began. In the Cretaceous period, there was even more of it.Teeth or other fragments of the remains of ancient animals are found on the territory of Uralsk, at the Lisakovsky quarries, but all samples there are much smaller. And here everything is of solid size and in great abundance.',
   qz: 'Юра кезеңінің ортасынан бастап үлкен биоәртүрліліктің пайда болуы басталды. Бор кезеңінде ол одан да көп болды.Ежелгі жануарлардың қалдықтарының тістері немесе басқа фрагменттері Орал аумағында, Лисаков карьерлерінде кездеседі, бірақ онда барлық үлгілер әлдеқайда аз. Мұнда бәрі қатты мөлшерде және өте көп.',
};
//------Контакты

const contactText = {
   ru: 'Наши контакты:',
   en: 'Our contacts:',
   qz: 'Біздің байланыстар:',
};
*/
