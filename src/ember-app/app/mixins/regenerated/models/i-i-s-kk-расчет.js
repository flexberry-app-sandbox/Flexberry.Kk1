import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  код: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-kk-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kk-расчет.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-kk-расчет.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-kk-расчет.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Расчет', 'i-i-s-kk-расчет', {
    код: attr('Код', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-kk-сотрудники', 'ФИО', {
      фио: attr('ФИО', { index: 2, hidden: true }),
      должности: belongsTo('i-i-s-kk-должности', '', {
        наименование: attr('Должность', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('Расчет', 'i-i-s-kk-расчет', {
    код: attr('Код', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-kk-сотрудники', 'Фио', {
      фио: attr('Фио', { index: 2 }),
      должности: belongsTo('i-i-s-kk-должности', '', {
        наименование: attr('Должность', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
