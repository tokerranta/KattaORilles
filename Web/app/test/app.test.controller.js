(function () {
    'use strict';

    angular.module('app')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.monkeys = [];
        activate();

        function activate() {
            vm.monkeys = [
                { name: 'foo' },
                { name: 'bar' },
                { name: 'baz' }
            ];
        }

    }

}());