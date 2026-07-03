// Translations for UI chrome (nav, hero, sections, footer)
const translations = {
  lv: {
    langName: "Latviešu",
    nav: { menu: "Ēdienkarte", about: "Par mums", location: "Atrašanās vieta", order: "Pasūtīt" },
    hero: {
      title: "RIGA FRIED CHICKEN",
      subtitle: "Kraukšķīga vista, kas radīta Rīgai",
      desc: "Svaigi gatavota ceptā vista, sulīgi burgeri un kraukšķīgi frī kartupeļi — piegāde ar Bolt Food visā Rīgā.",
      cta: "Pasūtīt Bolt Food",
      badge: "Piegāde 30–40 min"
    },
    about: {
      title: "Par mums",
      text: "Riga Fried Chicken ir virtuālā virtuve Rīgas sirdī, kas specializējas Amerikas dienvidu stila ceptā vistā. Katru gabaliņu marinējam garšvielās un ceptam līdz zeltaini kraukšķīgai garozai. Pasūtini caur Bolt Food un bauda kraukšķīgo vistu jau pēc pusstundas!"
    },
    menu: {
      title: "Ēdienkarte",
      subtitle: "Viss klāsts — no spaiņiem līdz uzkodām",
      addToCart: "Pievienot",
      priceFrom: "no"
    },
    map: {
      title: "Kur mūs atrast",
      text: "Pasūtini piegādi caur Bolt Food vai paņem līdzi no mūsu virtuves Rīgā.",
      address: "Rīga, Latvija",
      openHours: "Katru dienu: 11:00–23:00"
    },
    footer: {
      rights: "Visas tiesības aizsargātas.",
      orderNow: "Pasūti tagad Bolt Food",
      followUs: "Seko mums"
    },
    cart: {
      empty: "Grozs ir tukšs",
      total: "Kopā",
      title: "Tavs pasūtījums"
    }
  },
  ru: {
    langName: "Русский",
    nav: { menu: "Меню", about: "О нас", location: "Расположение", order: "Заказать" },
    hero: {
      title: "RIGA FRIED CHICKEN",
      subtitle: "Хрустящая курочка, созданная для Риги",
      desc: "Свежеприготовленная жареная курица, сочные бургеры и хрустящая картошка фри — доставка через Bolt Food по всей Риге.",
      cta: "Заказать в Bolt Food",
      badge: "Доставка 30–40 мин"
    },
    about: {
      title: "О нас",
      text: "Riga Fried Chicken — виртуальная кухня в сердце Риги, специализирующаяся на жареной курице в стиле американского Юга. Каждый кусочек маринуется в специях и обжаривается до золотистой хрустящей корочки. Закажи через Bolt Food и наслаждайся хрустящей курочкой уже через полчаса!"
    },
    menu: {
      title: "Меню",
      subtitle: "Весь ассортимент — от ведёрок до закусок",
      addToCart: "Добавить",
      priceFrom: "от"
    },
    map: {
      title: "Где нас найти",
      text: "Закажи доставку через Bolt Food или забери заказ сам с нашей кухни в Риге.",
      address: "Рига, Латвия",
      openHours: "Ежедневно: 11:00–23:00"
    },
    footer: {
      rights: "Все права защищены.",
      orderNow: "Заказать сейчас в Bolt Food",
      followUs: "Мы в соцсетях"
    },
    cart: {
      empty: "Корзина пуста",
      total: "Итого",
      title: "Твой заказ"
    }
  },
  en: {
    langName: "English",
    nav: { menu: "Menu", about: "About", location: "Location", order: "Order" },
    hero: {
      title: "RIGA FRIED CHICKEN",
      subtitle: "Crispy chicken, made for Riga",
      desc: "Freshly cooked fried chicken, juicy burgers and crunchy fries — delivered via Bolt Food across Riga.",
      cta: "Order on Bolt Food",
      badge: "Delivery 30–40 min"
    },
    about: {
      title: "About us",
      text: "Riga Fried Chicken is a delivery kitchen in the heart of Riga, specializing in Southern-style fried chicken. Every piece is marinated in spices and fried to a golden, crispy crust. Order via Bolt Food and enjoy crispy chicken in half an hour!"
    },
    menu: {
      title: "Menu",
      subtitle: "The full range — from buckets to snacks",
      addToCart: "Add",
      priceFrom: "from"
    },
    map: {
      title: "Find us",
      text: "Order delivery via Bolt Food or pick up yourself from our kitchen in Riga.",
      address: "Riga, Latvia",
      openHours: "Daily: 11:00–23:00"
    },
    footer: {
      rights: "All rights reserved.",
      orderNow: "Order now on Bolt Food",
      followUs: "Follow us"
    },
    cart: {
      empty: "Cart is empty",
      total: "Total",
      title: "Your order"
    }
  }
};

