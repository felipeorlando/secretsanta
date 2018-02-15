function authInterceptor(JWT, AppConstants, $state, $q) {
  'ngInject';

  return {
    request: function(config) {
      if (config.url.indexOf(AppConstants.api) === 0 && JWT.get()) {
        config.headers.Authorization = 'Bearer ' + JWT.get();
      }
      return config;
    },

    responseError: function(rejection) {
      if (rejection.status === 401) {
        JWT.destroy();
        $state.go('app.authLogin');
      }

      return $q.reject(rejection);
    }
  }
}

export default authInterceptor;
