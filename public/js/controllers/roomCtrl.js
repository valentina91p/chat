angular.module('chatroom',[]).
	controller('RoomCtrl',function($scope){
		$scope.msg = "Hello World";
		console.log('Inside controller');
	});