'use strict';

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  controller: ['$log', 'picService', ThumbnailController],
  bindings: {
    pic: '<',
  },
};

function ThumbnailController($log, picService) {
  $log.debug('Init ThumbnailController;');

  this.deletePic = function() {
    $log.debug('thumbnailCtrl.deletePic();');
    
  };
}
