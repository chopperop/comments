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

app.controller('LinksCtrl', ["$scope", "Link", function ($scope, Link) {
	$scope.links = Link.query();

	$scope.addLink = function () {
		link = Link.save($scope.newLink)
		$scope.links.push(link);
		$scope.newLink = {};
	};

	$scope.hideHidden = function () {
		$('.hide-true').hide();
	};

	$scope.showHidden = function () {
		$('.hide-true').show();
	};
}]);

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
});

angular.element(document).ready(function () {
	var item = $('#scroller #link');
	item.css({top:0});
	var animator = function (imgblock) {
		imgblock.animate(
			{top:-350}, 10000,
			function () {
				imgblock.css({top:250});
				animator($(this));
			}
		);
	};
	animator(item);
	$(item).hover(
		function () {$(this).stop()},
		function () {animator(item)}
	);
});
