(function() {
  'use strict';

  angular
    .module('app')
    .factory('notificationService', notificationService);

  function notificationService($timeout) {
    var message = '';
    var messageType = '';
    var service = {
      messageType: messageType,
      message: message,
      clearNotifications: clearNotifications,
      sendErrorNotification: sendErrorNotification
    };
    return service;

    function clearNotifications() {
      service.message = '';
    }

    function sendErrorNotification(err) {
      service.messageType = 'error';
      service.message = 'an error has occured';
      // $timeout(function(){
      //   service.message = '';
      // }, 2000);
    }
  }

})();