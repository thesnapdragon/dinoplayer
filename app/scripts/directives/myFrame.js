'use strict';

angular.module('dinoplayerApp')
    .directive('myFrame',function(){
        return {
            link:function(scope,ele,attrs){
                ele.bind('load', function (event) {
                    scope.$apply(attrs.myFrame);
        });
            }
        };
    });
