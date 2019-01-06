angular.module('myApp', ['ui.bootstrap.demo', 'ng-route']).controller('ModalDemoController', function ($uibModal, $log, $document) {
    var vm = this;
    vm.console.log('Running File');
    vm.items = ['item1', 'item2', 'item3'];

    vm.animationsEnabled = true;

    vm.open = function (size, parentSelector) {
      $log("Heloo");
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceController',
        controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    vm.openComponentModal = function () {
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        component: 'modalComponent',
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('modal-component dismissed at: ' + new Date());
      });
    };
});
// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('myApp', 'ui.bootstrap.demo').controller('ModalInstanceController', function ($uibModalInstance, items) {
  var vm = this;
  vm.items = items;
  vm.selected = {
    item: vm.items[0]
  };

  vm.ok = function () {
    $uibModalInstance.close(vm.selected.item);
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('myApp', 'ui.bootstrap.demo').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({
        $value: $ctrl.selected.item
      });
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({
        $value: 'cancel'
      });
    };
  }
});

(function () {
  angular.module('myApp', []).controller('AvailableLinesController',
    AvailableLinesController);

  AvailableLinesController.$inject = ['$scope'];
  
  function AvailableLinesController() {
    
    var vm = this;
    vm.modalName = "Test";
    vm.firstname = "John";
    vm.DisplayCard = function (cardId) {
      vm.modalName = cardId;
    }

    vm.changeName = function () {
      vm.firstname = "Nelly";
    }

    vm.lineStatus = "Good Service";
    vm.lines = [{
        name: 'northern'
      },
      {
        name: 'circle'
      },
      {
        name: 'central'
      },
      {
        name: 'district'
      },
      {
        name: 'hammersmith & city'
      },
      {
        name: 'jubilee'
      },
      {
        name: 'metropolitan'
      },
      {
        name: 'victoria'
      },
      {
        name: 'piccadilly'
      },
      {
        name: 'waterloo & city'
      }
    ];

  }
})();