// Menu data — full assortment with EUR pricing
const menuData = [
  {
    id: "buckets",
    icon: "images/icon-bucket.svg",
    name: { lv: "Vistas spaiņi", ru: "Ведёрки с курицей", en: "Chicken buckets" },
    items: [
      {
        name: { lv: "Mazais spainis (6 gab.)", ru: "Маленькое ведёрко (6 шт.)", en: "Small bucket (6 pcs)" },
        desc: { lv: "6 kraukšķīgi ceptas vistas gabaliņi", ru: "6 хрустящих кусочков курицы", en: "6 crispy fried chicken pieces" },
        price: 12.90
      },
      {
        name: { lv: "Ģimenes spainis (12 gab.)", ru: "Семейное ведёрко (12 шт.)", en: "Family bucket (12 pcs)" },
        desc: { lv: "12 kraukšķīgi ceptas vistas gabaliņi visai ģimenei", ru: "12 кусочков курицы для всей семьи", en: "12 crispy pieces, perfect to share" },
        price: 22.90
      },
      {
        name: { lv: "Ballītes spainis (20 gab.)", ru: "Ведёрко для вечеринки (20 шт.)", en: "Party bucket (20 pcs)" },
        desc: { lv: "20 gabaliņu spainis lielai kompānijai", ru: "20 кусочков для большой компании", en: "20 pieces for a big group" },
        price: 34.90
      }
    ]
  },
  {
    id: "tenders",
    icon: "images/icon-tenders.svg",
    name: { lv: "Vistas strēmeles", ru: "Куриные полоски", en: "Chicken tenders" },
    items: [
      {
        name: { lv: "Kraukšķīgās strēmeles (3 gab.)", ru: "Хрустящие полоски (3 шт.)", en: "Crispy tenders (3 pcs)" },
        desc: { lv: "Ar mērci pēc izvēles", ru: "С соусом на выбор", en: "Served with a dip of choice" },
        price: 7.50
      },
      {
        name: { lv: "Kraukšķīgās strēmeles (5 gab.)", ru: "Хрустящие полоски (5 шт.)", en: "Crispy tenders (5 pcs)" },
        desc: { lv: "Ar mērci pēc izvēles", ru: "С соусом на выбор", en: "Served with a dip of choice" },
        price: 11.50
      },
      {
        name: { lv: "Karstās vistas spārniņi (6 gab.)", ru: "Острые куриные крылышки (6 шт.)", en: "Spicy chicken wings (6 pcs)" },
        desc: { lv: "Pikanti marinēti spārniņi", ru: "Пикантно маринованные крылышки", en: "Spicy marinated wings" },
        price: 9.90
      },
      {
        name: { lv: "Vistas spārniņi BBQ (6 gab.)", ru: "Куриные крылышки BBQ (6 шт.)", en: "BBQ chicken wings (6 pcs)" },
        desc: { lv: "Saldskābā BBQ mērcē", ru: "В кисло-сладком соусе BBQ", en: "Tossed in sweet BBQ sauce" },
        price: 9.90
      }
    ]
  },
  {
    id: "burgers",
    icon: "images/icon-burger.svg",
    name: { lv: "Burgeri", ru: "Бургеры", en: "Burgers" },
    items: [
      {
        name: { lv: "Klasiskais Chicken burgers", ru: "Классический Chicken бургер", en: "Classic Chicken burger" },
        desc: { lv: "Kraukšķīga vistas filejas šnicele, salāti, mērce", ru: "Хрустящее филе, салат, соус", en: "Crispy chicken fillet, lettuce, sauce" },
        price: 8.90
      },
      {
        name: { lv: "Spicy Chicken burgers", ru: "Острый Chicken бургер", en: "Spicy Chicken burger" },
        desc: { lv: "Ass vistas fileja, jalapeño, čili mērce", ru: "Острое филе, халапеньо, чили-соус", en: "Spicy fillet, jalapeño, chili sauce" },
        price: 9.50
      },
      {
        name: { lv: "Double Cheese burgers", ru: "Двойной сырный бургер", en: "Double Cheese burger" },
        desc: { lv: "Divas vistas šniceles, dubultsiers, bekons", ru: "Двойное филе, двойной сыр, бекон", en: "Double fillet, double cheese, bacon" },
        price: 11.90
      },
      {
        name: { lv: "Zinger burgers", ru: "Зингер бургер", en: "Zinger burger" },
        desc: { lv: "Pikanta zinger fileja ar krēmīgu mērci", ru: "Острое зингер-филе со сливочным соусом", en: "Spicy zinger fillet with creamy sauce" },
        price: 9.90
      }
    ]
  },
  {
    id: "sides",
    icon: "images/icon-fries.svg",
    name: { lv: "Uzkodas", ru: "Закуски", en: "Sides" },
    items: [
      {
        name: { lv: "Frī kartupeļi (S)", ru: "Картофель фри (S)", en: "French fries (S)" },
        desc: { lv: "Kraukšķīgi zelta frī kartupeļi", ru: "Хрустящий золотистый картофель фри", en: "Crispy golden fries" },
        price: 3.50
      },
      {
        name: { lv: "Frī kartupeļi (L)", ru: "Картофель фри (L)", en: "French fries (L)" },
        desc: { lv: "Liela porcija kraukšķīgu frī kartupeļu", ru: "Большая порция хрустящего картофеля", en: "Large portion of crispy fries" },
        price: 4.90
      },
      {
        name: { lv: "Sīpolu gredzeni", ru: "Луковые кольца", en: "Onion rings" },
        desc: { lv: "Kraukšķīgā mīklā cepti sīpolu gredzeni", ru: "Луковые кольца в хрустящей панировке", en: "Onion rings in crispy batter" },
        price: 4.50
      },
      {
        name: { lv: "Kāpostu salāti (Coleslaw)", ru: "Салат коулслоу", en: "Coleslaw salad" },
        desc: { lv: "Svaigi kāposti krēmīgā mērcē", ru: "Свежая капуста в сливочном соусе", en: "Fresh cabbage in creamy dressing" },
        price: 3.20
      },
      {
        name: { lv: "Sierstopiņas", ru: "Сырные палочки", en: "Cheese sticks" },
        desc: { lv: "Kūstošs siers kraukšķīgā panējumā", ru: "Тающий сыр в хрустящей панировке", en: "Melting cheese in crispy coating" },
        price: 5.50
      },
      {
        name: { lv: "Kartupeļu biezenis ar mērci", ru: "Картофельное пюре с соусом", en: "Mashed potato with gravy" },
        desc: { lv: "Krēmīgs biezenis ar gaļas mērci", ru: "Кремовое пюре с мясным соусом", en: "Creamy mash with gravy" },
        price: 3.90
      }
    ]
  },
  {
    id: "sauces",
    icon: "images/icon-sauce.svg",
    name: { lv: "Mērces", ru: "Соусы", en: "Sauces" },
    items: [
      {
        name: { lv: "BBQ mērce", ru: "Соус BBQ", en: "BBQ sauce" },
        desc: { lv: "Saldskāba grilēšanas mērce", ru: "Кисло-сладкий соус для гриля", en: "Sweet & tangy grilling sauce" },
        price: 0.90
      },
      {
        name: { lv: "Ķiploku mērce", ru: "Чесночный соус", en: "Garlic sauce" },
        desc: { lv: "Krēmīga ķiploku mērce", ru: "Кремовый чесночный соус", en: "Creamy garlic sauce" },
        price: 0.90
      },
      {
        name: { lv: "Čili mērce", ru: "Соус чили", en: "Chili sauce" },
        desc: { lv: "Karsta un pikanta", ru: "Острый и пикантный", en: "Hot and spicy" },
        price: 0.90
      },
      {
        name: { lv: "Medus-sinepju mērce", ru: "Медово-горчичный соус", en: "Honey mustard sauce" },
        desc: { lv: "Salda un pikanta kombinācija", ru: "Сладко-пикантное сочетание", en: "Sweet and tangy combination" },
        price: 0.90
      }
    ]
  },
  {
    id: "drinks",
    icon: "images/icon-drink.svg",
    name: { lv: "Dzērieni", ru: "Напитки", en: "Drinks" },
    items: [
      {
        name: { lv: "Coca-Cola 0.5L", ru: "Coca-Cola 0.5Л", en: "Coca-Cola 0.5L" },
        desc: { lv: "", ru: "", en: "" },
        price: 2.50
      },
      {
        name: { lv: "Fanta 0.5L", ru: "Fanta 0.5Л", en: "Fanta 0.5L" },
        desc: { lv: "", ru: "", en: "" },
        price: 2.50
      },
      {
        name: { lv: "Sprite 0.5L", ru: "Sprite 0.5Л", en: "Sprite 0.5L" },
        desc: { lv: "", ru: "", en: "" },
        price: 2.50
      },
      {
        name: { lv: "Minerālūdens 0.5L", ru: "Минеральная вода 0.5Л", en: "Mineral water 0.5L" },
        desc: { lv: "", ru: "", en: "" },
        price: 2.00
      },
      {
        name: { lv: "Ledus tēja 0.5L", ru: "Холодный чай 0.5Л", en: "Ice tea 0.5L" },
        desc: { lv: "", ru: "", en: "" },
        price: 2.50
      }
    ]
  },
  {
    id: "combo",
    icon: "images/icon-combo.svg",
    name: { lv: "Komplekti", ru: "Комбо-наборы", en: "Combo meals" },
    items: [
      {
        name: { lv: "Burgera komplekts", ru: "Комбо с бургером", en: "Burger combo" },
        desc: { lv: "Burgers pēc izvēles + frī kartupeļi + dzēriens", ru: "Бургер на выбор + картофель фри + напиток", en: "Any burger + fries + drink" },
        price: 12.90
      },
      {
        name: { lv: "Strēmeļu komplekts", ru: "Комбо с полосками", en: "Tenders combo" },
        desc: { lv: "3 vistas strēmeles + frī kartupeļi + dzēriens + mērce", ru: "3 куриные полоски + картофель фри + напиток + соус", en: "3 tenders + fries + drink + sauce" },
        price: 13.90
      },
      {
        name: { lv: "Duo komplekts diviem", ru: "Комбо Duo на двоих", en: "Duo combo for two" },
        desc: { lv: "2 burgeri + 2 frī kartupeļi + 2 dzērieni", ru: "2 бургера + 2 картофеля фри + 2 напитка", en: "2 burgers + 2 fries + 2 drinks" },
        price: 22.90
      }
    ]
  }
];
