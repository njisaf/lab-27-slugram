'use strict';

require('./_home.scss');

module.exports = ['$log', HomeController ];

function HomeController($log){
  $log.debug('init HomeController;');
  this.oneAtATime = true;
}