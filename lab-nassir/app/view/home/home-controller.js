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

  this.deleteGalleries = function() {
    $log.debug('sfsfsfsfs', this.gallery);
    galleryService.deleteGalleries(this.currentID)
    .then(() => {
      this.fetchGalleries();
    });
  };

  this.fetchGalleries();
  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  });

}
