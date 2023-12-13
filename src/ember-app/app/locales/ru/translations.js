import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kk',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kk',
          title: 'Kk'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
