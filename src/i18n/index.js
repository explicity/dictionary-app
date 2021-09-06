import I18n from 'react-native-i18n';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';

import ru from './locales/ru-RU';
import en from './locales/en-GB';

export const localesList = {
  en: 'en-GB',
  ru: 'ru-RU',
};

I18n.fallbacks = true;

I18n.translations = {
  en,
  ru,
};

I18n.defaultLocale = localesList.en;
I18n.locale = I18n.currentLocale();

export default I18n;

export const languages = {
  [localesList.en]: {
    name: 'english',
    shortenedName: 'en',
  },
  [localesList.ru]: {
    name: 'russian',
    shortenedName: 'ru',
  },
};

export const languagesArray = [
  languages[localesList.en],
  languages[localesList.ru],
];

export const getCurrentLocale = () => {
  const locale = I18n.currentLocale();

  const shortLocale = locale.split('-').length
    ? locale.split('-')[0].toLowerCase()
    : locale;

  if (['ru', localesList.ru].includes(shortLocale)) {
    return localesList.ru;
  }

  return I18n.defaultLocale;
};

export const isEnglish = () => getCurrentLocale() === localesList.en;
export const isRussian = () => getCurrentLocale() === localesList.ru;

export const setDeviceLocale = () => {
  I18n.locale = DeviceInfo.getDeviceLocale().split('-')[0];
};

export const setMomentLocale = () => {
  if (isEnglish()) {
    moment.locale(localesList.en.toLocaleLowerCase());
  } else {
    moment.locale(localesList.ru.split('-')[0]);
  }
};
