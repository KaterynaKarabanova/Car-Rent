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
