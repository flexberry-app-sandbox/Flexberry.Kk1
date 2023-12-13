import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kk-должности-l');
  this.route('i-i-s-kk-должности-e',
  { path: 'i-i-s-kk-должности-e/:id' });
  this.route('i-i-s-kk-должности-e.new',
  { path: 'i-i-s-kk-должности-e/new' });
  this.route('i-i-s-kk-расчет-l');
  this.route('i-i-s-kk-расчет-e',
  { path: 'i-i-s-kk-расчет-e/:id' });
  this.route('i-i-s-kk-расчет-e.new',
  { path: 'i-i-s-kk-расчет-e/new' });
  this.route('i-i-s-kk-сотрудники-l');
  this.route('i-i-s-kk-сотрудники-e',
  { path: 'i-i-s-kk-сотрудники-e/:id' });
  this.route('i-i-s-kk-сотрудники-e.new',
  { path: 'i-i-s-kk-сотрудники-e/new' });
});

export default Router;
