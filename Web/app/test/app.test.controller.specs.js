describe('HomeController', function () {
    var controllerFactory;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller) {
        controllerFactory = function () {
            return $controller('HomeController');
        };
    }));

    it('should be defined', function () {
        var sut = controllerFactory();
        expect(sut).toBeDefined;
    });

    it('should have a list of monkey', function () {
        var sut = controllerFactory();
        expect(sut.monkeys.length).toEqual(3);
    });

});