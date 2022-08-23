import favicon from './extensions/favicon.ico';

const config = {
  head: {
    favicon,
  },
  tutorials: false,
  notifications: { release: false },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
    },
  },
};

const bootstrap = app => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
