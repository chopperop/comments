var app = angular.module('links', ["ngResource"]);

app.factory("Link", [
  "$resource", function($resource) {
    return $resource("/links", {}, {
      update: {
        method: "PUT"
      }
    });
  }
]);


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

app.controller('LinksCtrl', function ($scope, Link) {
	$scope.links = Link.query();

	$scope.addLink = function () {
		link = Link.save($scope.newLink)
		$scope.links.push(link);
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

