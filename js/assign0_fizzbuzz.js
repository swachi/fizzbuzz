var app = angular.module('myApp', []);
app.controller('MyFizzBuzzController', function($scope) {
	$scope.$watch('[fizzBuzzNum]', function(){
		// console.log('h'+$scope.fizzBuzzNum)
		if ($scope.fizzBuzzNum==0){
			$scope.fizzBuzzNum == 1;
		}
		if ($scope.fizzBuzzNum < 0){
			$scope.fizzBuzzNum = Math.abs($scope.fizzBuzzNum);
		}
		var rng = _.range(1, Math.abs($scope.fizzBuzzNum))
		$scope.fizzBuzzAns = _.map(
			_.range(1, Math.abs($scope.fizzBuzzNum+1)),
			function(num){
				var ans = ""
				if (num%3 == 0) {
					ans += "Fizz";
				}
				if (num%5 == 0) {
					ans += "Buzz";
				}
				if (ans == ""){
					ans = num;
				}
				return ans;
			}
		);

	});

});