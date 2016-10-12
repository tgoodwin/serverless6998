angular.module('customerController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Customer', function($scope, $http, Customer) {
		$scope.formData = {};
		$scope.loading = true;
		console.log('loaded');

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createCustomer = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.firstname != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				console.log($scope.formData);
				Customer.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
					});
			}
		};

		$scope.readCustomer = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.email != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				console.log($scope.formData);
				Customer.read($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.response = data;
					});
			}
		};

		$scope.updateCustomer = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.email != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				console.log($scope.formData);
				Customer.update($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteCustomer = function(id) {
			$scope.loading = true;

			Customer.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.APIresponse = data;
				});
		};
	}]);