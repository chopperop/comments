var app = angular.module('links', []);

/* 
app.factory('Links', function () {
	var Links = {};
	Links.all = [
	{
		url: "www.stumweb.com",
		title: "Stumweb: the front page of New York City!",
		comment: "nice website"
	},
	{
		url: "www.google.com",
		title: "Search Google now",
		comment: "google search"
	},
	{
		url: "www.facebook.com",
		title: "Find out what your friends are doing",
		comment: "facebook"
	}];
	return Links;
});
*/

app.controller('LinksCtrl', function ($scope) {
	$scope.links = [
	{
		url: "www.stumweb.com",
		title: "Stumweb: the front page of New York City!",
		comment: "nice website"
	},
	{
		url: "www.google.com",
		title: "Search Google now",
		comment: "google search"
	},
	{
		url: "www.facebook.com",
		title: "Find out what your friends are doing",
		comment: "facebook"
	}];

	$scope.addLink = function () {
		$scope.links.push($scope.newLink);
		$scope.newLink = {};
	}
})

app.directive('bigger', function () {
	return function (scope, element, attrs) {
		element.bind('mouseenter', function () {
			element.addClass(attrs.bigger)
		})
	}
});

app.directive('normal', function () {
	return function (scope, element, attrs) {
		element.bind('mouseleave', function () {
			element.removeClass(attrs.bigger)
		})
	}
})

