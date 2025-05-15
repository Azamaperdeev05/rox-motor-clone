export type Language = 'ru' | 'kk' | 'en';

export type TranslationKey =
  | 'nav.home'
  | 'nav.rox'
  | 'nav.price'
  | 'nav.rox01'
  | 'nav.manuals'
  | 'nav.warranty'
  | 'nav.gallery'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'gallery.exterior'
  | 'gallery.interior'
  | 'gallery.details'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.button'
  | 'specs.title'
  | 'specs.subtitle'
  | 'specs.dimensions'
  | 'specs.length'
  | 'specs.width'
  | 'specs.height'
  | 'specs.wheelbase'
  | 'specs.weight'
  | 'specs.comfort'
  | 'specs.seats'
  | 'specs.leather'
  | 'specs.climate'
  | 'specs.display'
  | 'specs.performance'
  | 'specs.range'
  | 'specs.speed'
  | 'specs.acceleration'
  | 'specs.v2l'
  | 'specs.safety'
  | 'specs.steel'
  | 'specs.aluminum'
  | 'specs.tests'
  | 'specs.disclaimer'
  | 'specs.trunk'
  | 'features.title'
  | 'features.subtitle'
  | 'features.shape.title'
  | 'features.shape.subtitle'
  | 'features.shape.description'
  | 'features.offroad.title'
  | 'features.offroad.subtitle'
  | 'features.offroad.description'
  | 'features.tabs.comfort'
  | 'features.tabs.space'
  | 'features.tabs.smart'
  | 'features.comfort.title'
  | 'features.comfort.description1'
  | 'features.comfort.description2'
  | 'features.space.title'
  | 'features.space.description1'
  | 'features.space.description2'
  | 'features.smart.title'
  | 'features.smart.description1'
  | 'features.smart.description2'
  | 'car.title'
  | 'car.rotate'
  | 'car.configure'
  | 'car.color.white'
  | 'car.color.black'
  | 'car.color.gray'
  | 'car.color.brown'
  | 'car.color.silver'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.description'
  | 'contact.name'
  | 'contact.phone'
  | 'contact.email'
  | 'contact.privacy'
  | 'contact.form.name'
  | 'contact.form.phone'
  | 'contact.form.email'
  | 'contact.form.message'
  | 'contact.form.submit'
  | 'contact.info.title'
  | 'contact.info.address'
  | 'contact.info.phone'
  | 'contact.info.email'
  | 'contact.info.hours'
  | 'footer.about.title'
  | 'footer.about.description'
  | 'footer.navigation'
  | 'footer.contact.title'
  | 'footer.contact.address'
  | 'footer.contact.phone'
  | 'footer.contact.email'
  | 'footer.social'
  | 'footer.rights'
  | 'language.ru'
  | 'language.kk'
  | 'language.en'
  | 'search.placeholder'
  | 'blog.title'
  | 'blog.subtitle'
  | 'blog.search'
  | 'blog.all'
  | 'blog.readMore'
  | 'admin.dashboard'
  | 'admin.orders'
  | 'admin.customers'
  | 'admin.settings'
  | 'admin.logout'
  | 'admin.totalOrders'
  | 'admin.totalCustomers'
  | 'admin.totalRevenue'
  | 'admin.searchOrders'
  | 'admin.addOrder'
  | 'admin.orderId'
  | 'admin.customer'
  | 'admin.product'
  | 'admin.status'
  | 'admin.date'
  | 'admin.amount'
  | 'admin.actions'
  | 'admin.view'
  | 'admin.comingSoon'
  | 'orders.title'
  | 'orders.subtitle'
  | 'orders.search'
  | 'orders.filter'
  | 'orders.export'
  | 'orders.print'
  | 'orders.all'
  | 'orders.orderId'
  | 'orders.customer'
  | 'orders.product'
  | 'orders.status'
  | 'orders.date'
  | 'orders.amount'
  | 'orders.trackingNumber'
  | 'orders.actions'
  | 'orders.view'
  | 'calculator.title'
  | 'calculator.subtitle'
  | 'calculator.battery'
  | 'calculator.temperature'
  | 'calculator.speed'
  | 'calculator.terrain'
  | 'calculator.calculate'
  | 'calculator.result'
  | 'calculator.range'
  | 'calculator.conditions'
  | 'calculator.flat'
  | 'calculator.hilly'
  | 'calculator.mountainous'
  | 'calculator.disclaimer';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  ru: {
    'nav.home': 'Главная',
    'nav.rox': 'ROX',
    'nav.price': 'Цена',
    'nav.rox01': 'ROX01',
    'nav.manuals': 'Руководства',
    'nav.warranty': 'Гарантия',
    'nav.gallery': 'Галерея',
    'gallery.title': 'Галерея ROX01',
    'gallery.subtitle': 'Исследуйте ROX01 во всех деталях',
    'gallery.exterior': 'Экстерьер',
    'gallery.interior': 'Интерьер',
    'gallery.details': 'Детали',
    'hero.title': 'ROX01 SUV',
    'hero.subtitle': 'Электрический кроссовер нового поколения',
    'hero.button': 'Сконфигурировать',
    'specs.title': 'Технические характеристики',
    'specs.subtitle': 'Инновационные технологии и превосходные характеристики',
    'specs.dimensions': 'Размеры',
    'specs.length': 'Длина',
    'specs.width': 'Ширина',
    'specs.height': 'Высота',
    'specs.wheelbase': 'Колесная база',
    'specs.weight': 'Вес',
    'specs.comfort': 'Комфортные сиденья "Zero Gravity"',
    'specs.seats': 'Мест',
    'specs.leather': 'отделка из натуральной кожи',
    'specs.climate': 'климат-контроль',
    'specs.display': 'передний дисплей*',
    'specs.performance': 'Запас хода, мощность, разгон',
    'specs.range': 'км запас хода WLTC',
    'specs.speed': 'км/ч максимальная скорость WLTC',
    'specs.acceleration': 'сек разгон 0-100 км/ч',
    'specs.v2l': 'кВт мощность V2L*',
    'specs.safety': 'Безопасность и надежность',
    'specs.steel': 'высокопрочная сталь',
    'specs.aluminum': 'алюминиевый сплав',
    'specs.tests': 'испытаний*',
    'specs.disclaimer': '*Данные могут отличаться. За подробностями обращайтесь к дилеру.',
    'specs.trunk': 'Багажник',
    'features.title': 'Особенности',
    'features.subtitle': 'Инновационные технологии и превосходные характеристики',
    'features.shape.title': 'Острая прямоугольная форма',
    'features.shape.subtitle': 'Передние и задние фары, идеальное сочетание',
    'features.shape.description': 'Инновационный дизайн передних и задних фар создает уникальный образ автомобиля на дороге. Светодиодные фары обеспечивают отличную видимость в любое время суток и при любых погодных условиях.',
    'features.offroad.title': 'Внедорожные возможности',
    'features.offroad.subtitle': 'Производительность, безопасность, универсальность',
    'features.offroad.description': 'ROX01 сочетает в себе высокую производительность электрического двигателя, безопасность конструкции и универсальность применения. Система адаптивного управления DCC позволяет выбрать один из режимов: обычный, спортивный, комфортный, эко-режим.',
    'features.tabs.comfort': 'Комфорт',
    'features.tabs.space': 'Пространство',
    'features.tabs.smart': 'Умный кокпит',
    'features.comfort.title': 'Максимальный комфорт',
    'features.comfort.description1': 'Салон ROX01 отделан натуральной кожей Nappa, сиденья имеют функцию массажа и вентиляции. Передние сиденья имеют электрическую регулировку в 8 направлениях, а водительское сиденье имеет функцию памяти настроек для 2-х водителей.',
    'features.comfort.description2': 'Трехзонный климат-контроль позволяет настроить комфортную температуру для каждой зоны салона.',
    'features.space.title': 'Простор для всей семьи',
    'features.space.description1': 'Просторный 7-местный салон обеспечивает комфорт для всех пассажиров. Сиденья второго и третьего ряда складываются, образуя ровный пол грузового отсека.',
    'features.space.description2': 'Объем багажника составляет 270 литров при разложенных сиденьях третьего ряда и увеличивается до 2,95 куб. м при сложенных сиденьях второго и третьего ряда.',
    'features.smart.title': 'Smart технологии в салоне',
    'features.smart.description1': '15,7-дюймовый центральный экран с разрешением 3K дополняется 12,3-дюймовой цифровой приборной панелью и 15,6-дюймовым дисплеем для пассажира.',
    'features.smart.description2': 'Мультимедийная система поддерживает беспроводное подключение Apple CarPlay и функцию Screen Mirroring. Для задних пассажиров предусмотрена 9-дюймовая развлекательная система.',
    'car.title': 'ROX01',
    'car.rotate': 'Поверните для просмотра',
    'car.configure': 'Выбрать комплектацию',
    'car.color.white': 'Белый',
    'car.color.black': 'Черный',
    'car.color.gray': 'Серый',
    'car.color.brown': 'Коричневый',
    'car.color.silver': 'Серебристый',
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Мы всегда готовы ответить на ваши вопросы',
    'contact.description': 'Заполните форму, и наш менеджер свяжется с вами в ближайшее время',
    'contact.name': 'Имя',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. почта',
    'contact.privacy': 'Я согласен с политикой конфиденциальности',
    'contact.form.name': 'Ваше имя',
    'contact.form.phone': 'Телефон',
    'contact.form.email': 'Email',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.info.title': 'Контактная информация',
    'contact.info.address': 'г. Алматы, ул. Примерная, 123',
    'contact.info.phone': '+7 (727) 123-45-67',
    'contact.info.email': 'info@roxmotors.com',
    'contact.info.hours': 'Пн-Пт: 9:00 - 18:00',
    'footer.about.title': 'О компании',
    'footer.about.description': 'ROX Motors - первый казахстанский производитель электромобилей, создающий инновационные и экологичные транспортные решения.',
    'footer.navigation': 'Навигация',
    'footer.contact.title': 'Контакты',
    'footer.contact.address': 'г. Алматы, ул. Примерная, 123',
    'footer.contact.phone': '+7 (727) 123-45-67',
    'footer.contact.email': 'info@roxmotors.com',
    'footer.social': 'Социальные сети',
    'footer.rights': 'Все права защищены',
    'language.ru': 'Русский',
    'language.kk': 'Қазақша',
    'language.en': 'English',
    'search.placeholder': 'Поиск по сайту...',
    'blog.title': 'Блог',
    'blog.subtitle': 'Последние новости и обновления от ROX Motors',
    'blog.search': 'Поиск по блогу...',
    'blog.all': 'Все',
    'blog.readMore': 'Читать далее',
    'orders.title': 'Отслеживание заказов',
    'orders.subtitle': 'Отслеживайте статус ваших заказов',
    'orders.search': 'Поиск заказов...',
    'orders.filter': 'Фильтр',
    'orders.export': 'Экспорт',
    'orders.print': 'Печать',
    'orders.all': 'Все',
    'orders.orderId': 'ID заказа',
    'orders.customer': 'Клиент',
    'orders.product': 'Продукт',
    'orders.status': 'Статус',
    'orders.date': 'Дата',
    'orders.amount': 'Сумма',
    'orders.trackingNumber': 'Номер отслеживания',
    'orders.actions': 'Действия',
    'orders.view': 'Просмотр',
    'calculator.title': 'Калькулятор запаса хода',
    'calculator.subtitle': 'Рассчитайте реальный запас хода вашего ROX01',
    'calculator.battery': 'Уровень заряда батареи (%)',
    'calculator.temperature': 'Температура воздуха (°C)',
    'calculator.speed': 'Средняя скорость (км/ч)',
    'calculator.terrain': 'Тип местности',
    'calculator.calculate': 'Рассчитать',
    'calculator.result': 'Расчетный запас хода',
    'calculator.range': 'км',
    'calculator.conditions': 'Условия вождения',
    'calculator.flat': 'Равнинная местность',
    'calculator.hilly': 'Холмистая местность',
    'calculator.mountainous': 'Горная местность',
    'calculator.disclaimer': '*Результаты являются приблизительными и могут отличаться в зависимости от условий эксплуатации',
    'admin.dashboard': 'Панель управления',
    'admin.orders': 'Заказы',
    'admin.customers': 'Клиенты',
    'admin.settings': 'Настройки',
    'admin.logout': 'Выйти',
    'admin.totalOrders': 'Всего заказов',
    'admin.totalCustomers': 'Всего клиентов',
    'admin.totalRevenue': 'Общая выручка',
    'admin.searchOrders': 'Поиск заказов...',
    'admin.addOrder': 'Добавить заказ',
    'admin.orderId': 'ID заказа',
    'admin.customer': 'Клиент',
    'admin.product': 'Продукт',
    'admin.status': 'Статус',
    'admin.date': 'Дата',
    'admin.amount': 'Сумма',
    'admin.actions': 'Действия',
    'admin.view': 'Просмотр',
    'admin.comingSoon': 'Скоро будет доступно'
  },
  kk: {
    'nav.home': 'Басты бет',
    'nav.rox': 'ROX',
    'nav.price': 'Баға',
    'nav.rox01': 'ROX01',
    'nav.manuals': 'Нұсқаулықтар',
    'nav.warranty': 'Кепілдік',
    'nav.gallery': 'Галерея',
    'gallery.title': 'ROX01 Галереясы',
    'gallery.subtitle': 'ROX01-ді барлық бөлшектерімен зерттеңіз',
    'gallery.exterior': 'Сыртқы көрініс',
    'gallery.interior': 'Ішкі көрініс',
    'gallery.details': 'Бөлшектер',
    'hero.title': 'ROX01 SUV',
    'hero.subtitle': 'Жаңа ұрпақ электр кроссовері',
    'hero.button': 'Конфигурациялау',
    'specs.title': 'Техникалық сипаттамалар',
    'specs.subtitle': 'Инновациялық технологиялар мен үздік сипаттамалар',
    'specs.dimensions': 'Өлшемдері',
    'specs.length': 'Ұзындығы',
    'specs.width': 'Ені',
    'specs.height': 'Биіктігі',
    'specs.wheelbase': 'Дөңгелек базасы',
    'specs.weight': 'Салмағы',
    'specs.comfort': '"Zero Gravity" жайлы орындықтары',
    'specs.seats': 'орындықтар',
    'specs.leather': 'табиғи тері қаптау',
    'specs.climate': 'климат-бақылау',
    'specs.display': 'алдыңғы дисплей*',
    'specs.performance': 'Қашықтық, қуат, үдеу',
    'specs.range': 'км WLTC бойынша қашықтық',
    'specs.speed': 'км/сағ WLTC бойынша максималды жылдамдық',
    'specs.acceleration': 'сек 0-100 км/сағ үдеу',
    'specs.v2l': 'кВт V2L қуаты*',
    'specs.safety': 'Қауіпсіздік және сенімділік',
    'specs.steel': 'беріктігі жоғары болат',
    'specs.aluminum': 'алюминий қорытпасы',
    'specs.tests': 'сынақтар*',
    'specs.disclaimer': '*Деректер өзгеше болуы мүмкін. Толығырақ ақпарат алу үшін дилерге хабарласыңыз.',
    'specs.trunk': 'Жолақ',
    'features.title': 'Ерекшеліктер',
    'features.subtitle': 'Инновациялық технологиялар мен үздік сипаттамалар',
    'features.shape.title': 'Өткір тіктөртбұрышты пішін',
    'features.shape.subtitle': 'Алдыңғы және артқы фаралар, мінсіз үйлесім',
    'features.shape.description': 'Алдыңғы және артқы шамдардың инновациялық дизайны жолда көліктің бірегей бейнесін жасайды. Жарықдиодты шамдар кез-келген уақытта және кез-келген ауа-райы жағдайында керемет көрінуді қамтамасыз етеді.',
    'features.offroad.title': 'Жолсыз жерлерде жүру мүмкіндіктері',
    'features.offroad.subtitle': 'Өнімділік, қауіпсіздік, әмбебаптық',
    'features.offroad.description': 'ROX01 электр қозғалтқышының жоғары өнімділігін, құрылымның қауіпсіздігін және қолданудың әмбебаптығын біріктіреді. DCC бейімделгіш басқару жүйесі келесі режимдердің бірін таңдауға мүмкіндік береді: қалыпты, спорттық, жайлы, эко-режим.',
    'features.tabs.comfort': 'Жайлылық',
    'features.tabs.space': 'Кеңістік',
    'features.tabs.smart': 'Ақылды кокпит',
    'features.comfort.title': 'Максималды жайлылық',
    'features.comfort.description1': 'ROX01 салоны Nappa табиғи терісімен қапталған, орындықтарда массаж және желдету функциясы бар. Алдыңғы орындықтар 8 бағытта электрлік реттеуге ие, ал жүргізуші орындығында 2 жүргізуші үшін орнату жадысының функциясы бар.',
    'features.comfort.description2': 'Үш аймақты климат-бақылау салонның әр аймағы үшін жайлы температураны орнатуға мүмкіндік береді.',
    'features.space.title': 'Бүкіл отбасы үшін кеңістік',
    'features.space.description1': 'Кең 7 орындық салон барлық жолаушыларға жайлылықты қамтамасыз етеді. Екінші және үшінші қатардағы орындықтар жүк бөлімінің тегіс еденін қалыптастыра отырып жиналады.',
    'features.space.description2': 'Багаж бөлімінің көлемі үшінші қатар орындықтары ашылған кезде 270 литрді құрайды және екінші және үшінші қатар орындықтары жиналған кезде 2,95 текше метрге дейін ұлғаяды.',
    'features.smart.title': 'Салондағы Smart технологиялары',
    'features.smart.description1': '15,7 дюймдік 3K ажыратымдылығы бар орталық экран 12,3 дюймдік сандық аспаптар тақтасымен және жолаушыға арналған 15,6 дюймдік дисплеймен толықтырылады.',
    'features.smart.description2': 'Мультимедиялық жүйе Apple CarPlay сымсыз қосылымын және Screen Mirroring функциясын қолдайды. Артқы жолаушылар үшін 9 дюймдік ойын-сауық жүйесі қарастырылған.',
    'car.title': 'ROX01',
    'car.rotate': 'Көру үшін бұраңыз',
    'car.configure': 'Жинақтауды таңдау',
    'car.color.white': 'Ақ',
    'car.color.black': 'Қара',
    'car.color.gray': 'Сұр',
    'car.color.brown': 'Қоңыр',
    'car.color.silver': 'Күміс түсті',
    'contact.title': 'Бізбен байланысыңыз',
    'contact.subtitle': 'Біз әрқашан сұрақтарыңызға жауап беруге дайынбыз',
    'contact.description': 'Нысанды толтырыңыз, және біздің менеджер сізбен жақын арада байланысады',
    'contact.name': 'Аты-жөні',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. пошта',
    'contact.privacy': 'Мен құпиялылық саясатымен келісемін',
    'contact.form.name': 'Сіздің атыңыз',
    'contact.form.phone': 'Телефон',
    'contact.form.email': 'Email',
    'contact.form.message': 'Хабарлама',
    'contact.form.submit': 'Жіберу',
    'contact.info.title': 'Байланыс ақпараты',
    'contact.info.address': 'Алматы қ., Мысал көш., 123',
    'contact.info.phone': '+7 (727) 123-45-67',
    'contact.info.email': 'info@roxmotors.com',
    'contact.info.hours': 'Дс-Жм: 9:00 - 18:00',
    'footer.about.title': 'Компания туралы',
    'footer.about.description': 'ROX Motors - инновациялық және экологиялық таза көлік шешімдерін жасайтын Қазақстанның алғашқы электромобиль өндірушісі.',
    'footer.navigation': 'Навигация',
    'footer.contact.title': 'Байланыс',
    'footer.contact.address': 'Алматы қ., Мысал көш., 123',
    'footer.contact.phone': '+7 (727) 123-45-67',
    'footer.contact.email': 'info@roxmotors.com',
    'footer.social': 'Әлеуметтік желілер',
    'footer.rights': 'Барлық құқықтар қорғалған',
    'language.ru': 'Русский',
    'language.kk': 'Қазақша',
    'language.en': 'English',
    'search.placeholder': 'Сайт бойынша іздеу...',
    'blog.title': 'Блог',
    'blog.subtitle': 'ROX Motors-тен соңғы жаңалықтар мен жаңартулар',
    'blog.search': 'Блог бойынша іздеу...',
    'blog.all': 'Барлығы',
    'blog.readMore': 'Толығырақ оқу',
    'orders.title': 'Тапсырыстарды қадағалау',
    'orders.subtitle': 'Тапсырыстарыңыздың статусын қадағалаңыз',
    'orders.search': 'Тапсырыстарды іздеу...',
    'orders.filter': 'Сүзгі',
    'orders.export': 'Экспорт',
    'orders.print': 'Баспа',
    'orders.all': 'Барлығы',
    'orders.orderId': 'Тапсырыс ID',
    'orders.customer': 'Тұтынушы',
    'orders.product': 'Өнім',
    'orders.status': 'Статус',
    'orders.date': 'Күні',
    'orders.amount': 'Сомасы',
    'orders.trackingNumber': 'Қадағалау нөмірі',
    'orders.actions': 'Әрекеттер',
    'orders.view': 'Көру',
    'calculator.title': 'Қашықтық калькуляторы',
    'calculator.subtitle': 'ROX01-дің нақты қашықтығын есептеңіз',
    'calculator.battery': 'Батарея заряды (%)',
    'calculator.temperature': 'Ауа температурасы (°C)',
    'calculator.speed': 'Орташа жылдамдық (км/сағ)',
    'calculator.terrain': 'Жер бедері',
    'calculator.calculate': 'Есептеу',
    'calculator.result': 'Есептелген қашықтық',
    'calculator.range': 'км',
    'calculator.conditions': 'Жүріс жағдайлары',
    'calculator.flat': 'Тегіс жер',
    'calculator.hilly': 'Төбелі жер',
    'calculator.mountainous': 'Таулы жер',
    'calculator.disclaimer': '*Нәтижелер шамамен болып табылады және пайдалану жағдайына байланысты өзгеруі мүмкін',
    'admin.dashboard': 'Басқару панелі',
    'admin.orders': 'Тапсырыстар',
    'admin.customers': 'Тұтынушылар',
    'admin.settings': 'Баптаулар',
    'admin.logout': 'Шығу',
    'admin.totalOrders': 'Барлық тапсырыстар',
    'admin.totalCustomers': 'Барлық тұтынушылар',
    'admin.totalRevenue': 'Жалпы түсім',
    'admin.searchOrders': 'Тапсырыстарды іздеу...',
    'admin.addOrder': 'Тапсырыс қосу',
    'admin.orderId': 'Тапсырыс ID',
    'admin.customer': 'Тұтынушы',
    'admin.product': 'Өнім',
    'admin.status': 'Статус',
    'admin.date': 'Күні',
    'admin.amount': 'Сомасы',
    'admin.actions': 'Әрекеттер',
    'admin.view': 'Көру',
    'admin.comingSoon': 'Жақында қолжетімді болады'
  },
  en: {
    'nav.home': 'Home',
    'nav.rox': 'ROX',
    'nav.price': 'Price',
    'nav.rox01': 'ROX01',
    'nav.manuals': 'Manuals',
    'nav.warranty': 'Warranty',
    'nav.gallery': 'Gallery',
    'gallery.title': 'ROX01 Gallery',
    'gallery.subtitle': 'Explore ROX01 in all its details',
    'gallery.exterior': 'Exterior',
    'gallery.interior': 'Interior',
    'gallery.details': 'Details',
    'hero.title': 'ROX01 SUV',
    'hero.subtitle': 'Next Generation Electric Crossover',
    'hero.button': 'Configure',
    'specs.title': 'Technical Specifications',
    'specs.subtitle': 'Innovative technology and superior performance',
    'specs.dimensions': 'Dimensions',
    'specs.length': 'Length',
    'specs.width': 'Width',
    'specs.height': 'Height',
    'specs.wheelbase': 'Wheelbase',
    'specs.weight': 'Weight',
    'specs.comfort': 'Comfort Seats "Zero Gravity"',
    'specs.seats': 'Seats',
    'specs.leather': 'Leather Interior',
    'specs.climate': 'Climate Control',
    'specs.display': 'Front Display*',
    'specs.performance': 'Range, Power, Acceleration',
    'specs.range': 'WLTC Range',
    'specs.speed': 'WLTC Max Speed',
    'specs.acceleration': '0-100 Acceleration',
    'specs.v2l': 'V2L Power*',
    'specs.safety': 'Safety and Reliability',
    'specs.steel': 'High-Strength Steel',
    'specs.aluminum': 'Aluminum Alloy',
    'specs.tests': 'Tests*',
    'specs.disclaimer': '*Data may vary. Please consult your dealer for more details.',
    'specs.trunk': 'Trunk',
    'features.title': 'Features',
    'features.subtitle': 'Innovative technology and superior performance',
    'features.shape.title': 'Sharp Rectangular Shape',
    'features.shape.subtitle': 'Front and Rear Lights, Perfect Blend',
    'features.shape.description': 'The innovative design of the front and rear lights creates a unique image of the vehicle on the road. LED lights provide excellent visibility at any time of day and in any weather conditions.',
    'features.offroad.title': 'Offroad Capabilities',
    'features.offroad.subtitle': 'Performance, Safety, Versatility',
    'features.offroad.description': 'ROX01 combines high performance of the electric motor, safety of the structure, and versatility of use. The DCC adaptive control system allows you to choose one of the modes: regular, sporty, comfortable, eco-mode.',
    'features.tabs.comfort': 'Comfort',
    'features.tabs.space': 'Space',
    'features.tabs.smart': 'Smart Cockpit',
    'features.comfort.title': 'Maximum Comfort',
    'features.comfort.description1': 'The ROX01 cabin is trimmed with natural Nappa leather, seats have massage and ventilation functions. Front seats have electric adjustment in 8 directions, and the driver seat has memory settings for 2 drivers.',
    'features.comfort.description2': 'The three-zone climate control allows you to set the comfortable temperature for each area of the cabin.',
    'features.space.title': 'Space for the Whole Family',
    'features.space.description1': 'The spacious 7-seat cabin provides comfort for all passengers. The seats of the second and third rows fold up, forming a smooth floor of the cargo area.',
    'features.space.description2': 'The trunk volume is 270 liters when the seats of the third row are unfolded and increases to 2.95 cubic meters when the seats of the second and third rows are folded.',
    'features.smart.title': 'Smart Technologies in the Cabin',
    'features.smart.description1': 'The 15.7-inch central screen with 3K resolution is complemented by a 12.3-inch digital instrument panel and a 15.6-inch display for the passenger.',
    'features.smart.description2': 'The multimedia system supports wireless Apple CarPlay connection and Screen Mirroring function. A 9-inch entertainment system is provided for rear passengers.',
    'car.title': 'ROX01',
    'car.rotate': 'Rotate for Viewing',
    'car.configure': 'Select Configuration',
    'car.color.white': 'White',
    'car.color.black': 'Black',
    'car.color.gray': 'Gray',
    'car.color.brown': 'Brown',
    'car.color.silver': 'Silver',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are always ready to answer your questions',
    'contact.description': 'Fill out the form, and our manager will contact you shortly',
    'contact.name': 'Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.privacy': 'I agree to the privacy policy',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.info.title': 'Contact Information',
    'contact.info.address': '123 Example St., Almaty',
    'contact.info.phone': '+7 (727) 123-45-67',
    'contact.info.email': 'info@roxmotors.com',
    'contact.info.hours': 'Mon-Fri: 9:00 AM - 6:00 PM',
    'footer.about.title': 'About Us',
    'footer.about.description': 'ROX Motors is Kazakhstan\'s first electric vehicle manufacturer, creating innovative and eco-friendly transportation solutions.',
    'footer.navigation': 'Navigation',
    'footer.contact.title': 'Contact',
    'footer.contact.address': '123 Example St., Almaty',
    'footer.contact.phone': '+7 (727) 123-45-67',
    'footer.contact.email': 'info@roxmotors.com',
    'footer.social': 'Social Media',
    'footer.rights': 'All rights reserved',
    'language.ru': 'Русский',
    'language.kk': 'Қазақша',
    'language.en': 'English',
    'search.placeholder': 'Search the site...',
    'blog.title': 'Blog',
    'blog.subtitle': 'Latest news and updates from ROX Motors',
    'blog.search': 'Search blog...',
    'blog.all': 'All',
    'blog.readMore': 'Read More',
    'orders.title': 'Order Tracking',
    'orders.subtitle': 'Track the status of your orders',
    'orders.search': 'Search orders...',
    'orders.filter': 'Filter',
    'orders.export': 'Export',
    'orders.print': 'Print',
    'orders.all': 'All',
    'orders.orderId': 'Order ID',
    'orders.customer': 'Customer',
    'orders.product': 'Product',
    'orders.status': 'Status',
    'orders.date': 'Date',
    'orders.amount': 'Amount',
    'orders.trackingNumber': 'Tracking Number',
    'orders.actions': 'Actions',
    'orders.view': 'View',
    'calculator.title': 'Range Calculator',
    'calculator.subtitle': 'Calculate the actual range of your ROX01',
    'calculator.battery': 'Battery Level (%)',
    'calculator.temperature': 'Air Temperature (°C)',
    'calculator.speed': 'Average Speed (km/h)',
    'calculator.terrain': 'Terrain Type',
    'calculator.calculate': 'Calculate',
    'calculator.result': 'Estimated Range',
    'calculator.range': 'km',
    'calculator.conditions': 'Driving Conditions',
    'calculator.flat': 'Flat Terrain',
    'calculator.hilly': 'Hilly Terrain',
    'calculator.mountainous': 'Mountainous Terrain',
    'calculator.disclaimer': '*Results are approximate and may vary depending on operating conditions',
    'admin.dashboard': 'Dashboard',
    'admin.orders': 'Orders',
    'admin.customers': 'Customers',
    'admin.settings': 'Settings',
    'admin.logout': 'Logout',
    'admin.totalOrders': 'Total Orders',
    'admin.totalCustomers': 'Total Customers',
    'admin.totalRevenue': 'Total Revenue',
    'admin.searchOrders': 'Search orders...',
    'admin.addOrder': 'Add Order',
    'admin.orderId': 'Order ID',
    'admin.customer': 'Customer',
    'admin.product': 'Product',
    'admin.status': 'Status',
    'admin.date': 'Date',
    'admin.amount': 'Amount',
    'admin.actions': 'Actions',
    'admin.view': 'View',
    'admin.comingSoon': 'Coming Soon'
  }
};
