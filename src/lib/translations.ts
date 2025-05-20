export type Language = 'ru' | 'kk' | 'en';

export type TranslationKey =
  | 'contact.info.email'
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
  | 'car.subtitle'
  | 'car.description'
  | 'car.features.title'
  | 'car.features.description'
  | 'car.features.1'
  | 'car.features.2'
  | 'car.features.3'
  | 'car.features.4'
  | 'car.features.5'
  | 'car.price.7seater'
  | 'car.price.6seater'
  | 'car.configuration.title'
  | 'car.configuration.7seater'
  | 'car.configuration.6seater'
  | 'car.configuration.difference'
  | 'car.configuration.choice'
  | 'car.configuration.seating'
  | 'car.meaning.line'
  | 'car.meaning.stone'
  | 'car.meaning.style'
  | 'car.spirit.title'
  | 'car.spirit.description'
  | 'car.spirit.spring'
  | 'car.spirit.power'
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
  | 'contact.info.address.value'
  | 'contact.info.phone'
  | 'contact.info.hours'
  | 'contact.info.email'
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
  | 'calculator.disclaimer'
  | 'config.title'
  | 'config.subtitle'
  | 'config.rotate'
  | 'config.color.title'
  | 'config.wheels.title'
  | 'config.interior.title'
  | 'config.total'
  | 'config.order'
  | 'wheels.standard'
  | 'wheels.sport'
  | 'wheels.luxury'
  | 'interior.standard'
  | 'interior.premium'
  | 'interior.luxury'
  | 'about.title'
  | 'about.subtitle'
  | 'about.mission.title'
  | 'about.mission.description'
  | 'about.vision.title'
  | 'about.vision.description'
  | 'about.history.title'
  | 'about.history.year2020'
  | 'about.history.year2021'
  | 'about.history.year2022'
  | 'about.history.year2023'
  | 'about.history.year2024'
  | 'about.history.year2025'
  | 'about.history.title2020'
  | 'about.history.title2021'
  | 'about.history.title2022'
  | 'about.history.title2023'
  | 'about.history.title2024'
  | 'about.history.title2025'
  | 'about.history.description2020'
  | 'about.history.description2021'
  | 'about.history.description2022'
  | 'about.history.description2023'
  | 'about.history.description2024'
  | 'about.history.description2025'
  | 'about.values.title'
  | 'about.values.innovation.title'
  | 'about.values.innovation.description'
  | 'about.values.sustainability.title'
  | 'about.values.sustainability.description'
  | 'about.values.quality.title'
  | 'about.values.quality.description'
  | 'about.values.customer.title'
  | 'about.values.customer.description'
  | 'manuals.title'
  | 'manuals.subtitle'
  | 'manuals.download'
  | 'manuals.support.title'
  | 'manuals.support.description'
  | 'manuals.owner.title'
  | 'manuals.owner.description'
  | 'manuals.service.title'
  | 'manuals.service.description'
  | 'manuals.quick.title'
  | 'manuals.quick.description'
  | 'manuals.user.title'
  | 'manuals.user.description'
  | 'manuals.warranty.title'
  | 'manuals.warranty.description'
  | 'manuals.safety.title'
  | 'manuals.safety.description'
  | 'price.title'
  | 'price.subtitle'
  | 'price.standard.title'
  | 'price.standard.features'
  | 'price.premium.title'
  | 'price.premium.features'
  | 'price.luxury.title'
  | 'price.luxury.features'
  | 'price.select'
  | 'price.financing.title'
  | 'price.financing.description'
  | 'price.financing.button'
  | 'price.feature.battery'
  | 'price.feature.range'
  | 'price.feature.speed'
  | 'price.feature.charging'
  | 'price.feature.interior'
  | 'price.feature.warranty'
  | 'privacy.title'
  | 'privacy.subtitle'
  | 'privacy.collection.title'
  | 'privacy.collection.content'
  | 'privacy.usage.title'
  | 'privacy.usage.content'
  | 'privacy.sharing.title'
  | 'privacy.sharing.content'
  | 'privacy.security.title'
  | 'privacy.security.content'
  | 'privacy.cookies.title'
  | 'privacy.cookies.content'
  | 'privacy.rights.title'
  | 'privacy.rights.content'
  | 'privacy.contact.title'
  | 'privacy.contact.description'
  | 'privacy.contact.email'
  | 'privacy.contact.phone'
  | 'privacy.contact.address'
  | 'privacy.contact.address.value'
  | 'privacy.lastUpdated'
  | 'privacy.lastUpdated.date'
  | 'warranty.title'
  | 'warranty.subtitle'
  | 'warranty.terms.title'
  | 'warranty.terms.1'
  | 'warranty.terms.2'
  | 'warranty.terms.3'
  | 'warranty.terms.4'
  | 'warranty.terms.5'
  | 'warranty.service.title'
  | 'warranty.service.description'
  | 'warranty.service.online.title'
  | 'warranty.service.online.description'
  | 'warranty.service.phone.title'
  | 'warranty.service.phone.description'
  | 'warranty.service.email.title'
  | 'warranty.service.email.description'
  | 'warranty.service.chat.title'
  | 'warranty.service.chat.description'
  | 'warranty.battery.description'
  | 'warranty.motor.description'
  | 'warranty.body.description'
  | 'warranty.paint.description'
  | 'dealer.info'
  | 'warranty.info'
  | 'service.info';

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
    'hero.title': 'ROX01 ',
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
    'car.subtitle': 'ROX01 - Электрический кроссовер нового поколения',
    'car.description': 'ROX 01 - продуманная конфигурация под ваши задачи.',
    'car.features.title': 'Особенности',
    'car.features.description': 'Узнайте больше о преимуществах ROX01.',
    'car.features.1': 'Полностью электрический двигатель',
    'car.features.2': 'Запас хода до 500 км',
    'car.features.3': 'Разгон 0-100 км/ч за 4.5 секунды',
    'car.features.4': 'Система умной зарядки',
    'car.features.5': 'Передовые системы безопасности',
    'car.price.7seater': '29 900 000 тг',
    'car.price.6seater': '31 500 000 тг',
    'car.configuration.title': 'Доступные конфигурации',
    'car.configuration.7seater': '7-местная конфигурация',
    'car.configuration.6seater': '6-местная конфигурация',
    'car.configuration.seating': 'Модель доступна в 7-местной конфигурации стоимостью 29 900 000 тг и 6-местной конфигурации стоимостью 31 500 000 тг.',
    'car.configuration.difference': 'Ключевое отличие - второй ряд. А также в 6-местной версии установлены индивидуальные кресла Zero Gravity с расширенной регулировкой и максимальным комфортом в дальних поездках.',
    'car.configuration.choice': 'Выбор за вами: вместительность или премиум-эргономика.',
    'car.meaning.line': 'ROX 01 - каждый штрих имеет значение.',
    'car.meaning.stone': 'Символ камня - прочность, устойчивость, внутренняя сила.',
    'car.meaning.style': 'Это не просто стиль. Это характер в деталях.',
    'car.spirit.title': 'Дух ROX',
    'car.spirit.description': 'Когда ветер встречается с землей, когда кони устремляются к горизонту - рождается истинный дух ROX 01.',
    'car.spirit.spring': 'Весна в степи — время силы, свободы и движения вперед.',
    'car.spirit.power': 'Это не просто кадры. Это — мощь. Это — первозданная сила природы. Это — ROX.',
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
    'contact.info.address': 'Адрес',
    'contact.info.address.value': 'Сарайшык 34 А, Астана, Казахстан 010000',
    'contact.info.phone': 'Телефон',
    'contact.info.hours': 'Пн-Пт: 9:00 - 18:00',
    'contact.info.email': 'Email',
    'footer.about.title': 'О компании',
    'footer.about.description': 'ROX Motors - первый казахстанский производитель электромобилей, создающий инновационные и экологичные транспортные решения.',
    'footer.navigation': 'Навигация',
    'footer.contact.title': 'Контакты',
    'footer.contact.address': 'Сарайшык 34 А, Акмола, Астана, Казахстан 010000',
    'footer.contact.phone': '+7 (771) 525 35 95',
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
    'admin.comingSoon': 'Скоро будет доступно',
    'config.title': 'Конфигуратор',
    'config.subtitle': 'Создайте свой идеальный ROX01',
    'config.rotate': 'Повернуть для просмотра',
    'config.color.title': 'Выберите цвет',
    'config.wheels.title': 'Выберите колеса',
    'config.interior.title': 'Выберите интерьер',
    'config.total': 'Итоговая стоимость',
    'config.order': 'Оформить заказ',
    'wheels.standard': 'Стандартные',
    'wheels.sport': 'Спортивные',
    'wheels.luxury': 'Люкс',
    'interior.standard': 'Стандартный',
    'interior.premium': 'Премиум',
    'interior.luxury': 'Люкс',
    'about.title': 'О компании',
    'about.subtitle': 'Инновации в автомобильной промышленности Казахстана',
    'about.mission.title': 'Наша миссия',
    'about.mission.description': 'Создавать передовые электромобили, которые изменят будущее транспорта в Казахстане',
    'about.vision.title': 'Наше видение',
    'about.vision.description': 'Стать лидером в производстве электромобилей в Центральной Азии',
    'about.history.title': 'История компании',
    'about.history.year2020': '2020',
    'about.history.year2021': '2021',
    'about.history.year2022': '2022',
    'about.history.year2023': '2023',
    'about.history.year2024': '2024',
    'about.history.year2025': '2025',
    'about.history.title2020': 'Основание компании',
    'about.history.title2021': 'Начало разработки',
    'about.history.title2022': 'Первые прототипы',
    'about.history.title2023': 'Запуск производства',
    'about.history.title2024': 'Расширение линейки',
    'about.history.title2025': 'Международный выход',
    'about.history.description2020': 'Создание компании ROX Motors',
    'about.history.description2021': 'Начало разработки первого электромобиля',
    'about.history.description2022': 'Создание и тестирование первых прототипов',
    'about.history.description2023': 'Запуск серийного производства ROX01',
    'about.history.description2024': 'Разработка новых моделей',
    'about.history.description2025': 'Выход на международный рынок',
    'about.values.title': 'Наши ценности',
    'about.values.innovation.title': 'Инновации',
    'about.values.innovation.description': 'Постоянное стремление к совершенствованию и внедрению новых технологий',
    'about.values.sustainability.title': 'Устойчивое развитие',
    'about.values.sustainability.description': 'Забота об окружающей среде и будущих поколениях',
    'about.values.quality.title': 'Качество',
    'about.values.quality.description': 'Высокие стандарты на всех этапах производства',
    'about.values.customer.title': 'Клиентоориентированность',
    'about.values.customer.description': 'Внимание к потребностям и пожеланиям наших клиентов',
    'manuals.title': 'Руководства',
    'manuals.subtitle': 'Документация и инструкции по эксплуатации ROX01',
    'manuals.download': 'Скачать PDF',
    'manuals.support.title': 'Техническая поддержка',
    'manuals.support.description': 'Если у вас возникли вопросы, наша служба поддержки всегда готова помочь',
    'manuals.owner.title': 'Руководство пользователя',
    'manuals.owner.description': 'Полное руководство по эксплуатации вашего ROX01',
    'manuals.service.title': 'Сервисное руководство',
    'manuals.service.description': 'Техническая информация для обслуживания и ремонта',
    'manuals.quick.title': 'Краткое руководство',
    'manuals.quick.description': 'Основные функции и быстрый старт',
    'manuals.user.title': 'Руководство пользователя',
    'manuals.user.description': 'Полное руководство по эксплуатации вашего ROX01',
    'manuals.warranty.title': 'Гарантийное руководство',
    'manuals.warranty.description': 'Условия гарантии и обслуживания',
    'manuals.safety.title': 'Руководство по безопасности',
    'manuals.safety.description': 'Важная информация о безопасности и правилах эксплуатации',
    'price.title': 'Цены и комплектации',
    'price.subtitle': 'Выберите подходящую комплектацию ROX01',
    'price.standard.title': 'Стандарт',
    'price.standard.features': '- Базовая комплектация',
    'price.premium.title': 'Премиум',
    'price.premium.features': '- Расширенная комплектация',
    'price.luxury.title': 'Люкс',
    'price.luxury.features': '- Максимальная комплектация',
    'price.select': 'Выбрать конфигурацию',
    'price.financing.title': 'Доступное финансирование',
    'price.financing.description': 'Мы предлагаем гибкие условия финансирования для покупки вашего ROX01',
    'price.financing.button': 'Узнать больше',
    'price.feature.battery': 'Батарея 100 кВтч',
    'price.feature.range': 'Запас хода 500 км',
    'price.feature.speed': 'Разгон 0-100 км/ч за 4.5 сек',
    'price.feature.charging': 'Быстрая зарядка',
    'price.feature.interior': 'Премиум интерьер',
    'price.feature.warranty': '5 лет гарантии',
    'privacy.title': 'Политика конфиденциальности',
    'privacy.subtitle': 'Как мы защищаем ваши данные',
    'privacy.collection.title': 'Сбор информации',
    'privacy.collection.content': 'Мы собираем информацию, которую вы предоставляете при использовании наших услуг.\nЭто может включать личную информацию, такую как имя, адрес электронной почты и номер телефона.',
    'privacy.usage.title': 'Использование информации',
    'privacy.usage.content': 'Мы используем собранную информацию для предоставления и улучшения наших услуг.\nВаша информация помогает нам персонализировать ваш опыт и общаться с вами.',
    'privacy.sharing.title': 'Передача информации',
    'privacy.sharing.content': 'Мы не продаем и не передаем вашу личную информацию третьим лицам.\nИсключения составляют случаи, предусмотренные законодательством.',
    'privacy.security.title': 'Безопасность',
    'privacy.security.content': 'Мы принимаем необходимые меры для защиты вашей информации.\nИспользуем современные технологии шифрования и безопасного хранения данных.',
    'privacy.cookies.title': 'Файлы cookie',
    'privacy.cookies.content': 'Мы используем файлы cookie для улучшения работы сайта.\nВы можете настроить свой браузер для отказа от использования файлов cookie.',
    'privacy.rights.title': 'Ваши права',
    'privacy.rights.content': 'Вы имеете право на доступ к своей личной информации.\nВы можете запросить удаление или изменение вашей информации.',
    'privacy.contact.title': 'Связаться с нами',
    'privacy.contact.description': 'Если у вас есть вопросы о нашей политике конфиденциальности, свяжитесь с нами:',
    'privacy.contact.email': 'Email',
    'privacy.contact.phone': 'Телефон',
    'privacy.contact.address': 'Адрес',
    'privacy.contact.address.value': 'Сарайшык 34 А, Акмола, Астана, Казахстан 010000',
    'privacy.lastUpdated': 'Последнее обновление',
    'privacy.lastUpdated.date': '20 мая 2025 г.',
    'warranty.title': 'Гарантия',
    'warranty.subtitle': 'Информация о гарантийном обслуживании',
    'warranty.terms.title': 'Условия гарантии',
    'warranty.terms.1': 'Гарантия действует в течение 5 лет или 150 000 км пробега',
    'warranty.terms.2': 'Гарантия на батарею - 8 лет или 200 000 км пробега',
    'warranty.terms.3': 'Гарантия распространяется на все производственные дефекты',
    'warranty.terms.4': 'Гарантийное обслуживание доступно во всех официальных сервисных центрах',
    'warranty.terms.5': 'Регулярное техническое обслуживание обязательно для сохранения гарантии',
    'warranty.service.title': 'Сервисное обслуживание',
    'warranty.service.description': 'Мы предлагаем несколько способов получить гарантийное обслуживание',
    'warranty.service.online.title': 'Онлайн запись',
    'warranty.service.online.description': 'Запишитесь на сервис через наш сайт',
    'warranty.service.phone.title': 'По телефону',
    'warranty.service.phone.description': 'Свяжитесь с нами по телефону для получения помощи.',
    'warranty.service.email.title': 'По электронной почте',
    'warranty.service.email.description': 'Напишите нам на электронную почту.',
    'warranty.service.chat.title': 'В чате',
    'warranty.service.chat.description': 'Получите мгновенную помощь в онлайн-чате.',
    'warranty.battery.description': 'Гарантия на высоковольтную батарею включает защиту от дефектов и поддержание минимальной емкости.',
    'warranty.motor.description': 'Полная гарантия на электродвигатель и все его компоненты.',
    'warranty.body.description': 'Защита от сквозной коррозии и структурных дефектов кузова.',
    'warranty.paint.description': 'Гарантия на лакокрасочное покрытие от дефектов и выцветания.',
    'dealer.info': 'Официальный дилер ROX в г. Астана',
    'warranty.info': 'Гарантия 5 лет и 8 лет на аккумулятор',
    'service.info': 'Сервисный центр в г. Астана'
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
    'hero.title': 'ROX01',
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
    'car.subtitle': 'ROX01 - Жаңа ұрпақ электр кроссовері',
    'car.description': 'ROX 01 – сіздің міндеттеріңізге сәйкес ойластырылған конфигурация.',
    'car.features.title': 'Ерекшеліктер',
    'car.features.description': 'ROX01 артықшылықтары туралы көбірек біліңіз.',
    'car.features.1': 'Толығымен электр қозғалтқышы',
    'car.features.2': '500 км дейінгі қашықтық',
    'car.features.3': '0-100 км/сағ 4.5 секундта жылдамдық',
    'car.features.4': 'Ақылды зарядтау жүйесі',
    'car.features.5': 'Озық қауіпсіздік жүйелері',
    'car.price.7seater': '29 900 000 тг',
    'car.price.6seater': '31 500 000 тг',
    'car.configuration.title': 'Қолжетімді конфигурациялар',
    'car.configuration.7seater': '7 орындық конфигурация',
    'car.configuration.6seater': '6 орындық конфигурация',
    'car.configuration.seating': 'Модель 7 орындық конфигурацияда 29 900 000 тг және 6 орындық конфигурацияда 31 500 000 тг бағасымен қолжетімді.',
    'car.configuration.difference': 'Негізгі айырмашылық – екінші қатар. Сонымен қатар, 6 орындық нұсқада ұзақ сапарларда жайлылықты арттыратын және кеңейтілген реттеу мүмкіндігі бар Zero Gravity жеке орындықтары орнатылған.',
    'car.configuration.choice': 'Таңдау сіздікі: сыйымдылық немесе премиум-эргономика.',
    'car.meaning.line': 'ROX 01 - әр сызығында мағынасы бар.',
    'car.meaning.stone': 'Тас символы - беріктік, тұрақтылық, ішкі күш.',
    'car.meaning.style': 'Бұл жай ғана стиль емес. Бұл - детальдердегі мінез.',
    'car.spirit.title': 'ROX рухы',
    'car.spirit.description': 'Жел мен жер тоғысқан, тұлпарлар көкжиекке қарай самғаған сәтте — нағыз ROX 01 рухы туылады.',
    'car.spirit.spring': 'Даладағы көктем — күштің, еркіндіктің және алға ұмтылыстың мезгілі.',
    'car.spirit.power': 'Бұл жай ғана кадрлар емес. Бұл — қуат. Бұл — табиғаттың бастапқы күші. Бұл — ROX.',
    'contact.title': 'Бізбен байланысыңыз',
    'contact.subtitle': 'Сұрақтарыңызға жауап беруге әрдайым дайынбыз',
    'contact.description': 'Форманы толтырыңыз, және біздің менеджер сізбен жақын арада байланысады',
    'contact.name': 'Аты',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. пошта',
    'contact.privacy': 'Мен құпиялылық саясатымен келісемін',
    'contact.form.name': 'Сіздің атыңыз',
    'contact.form.phone': 'Телефон',
    'contact.form.email': 'Email',
    'contact.form.message': 'Хабарлама',
    'contact.form.submit': 'Жіберу',
    'contact.info.title': 'Байланыс ақпараты',
    'contact.info.address': 'Мекенжай',
    'contact.info.address.value': 'Сарайшық 34 A, Ақмола, Астана, Қазақстан 010000',
    'contact.info.phone': 'Телефон',
    'contact.info.hours': 'Дс–Жм: 9:00 – 18:00',
    'contact.info.email': 'Email',
    'footer.about.title': 'Компания туралы',
    'footer.about.description': 'ROX Motors - инновациялық және экологиялық таза көлік шешімдерін жасайтын Қазақстанның алғашқы электромобиль өндірушісі.',
    'footer.navigation': 'Навигация',
    'footer.contact.title': 'Байланыс',
    'footer.contact.address': 'Сарайшык 34 А, Ақмола, Астана, Қазақстан 010000',
    'footer.contact.phone': '+7 (771) 525 35 95',
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
    'admin.comingSoon': 'Жақында қолжетімді болады',
    'config.title': 'Конфигуратор',
    'config.subtitle': 'Өзіңіздің мінсіз ROX01-ді жасаңыз',
    'config.rotate': 'Көру үшін бұру',
    'config.color.title': 'Түсті таңдаңыз',
    'config.wheels.title': 'Дөңгелектерді таңдаңыз',
    'config.interior.title': 'Интерьерді таңдаңыз',
    'config.total': 'Жалпы баға',
    'config.order': 'Тапсырыс беру',
    'wheels.standard': 'Стандартты',
    'wheels.sport': 'Спорттық',
    'wheels.luxury': 'Люкс',
    'interior.standard': 'Стандартты',
    'interior.premium': 'Премиум',
    'interior.luxury': 'Люкс',
    'about.title': 'Компания туралы',
    'about.subtitle': 'Қазақстанның автомобиль өнеркәсібіндегі инновациялар',
    'about.mission.title': 'Біздің миссиямыз',
    'about.mission.description': 'Қазақстандағы көлік болашағын өзгертетін озық электромобильдер жасау',
    'about.vision.title': 'Біздің көзқарасымыз',
    'about.vision.description': 'Орталық Азиядағы электромобиль өндірісінің көшбасшысы болу',
    'about.history.title': 'Компания тарихы',
    'about.history.year2020': '2020',
    'about.history.year2021': '2021',
    'about.history.year2022': '2022',
    'about.history.year2023': '2023',
    'about.history.year2024': '2024',
    'about.history.year2025': '2025',
    'about.history.title2020': 'Компанияның құрылуы',
    'about.history.title2021': 'Әзірлеудің басталуы',
    'about.history.title2022': 'Алғашқы прототиптер',
    'about.history.title2023': 'Өндірістің іске қосылуы',
    'about.history.title2024': 'Модельдік қатардың кеңеюі',
    'about.history.title2025': 'Халықаралық нарыққа шығу',
    'about.history.description2020': 'ROX Motors компаниясының құрылуы',
    'about.history.description2021': 'Алғашқы электромобильді әзірлеудің басталуы',
    'about.history.description2022': 'Алғашқы прототиптерді жасау және тестілеу',
    'about.history.description2023': 'ROX01 сериялық өндірісінің басталуы',
    'about.history.description2024': 'Жаңа модельдерді әзірлеу',
    'about.history.description2025': 'Халықаралық нарыққа шығу',
    'about.values.title': 'Біздің құндылықтарымыз',
    'about.values.innovation.title': 'Инновациялар',
    'about.values.innovation.description': 'Үнемі жетілдіру және жаңа технологияларды енгізуге ұмтылу',
    'about.values.sustainability.title': 'Тұрақты даму',
    'about.values.sustainability.description': 'Қоршаған орта мен болашақ ұрпақ туралы қамқорлық',
    'about.values.quality.title': 'Сапа',
    'about.values.quality.description': 'Өндірістің барлық кезеңдерінде жоғары стандарттар',
    'about.values.customer.title': 'Клиентке бағдарлану',
    'about.values.customer.description': 'Клиенттеріміздің қажеттіліктері мен тілектеріне назар аудару',
    'manuals.title': 'Нұсқаулықтар',
    'manuals.subtitle': 'ROX01 құжаттамасы мен пайдалану нұсқаулықтары',
    'manuals.download': 'PDF жүктеу',
    'manuals.support.title': 'Техникалық қолдау',
    'manuals.support.description': 'Егер сұрақтарыңыз болса, біздің қолдау қызметі әрдайым көмектесуге дайын',
    'manuals.owner.title': 'Пайдаланушы нұсқаулығы',
    'manuals.owner.description': 'ROX01 пайдалануға арналған толық нұсқаулық',
    'manuals.service.title': 'Қызмет көрсету нұсқаулығы',
    'manuals.service.description': 'Қызмет көрсету және жөндеу үшін техникалық ақпарат',
    'manuals.quick.title': 'Қысқаша нұсқаулық',
    'manuals.quick.description': 'Негізгі функциялар мен жылдам бастау',
    'manuals.user.title': 'Пайдаланушы нұсқаулығы',
    'manuals.user.description': 'ROX01 пайдалануға арналған толық нұсқаулық',
    'manuals.warranty.title': 'Кепілдік нұсқаулығы',
    'manuals.warranty.description': 'Кепілдік және қызмет көрсету шарттары',
    'manuals.safety.title': 'Қауіпсіздік нұсқаулығы',
    'manuals.safety.description': 'Қауіпсіздік және пайдалану ережелері туралы маңызды ақпарат',
    'price.title': 'Бағалар мен жинақтамалар',
    'price.subtitle': 'ROX01 жинақтамасын таңдаңыз',
    'price.standard.title': 'Стандарт',
    'price.standard.features': '- Негізгі жинақтама',
    'price.premium.title': 'Премиум',
    'price.premium.features': '- Кеңейтілген жинақтама',
    'price.luxury.title': 'Люкс',
    'price.luxury.features': '- Максималды жинақтама',
    'price.select': 'Конфигурацияны таңдау',
    'price.financing.title': 'Қолжетімді қаржыландыру',
    'price.financing.description': 'Біз ROX01 сатып алу үшін икемді қаржыландыру шарттарын ұсынамыз',
    'price.financing.button': 'Көбірек білу',
    'price.feature.battery': '100 кВтс батарея',
    'price.feature.range': '500 км жүріс қашықтығы',
    'price.feature.speed': '0-100 км/сағ 4.5 секундта',
    'price.feature.charging': 'Жылдам зарядтау',
    'price.feature.interior': 'Премиум интерьер',
    'price.feature.warranty': '5 жыл кепілдік',
    'privacy.title': 'Құпиялылық саясаты',
    'privacy.subtitle': 'Біз сіздің деректеріңізді қалай қорғаймыз',
    'privacy.collection.title': 'Ақпарат жинау',
    'privacy.collection.content': 'Біз сіз біздің қызметтерімізді пайдалану кезінде берген ақпаратты жинаймыз.\nБұған есіміңіз, электрондық пошта мекенжайы және телефон нөмірі сияқты жеке ақпарат кіруі мүмкін.',
    'privacy.usage.title': 'Ақпаратты пайдалану',
    'privacy.usage.content': 'Біз жиналған ақпаратты қызметтерімізді ұсыну және жақсарту үшін пайдаланамыз.\nСіздің ақпаратыңыз сіздің тәжірибеңізді дербестендіруге және сізбен байланысуға көмектеседі.',
    'privacy.sharing.title': 'Ақпарат тарату',
    'privacy.sharing.content': 'Біз сіздің жеке ақпаратыңызды үшінші тараптарға сатпаймыз және бермейміз.\nЗаңнамада қарастырылған жағдайлар ерекшелік болып табылады.',
    'privacy.security.title': 'Қауіпсіздік',
    'privacy.security.content': 'Біз сіздің ақпаратыңызды қорғау үшін қажетті шараларды қолданамыз.\nДеректерді шифрлау мен қауіпсіз сақтаудың заманауи технологияларын қолданамыз.',
    'privacy.cookies.title': 'Cookie файлдары',
    'privacy.cookies.content': 'Біз сайттың жұмысын жақсарту үшін cookie файлдарын пайдаланамыз.\nБраузеріңізді cookie файлдарын пайдаланудан бас тарту үшін баптай аласыз.',
    'privacy.rights.title': 'Сіздің құқықтарыңыз',
    'privacy.rights.content': 'Сіздің жеке ақпаратыңызға қол жеткізу құқығыңыз бар.\nСіз өз ақпаратыңызды жоюды немесе өзгертуді сұрай аласыз.',
    'privacy.contact.title': 'Бізбен байланысу',
    'privacy.contact.description': 'Егер сізде біздің құпиялылық саясатымыз туралы сұрақтар болса, бізбен байланысыңыз:',
    'privacy.contact.email': 'Email',
    'privacy.contact.phone': 'Телефон',
    'privacy.contact.address': 'Мекенжай',
    'privacy.contact.address.value': 'Сарайшык 34 А, Ақмола, Астана, Қазақстан 010000',
    'privacy.lastUpdated': 'Соңғы жаңарту',
    'privacy.lastUpdated.date': '20 мамыр 2025 ж.',
    'warranty.title': 'Кепілдік',
    'warranty.subtitle': 'Кепілдік қызмет көрсету туралы ақпарат',
    'warranty.terms.title': 'Кепілдік шарттары',
    'warranty.terms.1': 'Кепілдік 5 жыл немесе 150 000 км жүріске дейін жарамды',
    'warranty.terms.2': 'Батареяға кепілдік - 8 жыл немесе 200 000 км жүріс',
    'warranty.terms.3': 'Кепілдік барлық өндірістік ақауларға қолданылады',
    'warranty.terms.4': 'Кепілдік қызметі барлық ресми сервис орталықтарында қолжетімді',
    'warranty.terms.5': 'Кепілдікті сақтау үшін жүйелі техникалық қызмет көрсету міндетті',
    'warranty.service.title': 'Сервистік қызмет көрсету',
    'warranty.service.description': 'Біз кепілдік қызметін алудың бірнеше тәсілін ұсынамыз',
    'warranty.service.online.title': 'Онлайн жазылу',
    'warranty.service.online.description': 'Біздің сайт арқылы сервиске жазылыңыз',
    'warranty.service.phone.title': 'Телефон арқылы',
    'warranty.service.phone.description': 'Көмек алу үшін бізбен телефон арқылы байланысыңыз.',
    'warranty.service.email.title': 'Электрондық пошта арқылы',
    'warranty.service.email.description': 'Бізге электрондық пошта арқылы жазыңыз.',
    'warranty.service.chat.title': 'Чат арқылы',
    'warranty.service.chat.description': 'Онлайн-чатта жедел көмек алыңыз.',
    'warranty.battery.description': 'Жоғары вольтты батареяға кепілдік ақауларды жөндеуді және минималды сыйымдылықты сақтауды қамтиды.',
    'warranty.motor.description': 'Электр қозғалтқышы мен оның барлық компоненттеріне толық кепілдік.',
    'warranty.body.description': 'Тот басудан және құрылымдық ақаулардан қорғау.',
    'warranty.paint.description': 'Бояу жабынының ақаулары мен оңуына кепілдік.',
    'dealer.info': 'ROX компаниясының Астана қаласындағы ресми дилері',
    'warranty.info': 'Жалпы кепілдік 5 жыл және аккумуляторға 8 жыл',
    'service.info': 'Астана қаласындағы сервис орталығы'
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
    'hero.title': 'ROX01',
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
    'car.subtitle': 'ROX01 - Next Generation Electric Crossover',
    'car.description': 'ROX 01 - thoughtfully configured for your needs.',
    'car.features.title': 'Features',
    'car.features.description': 'Learn more about the advantages of ROX01.',
    'car.features.1': 'Fully Electric Motor',
    'car.features.2': 'Range up to 500 km',
    'car.features.3': '0-100 km/h in 4.5 seconds',
    'car.features.4': 'Smart Charging System',
    'car.features.5': 'Advanced Safety Systems',
    'car.price.7seater': '29,900,000 tenge',
    'car.price.6seater': '31,500,000 tenge',
    'car.configuration.title': 'Available Configurations',
    'car.configuration.7seater': '7-seat configuration',
    'car.configuration.6seater': '6-seat configuration',
    'car.configuration.seating': 'Model is available in 7-seat configuration for 29,900,000 tenge and 6-seat configuration for 31,500,000 tenge.',
    'car.configuration.difference': 'The key difference is the second row. The 6-seat version features individual Zero Gravity seats with enhanced adjustment and maximum comfort for long journeys.',
    'car.configuration.choice': 'The choice is yours: capacity or premium ergonomics.',
    'car.meaning.line': 'ROX 01 - meaning in every line.',
    'car.meaning.stone': 'Stone symbol - strength, stability, inner power.',
    'car.meaning.style': 'This is not just style. This is character in details.',
    'car.spirit.title': 'ROX Spirit',
    'car.spirit.description': 'When wind meets earth, when horses soar towards the horizon - the true spirit of ROX 01 is born.',
    'car.spirit.spring': 'Spring in the steppe is a time of power, freedom, and forward momentum.',
    'car.spirit.power': 'These are not just frames. This is power. This is the primal force of nature. This is ROX.',
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
    'contact.info.address': 'Address',
    'contact.info.address.value': 'Saraishyk 34 A, Akmola, Astana, Kazakhstan 010000',
    'contact.info.phone': 'Phone',
    'contact.info.hours': 'Mon–Fri: 9:00 – 18:00',
    'contact.info.email': 'Email',
    'footer.about.title': 'About Us',
    'footer.about.description': 'ROX Motors is Kazakhstan\'s first electric vehicle manufacturer, creating innovative and eco-friendly transportation solutions.',
    'footer.navigation': 'Navigation',
    'footer.contact.title': 'Contact',
    'footer.contact.address': 'Saraishyk 34 A, Astana, Kazakhstan 010000',
    'footer.contact.phone': '+7 (771) 525 35 95',
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
    'admin.comingSoon': 'Coming Soon',
    'config.title': 'Configurator',
    'config.subtitle': 'Create your perfect ROX01',
    'config.rotate': 'Rotate for viewing',
    'config.color.title': 'Choose color',
    'config.wheels.title': 'Choose wheels',
    'config.interior.title': 'Choose interior',
    'config.total': 'Total price',
    'config.order': 'Place order',
    'wheels.standard': 'Standard',
    'wheels.sport': 'Sport',
    'wheels.luxury': 'Luxury',
    'interior.standard': 'Standard',
    'interior.premium': 'Premium',
    'interior.luxury': 'Luxury',
    'about.title': 'About Us',
    'about.subtitle': 'Innovation in Kazakhstan\'s Automotive Industry',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To create advanced electric vehicles that will transform the future of transportation in Kazakhstan',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To become the leader in electric vehicle manufacturing in Central Asia',
    'about.history.title': 'Company History',
    'about.history.year2020': '2020',
    'about.history.year2021': '2021',
    'about.history.year2022': '2022',
    'about.history.year2023': '2023',
    'about.history.year2024': '2024',
    'about.history.year2025': '2025',
    'about.history.title2020': 'Company Foundation',
    'about.history.title2021': 'Development Begins',
    'about.history.title2022': 'First Prototypes',
    'about.history.title2023': 'Production Launch',
    'about.history.title2024': 'Model Line Expansion',
    'about.history.title2025': 'International Launch',
    'about.history.description2020': 'Establishment of ROX Motors',
    'about.history.description2021': 'Beginning of first electric vehicle development',
    'about.history.description2022': 'Creation and testing of first prototypes',
    'about.history.description2023': 'Launch of ROX01 serial production',
    'about.history.description2024': 'Development of new models',
    'about.history.description2025': 'Expansion to international markets',
    'about.values.title': 'Our Values',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.description': 'Continuous pursuit of improvement and new technologies',
    'about.values.sustainability.title': 'Sustainability',
    'about.values.sustainability.description': 'Care for the environment and future generations',
    'about.values.quality.title': 'Quality',
    'about.values.quality.description': 'High standards at all stages of production',
    'about.values.customer.title': 'Customer Focus',
    'about.values.customer.description': 'Attention to our customers\' needs and wishes',
    'manuals.title': 'Manuals',
    'manuals.subtitle': 'Documentation and operating instructions for ROX01',
    'manuals.download': 'Download PDF',
    'manuals.support.title': 'Technical Support',
    'manuals.support.description': 'If you have any questions, our support team is always ready to help',
    'manuals.owner.title': 'Owner\'s Manual',
    'manuals.owner.description': 'Complete guide to operating your ROX01',
    'manuals.service.title': 'Service Manual',
    'manuals.service.description': 'Technical information for maintenance and repair',
    'manuals.quick.title': 'Quick Start Guide',
    'manuals.quick.description': 'Essential features and quick start guide',
    'manuals.user.title': 'User Manual',
    'manuals.user.description': 'Complete guide to operating your ROX01',
    'manuals.warranty.title': 'Warranty Guide',
    'manuals.warranty.description': 'Warranty terms and service conditions',
    'manuals.safety.title': 'Safety Manual',
    'manuals.safety.description': 'Important safety information and operating rules',
    'price.title': 'Prices and Configurations',
    'price.subtitle': 'Choose your ROX01 configuration',
    'price.standard.title': 'Standard',
    'price.standard.features': '- Base configuration',
    'price.premium.title': 'Premium',
    'price.premium.features': '- Enhanced configuration',
    'price.luxury.title': 'Luxury',
    'price.luxury.features': '- Maximum configuration',
    'price.select': 'Select Configuration',
    'price.financing.title': 'Accessible Financing',
    'price.financing.description': 'We offer flexible financing options for your ROX01 purchase',
    'price.financing.button': 'Learn More',
    'price.feature.battery': '100 kWh Battery',
    'price.feature.range': '500 km Range',
    'price.feature.speed': '0-100 km/h in 4.5s',
    'price.feature.charging': 'Fast Charging',
    'price.feature.interior': 'Premium Interior',
    'price.feature.warranty': '5 Year Warranty',
    'privacy.title': 'Privacy Policy',
    'privacy.subtitle': 'How we protect your data',
    'privacy.collection.title': 'Information Collection',
    'privacy.collection.content': 'We collect information that you provide when using our services.\nThis may include personal information such as name, email address, and phone number.',
    'privacy.usage.title': 'Information Usage',
    'privacy.usage.content': 'We use the collected information to provide and improve our services.\nYour information helps us personalize your experience and communicate with you.',
    'privacy.sharing.title': 'Information Sharing',
    'privacy.sharing.content': 'We do not sell or transfer your personal information to third parties.\nExceptions are cases provided for by law.',
    'privacy.security.title': 'Security',
    'privacy.security.content': 'We take necessary measures to protect your information.\nWe use modern encryption technologies and secure data storage.',
    'privacy.cookies.title': 'Cookies',
    'privacy.cookies.content': 'We use cookies to improve website functionality.\nYou can configure your browser to reject cookies.',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.content': 'You have the right to access your personal information.\nYou can request deletion or modification of your information.',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.description': 'If you have questions about our privacy policy, contact us:',
    'privacy.contact.email': 'Email',
    'privacy.contact.phone': 'Phone',
    'privacy.contact.address': 'Address',
    'privacy.contact.address.value': 'Saraishyk 34 A, Astana, Kazakhstan 010000',
    'privacy.lastUpdated': 'Last Updated',
    'privacy.lastUpdated.date': 'May 20, 2025',
    'warranty.title': 'Warranty',
    'warranty.subtitle': 'Warranty Service Information',
    'warranty.terms.title': 'Warranty Terms',
    'warranty.terms.1': 'Warranty is valid for 5 years or 150,000 km',
    'warranty.terms.2': 'Battery warranty - 8 years or 200,000 km',
    'warranty.terms.3': 'Warranty covers all manufacturing defects',
    'warranty.terms.4': 'Warranty service is available at all official service centers',
    'warranty.terms.5': 'Regular maintenance is required to maintain warranty',
    'warranty.service.title': 'Service',
    'warranty.service.description': 'We offer several ways to get warranty service',
    'warranty.service.online.title': 'Online Booking',
    'warranty.service.online.description': 'Schedule service through our website',
    'warranty.service.phone.title': 'By Phone',
    'warranty.service.phone.description': 'Contact us by phone for assistance.',
    'warranty.service.email.title': 'By Email',
    'warranty.service.email.description': 'Write to us via email.',
    'warranty.service.chat.title': 'By Chat',
    'warranty.service.chat.description': 'Get instant help through online chat.',
    'warranty.battery.description': 'High-voltage battery warranty includes defect protection and minimum capacity maintenance.',
    'warranty.motor.description': 'Full warranty on electric motor and all its components.',
    'warranty.body.description': 'Protection against rust perforation and structural defects.',
    'warranty.paint.description': 'Warranty against paint defects and fading.',
    'dealer.info': 'Official ROX dealer in Astana',
    'warranty.info': '5-year general warranty and 8-year battery warranty',
    'service.info': 'ROX Service Center in Astana'
  }
};
