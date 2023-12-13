import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKkДолжностиLForm from './forms/i-i-s-kk-должности-l';
import IISKkРасчетLForm from './forms/i-i-s-kk-расчет-l';
import IISKkСотрудникиLForm from './forms/i-i-s-kk-сотрудники-l';
import IISKkДолжностиEForm from './forms/i-i-s-kk-должности-e';
import IISKkРасчетEForm from './forms/i-i-s-kk-расчет-e';
import IISKkСотрудникиEForm from './forms/i-i-s-kk-сотрудники-e';
import IISKkДолжностиModel from './models/i-i-s-kk-должности';
import IISKkРасчетModel from './models/i-i-s-kk-расчет';
import IISKkСотрудникиModel from './models/i-i-s-kk-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kk-должности': IISKkДолжностиModel,
    'i-i-s-kk-расчет': IISKkРасчетModel,
    'i-i-s-kk-сотрудники': IISKkСотрудникиModel
  },

  'application-name': 'Kk',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kk',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kk',
          title: 'Kk'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kk: {
          caption: 'Kk',
          title: 'Kk',
          'i-i-s-kk-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-kk-расчет-l': {
            caption: 'Расчет',
            title: ''
          },
          'i-i-s-kk-должности-l': {
            caption: 'Должности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kk-должности-l': IISKkДолжностиLForm,
    'i-i-s-kk-расчет-l': IISKkРасчетLForm,
    'i-i-s-kk-сотрудники-l': IISKkСотрудникиLForm,
    'i-i-s-kk-должности-e': IISKkДолжностиEForm,
    'i-i-s-kk-расчет-e': IISKkРасчетEForm,
    'i-i-s-kk-сотрудники-e': IISKkСотрудникиEForm
  },

});

export default translations;
