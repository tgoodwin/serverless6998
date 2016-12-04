angular.module('customerController', [])

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
				$scope.formData.address = document.getElementById('street').value;
				$scope.formData.city = document.getElementById('city').value;
				$scope.formData.state = document.getElementById('state').value;
				$scope.formData.ZIP = document.getElementById('ZIP').value;
				console.log($scope.formData);

				Customer.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.then(function(response) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
					}, function(error) {
						console.log(error);
					});
			}
		};

		$scope.readCustomer = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			console.log("read");
			if ($scope.formData.email != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Customer.read($scope.formData.email)

					.then(function(data) {
						console.log('from dynamoDB: ');
						console.log(data);
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.response = data;
					}, function(error) {
						console.log(error);
					});
			}
		};

		$scope.updateCustomer = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			$scope.formData.address = document.getElementById('street').value;
			$scope.formData.city = document.getElementById('city').value;
			$scope.formData.state = document.getElementById('state').value;
			$scope.formData.ZIP = document.getElementById('ZIP').value;
			if ($scope.formData.email != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				console.log($scope.formData);
				Customer.update($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.then(function(data) {
						console.log('updated customer!');
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
					}, function(error) {
						console.log(error);
					});
			}
		};

		// DELETE ==================================================================
		$scope.deleteCustomer = function() {
			$scope.loading = true;

			Customer.delete($scope.formData.email)
				.then(function(data) {
					console.log('deleted customer: ', data);
					$scope.loading = false;
					$scope.APIresponse = data;
				}, function(error) {
					console.log(error);
				});
		};
	}]);