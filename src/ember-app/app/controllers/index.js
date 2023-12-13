import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kk.caption'),
          title: i18n.t('forms.application.sitemap.kk.title'),
          children: [{
            link: 'i-i-s-kk-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-сотрудники-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kk-расчет-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-расчет-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-расчет-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kk-должности-l',
            caption: i18n.t('forms.application.sitemap.kk.i-i-s-kk-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.kk.i-i-s-kk-должности-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})