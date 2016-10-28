'use strict';

module.exports = ['$q', '$log', '$http', '$window', authService];

function authService($q, $log, $http, $window) {
  $log.debug('init authService;');
  let service = {};
  let token = null;

  function setToken(_token) {
    $log.debug('hit authService.setToken;');
    if (!_token) return $q.reject(new Error('No token...'));
    $window.localStorage.setItem('token', _token);
    token = _token;
    return $q.resolve(token);
  }

  service.getToken = function() {
    $log.debug('hit authService.getToken;');
    if(token) return $q.resolve(token);
    token = $window.localStorage.getItem('token');
    if(token) return $q.resolve(token);
    return $q.reject(new Error('Token not found...'));
  };

  service.logout = function() {
    $log.debug('hit authService.logout;');
    $window.localStorage.removeItem('token');
    token = null;
    return $q.resolve();
  };

  service.signup = function(user) {
    $log.debug('hit authService.signup;');
    let url = `${__API_URL__}/api/signup`;
    $log.debug('authService.signup URL: ', url);

    let config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
    };

    return $http.post(url, user, config)
    .then(res => {
      $log.log('success', res.data);
      return setToken(res.data);
    })
    .catch(err => {
      $log.error('fail', err.message);
      return $q.reject(err);
    });
  };

  service.login = function(user) {
    $log.debug('hit authService.login');
    let url = `${__API_URL__}/api/login`;
    let base64 = $window.btoa(`${user.username}:${user.password}`);

    let config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${base64}`,
      },
    };
    return $http.get(url, config)
    .then(res => {
      $log.log('Success!', res.data);
      return setToken(res.data);
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  return service;
}
