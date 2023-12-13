import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kk-расчет', 'Unit | Model | i-i-s-kk-расчет', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kk-должности',
    'model:i-i-s-kk-расчет',
    'model:i-i-s-kk-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
