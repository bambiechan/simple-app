// GLOBAL FUNCTION
activate();

function activate(){
    bootstrapAngular();
}

function bootstrapAngular() {
    angular.module('guitarMaster');
    angular.bootstrap(document, ['guitarMaster']);
}