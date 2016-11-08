'use strict';

describe('Testing loginCtrl', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($rootScope, $componentController, authService, $httpBackend) => {
      authService.setToken('tokentoken');
      this.authService = authService;
      this.$httpBackend = $httpBackend;
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  afterEach(() => {
    this.authService.logout();
  });

  describe('Testing loginCtrl.login', () => {
    it('should return a token', () => {
      let url = 'http://localhost:3000/api/login';

      let exampleUser = {
        username: 'T0P.Secret.Pa33word!',
        password: 'Bill_Jenkins',
      };

      let base64 = this.$window.btoa(`${user.username}:${user.password}`);

      let headers = {
        Authorization: `Basic ${base64}`,
        Accept: 'application/json',
      };
    });
  });

});
