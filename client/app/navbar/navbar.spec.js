describe('Unit testing navbar', function () {
  beforeEach(module('navbar'));

  describe('NavCtrl', function () {
    var ctrl, scope, location;

    beforeEach(inject(function($controller, $rootScope, _$location_) {
      location = _$location_;
      scope = $rootScope.$new();
      ctrl = $controller('NavCtrl', { $scope: scope });
    }));

    it('should have nav items defined', function () {
      expect(scope.items).toBeDefined();
    });

    it('should have a method to check if a path is active', function () {
      // use the second item for this test
      var item = scope.items[1];

      location.path(item.path);
      expect(location.path()).toBe(item.path);
      expect(scope.isActive(item)).toBe(true);
      expect(scope.isActive(scope.items[0])).toBe(false);
    });
  });
});