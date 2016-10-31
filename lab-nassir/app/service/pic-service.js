'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', picService];

function picService($q, $log, $http, Upload, authService) {
  $log.debug('Initializing picService;');

  let service = {};

  service.uploadGalleryPic = function(galleryData, picData) {
    $log.debug('Hit picService.uploadGalleryPic();');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${galleryData._id}/pic`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };

      return Upload.upload({
        url,
        headers,
        method: 'POST',
        data: {
          name: picData.name,
          desc: picData.desc,
          file: picData.file,
        },
      });
    })
    .then(res => {
      galleryData.pics.unshift(res.data);
      $log.log('Success!\n  ', res.data);
      return res.data;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };


  // service.deleteGalleryPic = function(galleryData, picData) {
    // log the method
    // get a token from authService
    // set the url to the pic delete route
    // set config in the usual way
    // $http.delete and etc
    // on success, loop the galleryData.pics array and splice the specific pic out
    // "resolve undefined"?? just return from the result .then block or something. just return, there's nothing
    // on error log error and resolve err
  // }

  return service;
}
