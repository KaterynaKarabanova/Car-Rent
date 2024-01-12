import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          homeText:
            'Our application presents more than 30 cars of different classes, sizes and years of production that can be rented. You can choose a car, contact the owner and plan your comfortable trip. Do not delay and choose a car in the Catalog section.',
          homeTitleChoose: 'Choose with Comfort',
          homeTitleDrive: 'Drive with Comfort',
          catalog: 'Catalog',
          navHome: 'Home',
          navCatalog: 'Catalog',
          navFav: 'Favorites',
          сarBrand: 'Car brand',
          price: 'Price/ 1 hour',
          mileage: 'Сar mileage / km',
          from: 'From',
          to: 'To',
          reset: 'Reset',
          submit: 'Submit',
          learnMore: 'Learn More',
          loadMore: 'Load More',
          noFavCars: 'There are no favorite cars here!',
          addFavCars: 'But you can add them at any time from',
          rentCar: 'Rental Car',
          tentalConditions: 'Rental Conditions',
          acesories: 'Accessories and functionalities',
          engineSize: 'Engine Size',
          type: 'Type',
          year: 'Year',
          fuelCons: 'Fuel Consumption',
          cooperation: 'Cooperation',
          placesKyiv: 'Kyiv, Kyiv region',
          placesLviv: 'Lviv, Lviv region',
          placesDnipro: 'Dnipro, Dnipropetrovsk region',
          placesZaporizhzhia: 'Zaporizhzhia, Zaporizhzhia region',
          placesTernopil: 'Ternopil, Ternopil region',
          placesIvanoFrankivsk: 'Ivano-Frankivsk, Ivano-Frankivsk region',
          placesRivne: 'Rivne, Rivne region',
          placesVinnitsa: 'Vinnytsia, Vinnytsia region',
          placesKhmelnytskyi: 'Khmelnytskyi, Khmelnytskyi region',
          placesMykolaiv: 'Mykolaiv, Mykolaiv region',
          placesPoltava: 'Poltava, Poltava region',
          placesLutsk: 'Lutsk, Lutsk region',
          placesCherkasy: 'Cherkasy, Cherkasy region',
          placesZhytomyr: 'Zhytomyr, Zhytomyr region',
          placesChernihiv: 'Chernihiv, Chernihiv region',
          placesChernivtsi: 'Chernivtsi, Chernivtsi region',
          placesKropyvnytskyi: 'Kropyvnytskyi, Kirovohrad region',
          placesSumy: 'Sumy, Sumy region',
          placesUzhhorod: 'Uzhgorod, Uzhgorod region',
          placesKherson: 'Kherson, Kherson region',
          placesDonetsk: 'Donetsk, Donetsk region',
          placesLuhansk: 'Luhansk, Luhansk region',
          add: 'Add',
          addImage: 'Add image',
          personalInfo: 'Personal information',
          name: 'Name',
          placeholderName: 'Type your name',
          surname: 'Surname',
          placeholderSurname: 'Type your surname',
          phone: 'Phone',
          placeholderPhone: 'Type your phone number',
          city: 'City',
          carInfo: 'Car information',
          manufacturerCompany: 'Manufacturer company',
          placeholderCompany: 'Type manufacturer company name',
          model: 'Model',
          placeholderModel: 'Type car model name',
          placeholderFuel: "Type car's fuel consumption",
          placeholderEngine: "Type car's engine size",
          addDescription: 'Add Description',
          descriptionValid: 'Description is required',
          placeholderDesc:
            'Type additional information or a general description of the car',
          validLicense: "Valid driver's license",
          securityDeposit: 'Security deposit required',
          minimumAge: 'Minimum age:',
          anyQuestions: 'Any questions left?',
          callUs: 'You can call us Mon-Fri 10:00-18:00!',
          contacts: 'Contacts:',
          followUs: 'Follow us in social media:',
          toCatalog: 'Catalog',
          cooperationText: 'First of all, familiarize yourself with our',
          and: 'and',
          rentConditions: ' Terms of cooperation ',
          rentContract: ' Rent contract',
          cooperateText:
            'Then fill out the form below, carefully checking all the fields. After sending the form, our manager will contact you to negotiate the signing of the contract and determine the rental price of your car.',
          fillForm: 'Fill Form',
          conditions: 'Rental Conditions:',
          wantToRent: 'Want to rent',
          yourCar: 'your car with us?',
          just: 'Just',
          imagine: 'Imagine',
          insideText:
            "To choose the most comfortable car to rent it's also important to check a salon. So here you have this oportunity",
          favPageTitle: 'You drove cars that you liked here',
          favTitle: 'Page of Favorite cars',
        },
      },
      ua: {
        translation: {
          homeText:
            'У нашому додатку представлено більше 30 авто на різний смак для подобової оренди. Обирайте авто, телефонуйте власнику і плануйте комфортну поїздку. Не зволікайте та вибирайте авто в розділі Пошуку.',
          homeTitleChoose: 'Обирай комфортно',
          homeTitleDrive: 'Кермуй з комфортом',
          catalog: 'Знайти авто',
          navHome: 'Головна',
          navCatalog: 'Пошук',
          navFav: 'Збережене',
          сarBrand: 'Марка авто',
          price: 'Ціна/ 1 год',
          mileage: 'Пробіг авто / км',
          from: 'Від',
          to: 'До',
          reset: 'Cкинути',
          submit: 'Пошук',
          learnMore: 'Дізнатись більше',
          loadMore: 'Завантажити ще...',
          noFavCars: 'В гаражі збережених авто - пусто!',
          addFavCars:
            'Але ти можеш пригнати авто сюди в будь-який час зі сторінки',
          rentCar: 'Орендувати',
          tentalConditions: 'Умови оренди',
          acesories: 'Аксесуари та функції',
          engineSize: 'Розмір двигуна',
          type: 'Тип',
          year: 'Рік',
          fuelCons: 'Витрата палива',
          cooperation: 'Співпраця',
          placesKyiv: 'Київ, Київська область',
          placesLviv: 'Львів, Львівська область',
          placesDnipro: 'Дніпро, Дніпропетровська область',
          placesZaporizhzhia: 'Запоріжжя, Запорізька область',
          placesTernopil: 'Тернопіль, Тернопільська область',
          placesIvanoFrankivsk: 'Івано-Франківськ, Івано-Франківська область',
          placesRivne: 'Рівне, Рівненська область',
          placesVinnitsa: 'Вінниця, Вінницька область',
          placesKhmelnytskyi: 'Хмельницький, Хмельницька область',
          placesMykolaiv: 'Миколаїв, Миколаївська область',
          placesPoltava: 'Полтава, Полтавська область',
          placesLutsk: 'Луцьк, Луцька область',
          placesCherkasy: 'Черкаси, Черкаська область',
          placesZhytomyr: 'Житомир, Житомирська область',
          placesChernihiv: 'Чернігів, Чернігівська область',
          placesChernivtsi: 'Чернівці, Чернівецька область',
          placesKropyvnytskyi: 'Кропивницький, Кіровоградська область',
          placesSumy: 'Суми, Сумська область',
          placesUzhhorod: 'Ужгород, Ужгородська область',
          placesKherson: 'Херсон, Херсонська область',
          placesDonetsk: 'Донецьк, Донецька область',
          placesLuhansk: 'Луганськ, Луганська область',
          add: 'Додати',
          addImage: 'Додати фото',
          personalInfo: 'Особиста інформація',
          name: "Ім'я",
          placeholderName: "Введіть своє ім'я",
          surname: 'Прізвище',
          placeholderSurname: 'Введіть своє прізвище',
          phone: 'Телефон',
          placeholderPhone: 'Введіть кнтактний номер телефону',
          city: 'Місто',
          carInfo: 'Про авто',
          manufacturerCompany: 'Компанія-виробник',
          placeholderCompany: 'Введіть компанію-виробник авто',
          model: 'Модель',
          placeholderModel: 'Введіть модель авто',
          placeholderFuel: 'Зазначьте витрату палива авто',
          placeholderEngine: 'Зазначьте розмір двигуна авто',
          addDescription: 'Додати опис авто',
          descriptionValid: "Поле опису обов'язкове до заповнення",
          placeholderDesc:
            'Введіть додаткову інформацію або загальний описа авто',
          validLicense: 'Діючі водійські права',
          securityDeposit: 'Потрібна страхова застава',
          minimumAge: 'Мінімальний вік:',
          anyQuestions: 'Залишились питання?',
          callUs: 'Телефонуй нам в Пн-Пт 10:00-18:00!',
          contacts: 'Контакти:',
          followUs: 'Доєднуйся до нас в соціальних мережах:',
          toCatalog: 'Пошук',
          cooperationText: 'В першу чергу, просимо Вас переглянути ',
          and: 'і',
          rentConditions: ' Умови співпраці ',
          rentContract: ' Договір оренди',
          cooperateText:
            "Потім заповніть форму нижче, уважно перевіряючи всі поля. Після відправлення форми наш менеджер зв'яжеться з вами для узгодження підписання договору та уточнення вартості оренди вашого автомобіля.",
          fillForm: 'Заповнити форму',
          conditions: 'Умови оренди:',
          wantToRent: 'Бажаєте надати',
          yourCar: 'своє авто в оренду?',
          just: 'Просто',
          imagine: 'Уявіть',
          insideText:
            'Щоб вибрати найбільш комфортний автомобіль для оренди, також важливо перевірити салон. Отже, у вас є така можливість',
          favPageTitle: 'Ти пригнав сюди авто, які тобі сподобались',
          favTitle: 'Сторінка улюблених авто',
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
