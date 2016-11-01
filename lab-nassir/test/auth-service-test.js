'use strict';

describe('Testing authService', function() {
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject((authService, $window, $httpBackend) => {
      this.authService = authService;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('Testing authService.signup', () => {
    it('Should return a token and a 200 status', () => {
      let testUser = {
        username: 'Nobody Important',
        email: 'hrod17@clintonemail.com',
        password: 'password',
      };
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      this.$httpBackend.expectPOST('http://localhost:3000/api/signup', testUser, headers)
      .respond(200, 'testToken');

      this.authService.signup(testUser)
      .then(token => {
        expect(token).toBe('testToken');
      })
      .catch(err => {
        expect(err).toBe(null);
      });
      this.$httpBackend.flush();
    });
  });

  describe('Testing authService.login', () => {
    it('Should return a token and a 200 status', () => {
      let testUser = {
        username: 'Nobody Important',
        password: 'password',
      };
      let base64 = this.$window.btoa(`${testUser.username}:${testUser.password}`);
      let headers = {
        Accept: 'application/json',
        Authorization: `Basic ${base64}`,
      };

      this.$httpBackend.expectGET('http://localhost:3000/api/login', headers)
      .respond(200, 'testToken');

      this.authService.login(testUser)
      .then(token => {
        expect(token).toBe('testToken');
      })
      .catch(err => {
        expect(err).toBe(null);
      });
      this.$httpBackend.flush();
    });
  });

});
