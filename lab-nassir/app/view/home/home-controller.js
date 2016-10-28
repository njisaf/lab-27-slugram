'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', 'galleryService', HomeController ];

function HomeController($log, $rootScope, galleryService){
  $log.debug('Initializing HomeController;');

  this.galleries = [];

  this.fetchGalleries = function() {
    galleryService.fetchGalleries()
    .then(galleries => {
      this.galleries = galleries;
    });
  };

  this.deleteGalleries = function(galleryID) {
    galleryService.deleteGalleries(galleryID)
    .then(() => {
      this.fetchGalleries();
    });
  };

  this.updateGalleries = function(galleryID, galleryData) {
    galleryService.updateGalleries(galleryID, galleryData)
    .then(() => {
      this.fetchGalleries();
    });
  };

  this.fetchGalleries();
  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  });

}
