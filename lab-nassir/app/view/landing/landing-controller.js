'use strict';

require('./_landing.scss');

module.exports = ['$log', '$location', 'authService', LandingController];

function LandingController($log, $location, authService) {
  $log.debug('init LandingController;');
  this.showLogin = false;

  this.switchLoginSignup = function() {
    this.showLogin ? this.showLogin = false : this.showLogin = true;
  };
}
