(function () {
    'use strict';

    var values = {
        appSettings: null,
    };

    angular
        .module('guitarMaster')
        .value('Values', values);
})();