var chatroom = angular.module("chatroom",
	 ['ngRoute','RoomCtrl']);
chatroom.value('nickname','anonymous');
chatroom.config(function($routeProvider){
	$routeProvider.
		when('/',{
			templateUrl: 'views/room.html',
			controller: 'RoomCtrl'
		});
});
