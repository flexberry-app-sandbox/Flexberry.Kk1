import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  отправлен: DS.attr('boolean', { defaultValue: false }),
  фио: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-kk-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправлен: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.отправлен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фио: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-kk-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-kk-сотрудники', {
    код: attr('Код', { index: 0 }),
    фио: attr('Фио', { index: 1 }),
    отправлен: attr('Отправлен', { index: 2 }),
    должности: belongsTo('i-i-s-kk-должности', 'Должности', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-kk-сотрудники', {
    код: attr('Код', { index: 0 }),
    фио: attr('Фио', { index: 1 }),
    отправлен: attr('Отправлен', { index: 2 }),
    должности: belongsTo('i-i-s-kk-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
