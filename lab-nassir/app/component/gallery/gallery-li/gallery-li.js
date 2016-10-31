'use strict';

module.exports = {
  template: require('./gallery-li.html'),
  controller: ['$log', 'galleryService', GalleryLiController],
  controllerAs: 'galleryLiCtrl',
  bindings: {
    gallery: '<',
  },
};

function GalleryLiController($log, galleryService) {
  $log.debug('Init GalleryLiController;');

  this.deleteGallery = function() {
    galleryService.deleteGalleries(this.gallery._id);
  };
}
