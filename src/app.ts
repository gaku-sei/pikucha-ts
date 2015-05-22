/// <reference path="typings/tsd" />

import * as angular from 'angular';
import HomeCtrl from 'HomeCtrl';

export default angular.module('pikucha', [])
  .controller('HomeCtrl', HomeCtrl);
