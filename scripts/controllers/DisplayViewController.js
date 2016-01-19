define(['app'], function(app)
{
  app.controller('DisplayViewController', function($scope,$stateParams,$state) {
    $scope.page = 'Display List of Damaged Bags !!!';
      $scope.display = function() {
          $state.go('home');
    };
});
});
