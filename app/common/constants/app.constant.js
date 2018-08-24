(function () {
    'use strict';

    var api = {
        GET_SONGS: '/v2/songs/',
    };

    var constants = {
        DATE_FORMAT: 'yyyy-MM-dd',
        METHOD_CREATE: 'CREATE',
        METHOD_UPDATE: 'UPDATE',
        METHOD_DELETE: 'DELETE',
        LOADER_SHOW: 'LOADER_SHOW',
        LOADER_HIDE: 'LOADER_HIDE',
        ORDER_ASC: 'ASC',
        ORDER_DESC: 'DESC',
        API: api
    };

    angular
        .module('guitarMaster')
		.constant('Constants', constants);
})();