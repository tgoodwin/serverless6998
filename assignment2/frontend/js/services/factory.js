
angular.module('customerService', [])

	.factory('Customer', ['$http',function($http) {
		return {
			create : function(customerData) {
				var config = {
	                headers : {
	                    'Content-Type': 'application/json'	               	 }
            	}
            	console.log(customerData);
				return $http.post('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + customerData.email,  customerData, config)
					.then(function(response, error) {
						if (error) {
							return error;
						} else {
							return response;
						}
					
					});
			},
			// ID is the customer's EMAIL from the email text-entry box
			read: function(id) {
				return $http.get('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id)
					.then(function(response) {
						console.log(response);
					}, function(error) {
						alert(error.data.type);
					});
			},
			update : function(customerData) {
				return $http.put('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers', customerData)
					.then(function(response) {
						console.log(response);
					}, function(error) {
						alert(error.data.type);
					});
			},
			delete : function(id) {
				return $http.delete('https://5qykueb321.execute-api.us-east-1.amazonaws.com/test/customers/' + id)
					.then(function(response) {
						console.log(response);
					}, function(error) {
						alert(error.data.type);
					});
			}
		}
	}]);