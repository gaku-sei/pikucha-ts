/// <reference path="typings/tsd" />

interface IScopeStringAny extends ng.IScope {
  [s: string]: any;
}

export default ['$scope', ($scope: IScopeStringAny) => {
  $scope['welcomeMessage'] = 'Bonjour tout le monde!';
}];
