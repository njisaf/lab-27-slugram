'use strict';

module.exports = {
  template: require('./edit-gallery.html'),
  controller: ['$log', 'galleryService', EditGalleryController],
  controllerAs: 'editGalleryCtrl',
  bindings: {
    gallery: '=',
  },
};

function EditGalleryController($log, galleryService) {
  $log.debg('Initializing EditGalleryController;');

  this.updateGallery = function() {
    galleryService.updateGalleries(this.gallery._id, this.gallery);
  };
}
