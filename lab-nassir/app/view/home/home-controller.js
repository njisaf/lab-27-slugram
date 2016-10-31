'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', 'galleryService', HomeController ];

function HomeController($log, $rootScope, galleryService){
  $log.debug('Initializing HomeController;');

  this.galleries = [];

  this.fetchGalleries = function() {
    $log.debug('Fetching gallleries;');
    galleryService.fetchGalleries()
    .then(galleries => {
      this.galleries = galleries;
      this.currentGallery = galleries[0];
    });
  };

  this.fetchGalleries();

  $rootScope.$on('$locationChangeSuccess', () => {
    this.fetchGalleries();
  });

}
